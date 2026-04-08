/* ── SCROLL PROGRESS ─────────────────────────────────────── */
const progressBar = document.getElementById('scrollProgress');

function updateProgress() {
  const scrolled  = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${(scrolled / maxScroll) * 100}%`;
}

/* ── NAV: shrink on scroll + active link highlighting ───────── */
const nav      = document.getElementById('nav');
const sections = [...document.querySelectorAll('section[id]')];
const navLinks = [...document.querySelectorAll('.nav-links a')];

function updateNav() {
  nav.classList.toggle('scrolled', window.scrollY > 40);

  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
  });

  navLinks.forEach(a =>
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`)
  );
}

/* ── SCROLL REVEAL (Intersection Observer) ───────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── ANIMATED STAT COUNTERS ──────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  if (target === 0) return; // already shows 0, skip animation
  const duration  = 1100;
  const frametime = 16;
  const steps     = duration / frametime;
  const increment = target / steps;
  let current = 0;

  const tick = setInterval(() => {
    current = Math.min(current + increment, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(tick);
  }, frametime);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('.stat-num[data-count]').forEach(el =>
  counterObserver.observe(el)
);

/* ── HAMBURGER MENU ──────────────────────────────────────── */
const hamburger   = document.getElementById('hamburger');
const navLinksList = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navLinksList.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinksList.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksList.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── TERMINAL TYPING ANIMATION ───────────────────────────── */
const typedCmd   = document.getElementById('typedCmd');
const termOutput = document.getElementById('terminalOutput');

const sequence = [
  { cmd: 'python hello.py',       out: 'Hello, world!' },
  { cmd: 'python drive_robot.py', out: 'Motors online. Sensors ready.' },
  { cmd: 'python train_ai.py',    out: 'Training... epoch 1/10 ▓▓▓░░░' },
];

let seqIdx = 0;

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function typeText(text, el, speed = 52) {
  for (const char of text) {
    el.textContent += char;
    await sleep(speed + Math.random() * 28);
  }
}

async function addOutputLine(text) {
  const line = document.createElement('div');
  line.className = 'line';
  line.textContent = text;
  termOutput.appendChild(line);
  // Keep at most 4 output lines
  while (termOutput.children.length > 4) termOutput.removeChild(termOutput.firstChild);
}

async function runTerminal() {
  while (true) {
    const { cmd, out } = sequence[seqIdx % sequence.length];
    typedCmd.textContent = '';
    await sleep(700);
    await typeText(cmd, typedCmd);
    await sleep(320);
    await addOutputLine(out);
    await sleep(2200);
    seqIdx++;
  }
}

runTerminal();

/* ── PASSIVE SCROLL LISTENER ─────────────────────────────── */
window.addEventListener('scroll', () => {
  updateProgress();
  updateNav();
}, { passive: true });

// Initialise nav state on load
updateNav();
