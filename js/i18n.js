/* ── i18n — LearningMachina ────────────────────────────────── */

const translations = {
  en: {
    // Nav
    'nav.what':    'What',
    'nav.learn':   'Learn',
    'nav.coach':   'AI Coach',
    'nav.who':     'Who',
    'nav.github':  'Follow on GitHub',

    // Hero
    'hero.eyebrow': 'Open Source EdTech Hardware',
    'hero.line1':   'Learn.',
    'hero.line2':   'Build.',
    'hero.line3':   'Then make it think.',
    'hero.desc':    'One robot. One device. Everything you need to go from your first line of code to a fully autonomous, AI-powered machine — no internet required.',
    'hero.learnMore': 'Learn more',

    // Stats
    'stats.stages':  'Learning Stages',
    'stats.lessons': 'Hands-on Lessons',
    'stats.offline': 'Works Offline',
    'stats.cloud':   'Cloud Dependency',

    // What
    'what.label': 'The product',
    'what.title': 'A robot that is also a computer.<br>A computer that is also a teacher.',
    'what.p1':    '<strong>LearningMachina</strong> is a compact robot built on <strong>NVIDIA Hardware</strong> — a full Linux PC with a GPU, squeezed into a LEGO-compatible case. Connect a monitor and keyboard: it\'s a computer. Connect motors, cameras, and sensors: it\'s a robot.',
    'what.p2':    'Most people who want to learn programming, robotics, <em>and</em> AI need three separate setups — a laptop, a robotics kit, and a GPU workstation. That\'s thousands of euros and hours of configuration before you write a single line of code.',
    'what.p3':    'LearningMachina ships ready. Every tool installed, every language configured, every course pre-loaded. Plug it in, power it on, and start learning. No setup, no cloud accounts, no broken dependencies. Just you and the machine, learning together, wherever you are — even off-grid.',
    'what.p4':    '<strong>And the best part</strong> is the AI coach that lives inside. A local LLM, fine-tuned on the curriculum, ready to answer your questions, debug your code, and guide you through every step of the learning process. Your personal tutor, available 24/7, without needing an internet connection. And you can even speak to it — built-in voice means you can ask questions and get answers without ever taking your hands off the hardware.',

    // Spec list
    'spec.nvidia':   'NVIDIA Hardware — full Linux + GPU',
    'spec.courses':  'Courses included',
    'spec.tutor':    'Local AI tutor',
    'spec.voice':    'Built-in voice interface',
    'spec.motor':    'Motor driver board included',
    'spec.camera':   'Camera, sensors & motor ports ready',
    'spec.lego':     'LEGO-compatible modular case',
    'spec.langs':    'Python, C++, Rust & Nodejs pre-installed',
    'spec.offline':  '100% offline capable',
    'spec.battery':  'Battery included',
    'spec.cloud':    'Optional cloud connectivity',

    // Learning stages
    'learn.label':    'The curriculum',
    'learn.title':    'Six stages. Zero to autonomous.',
    'learn.subtitle': 'Every lesson follows the embodied learning loop: Concept → Code → Action → Reflection → Extension. You don\'t just read — you make the robot do it.',
    'learn.cta':      'View Course Material',
    'stage0.level':   'Stage 0 — Foundation',
    'stage0.title':   'Linux & the Machine',
    'stage0.desc':    'The command line, SSH, Git, and the robot\'s hardware. You learn to talk to the machine before telling it what to do.',
    'stage1.level':   'Stage 1 — Beginner',
    'stage1.title':   'Programming',
    'stage1.desc':    'Python, C++, Rust, data structures, and networking. Build a web dashboard that talks to your robot in real time.',
    'stage2.level':   'Stage 2 — Gaming',
    'stage2.title':   'Game Development',
    'stage2.desc':    '2D games in Python, 3D games in C++, and multiplayer with Rust. Learn physics engines, rendering, and networked gameplay.',
    'stage3.level':   'Stage 3 — Intermediate',
    'stage3.title':   'Robotics',
    'stage3.desc':    'Electronics, motor control, sensors, computer vision, and ROS2. The robot moves, sees, and reacts to the physical world.',
    'stage4.level':   'Stage 4 — Advanced',
    'stage4.title':   'AI & Machine Learning',
    'stage4.desc':    'PyTorch, deep learning, transformers, agentic AI, multimodal models — all running locally on the Jetson GPU. The robot learns to think.',
    'stage5.level':   'Stage 5 — Capstone',
    'stage5.title':   'Autonomous Robot',
    'stage5.desc':    'Full system architecture, autonomous behaviours, and your graduation mission: design, build, and present an original creation.',

    // Coach
    'coach.label':      'The AI learning coach',
    'coach.title':      'Your teacher lives in the robot.',
    'coach.hero.title': 'A local LLM, fine-tuned on every course',
    'coach.hero.desc':  'An AI coach runs entirely on the device — no internet, no subscription. It knows the full curriculum, answers questions in depth, explains what went wrong in your code, and guides you through every step. Your personal tutor, available 24/7, even off-grid.',
    'coach.voice.title': 'Voice interface',
    'coach.voice.desc':  'Talk to the robot, hear the answer back. Built-in speech recognition and text-to-speech means your hands stay free while you\'re building and wiring.',
    'coach.cloud.title': 'Optional cloud upgrade',
    'coach.cloud.desc':  'Connect to a hosted service for a more powerful model, community-contributed content, and continuously updated courses.',

    // Who
    'who.label':          'Who is it for?',
    'who.title':          'Pretty much everyone, honestly.',
    'who.students.title': 'Students',
    'who.students.desc':  'Learn to code, build robots, and train AI — all on one device, at your own pace.',
    'who.teachers.title': 'Teachers',
    'who.teachers.desc':  'A complete classroom tool. No IT setup, no cloud accounts, no broken dependencies.',
    'who.makers.title':   'Makers & Tinkerers',
    'who.makers.desc':    'A Jetson Linux box in a robot body, pre-configured and ready to hack.',
    'who.offgrid.title':  'Off-grid & Remote',
    'who.offgrid.desc':   'Works anywhere, no internet needed. Quality education without connectivity barriers.',

    // Follow
    'follow.label': 'Join the project',
    'follow.title': 'This is just the beginning.',
    'follow.desc':  'LearningMachina is an open, evolving project. Follow along on GitHub to watch it get built — and eventually, build one yourself.',

    // Footer
    'footer.text': 'Open source · Built with ♥',
  },

  de: {
    // Nav
    'nav.what':    'Was',
    'nav.learn':   'Lernen',
    'nav.coach':   'KI-Coach',
    'nav.who':     'Für wen',
    'nav.github':  'Auf GitHub folgen',

    // Hero
    'hero.eyebrow': 'Open Source EdTech Hardware',
    'hero.line1':   'Lernen.',
    'hero.line2':   'Bauen.',
    'hero.line3':   'Dann lass es denken.',
    'hero.desc':    'Ein Roboter. Ein Gerät. Alles, was du brauchst, um von deiner ersten Codezeile zu einer vollständig autonomen, KI-gesteuerten Maschine zu gelangen — kein Internet nötig.',
    'hero.learnMore': 'Mehr erfahren',

    // Stats
    'stats.stages':  'Lernstufen',
    'stats.lessons': 'Praxislektionen',
    'stats.offline': 'Funktioniert offline',
    'stats.cloud':   'Cloud-Abhängigkeit',

    // What
    'what.label': 'Das Produkt',
    'what.title': 'Ein Roboter, der auch ein Computer ist.<br>Ein Computer, der auch ein Lehrer ist.',
    'what.p1':    '<strong>LearningMachina</strong> ist ein kompakter Roboter, gebaut auf <strong>NVIDIA Hardware</strong> — ein vollständiger Linux-PC mit GPU, in einem LEGO-kompatiblen Gehäuse. Monitor und Tastatur anschließen: Es ist ein Computer. Motoren, Kameras und Sensoren anschließen: Es ist ein Roboter.',
    'what.p2':    'Die meisten Menschen, die Programmieren, Robotik <em>und</em> KI lernen wollen, brauchen drei separate Setups — einen Laptop, ein Robotik-Kit und eine GPU-Workstation. Das sind Tausende Euro und Stunden an Konfiguration, bevor man eine einzige Zeile Code schreibt.',
    'what.p3':    'LearningMachina kommt fertig. Jedes Tool installiert, jede Sprache konfiguriert, jeder Kurs vorgeladen. Einstecken, einschalten und loslernen. Kein Setup, keine Cloud-Konten, keine kaputten Abhängigkeiten. Nur du und die Maschine, gemeinsam lernend, wo auch immer du bist — sogar off-grid.',
    'what.p4':    '<strong>Und das Beste</strong> ist der KI-Coach im Inneren. Ein lokales LLM, feinabgestimmt auf den Lehrplan, bereit deine Fragen zu beantworten, deinen Code zu debuggen und dich durch jeden Schritt des Lernprozesses zu führen. Dein persönlicher Tutor, rund um die Uhr verfügbar, ohne Internetverbindung. Und du kannst sogar mit ihm sprechen — eingebaute Sprachsteuerung bedeutet, dass du Fragen stellen und Antworten bekommen kannst, ohne jemals die Hände von der Hardware zu nehmen.',

    // Spec list
    'spec.nvidia':   'NVIDIA Hardware — volles Linux + GPU',
    'spec.courses':  'Kurse inklusive',
    'spec.tutor':    'Lokaler KI-Tutor',
    'spec.voice':    'Eingebaute Sprachschnittstelle',
    'spec.motor':    'Motortreiber-Board inklusive',
    'spec.camera':   'Kamera, Sensoren & Motoranschlüsse bereit',
    'spec.lego':     'LEGO-kompatibles modulares Gehäuse',
    'spec.langs':    'Python, C++, Rust & Nodejs vorinstalliert',
    'spec.offline':  '100 % offlinefähig',
    'spec.battery':  'Akku inklusive',
    'spec.cloud':    'Optionale Cloud-Anbindung',

    // Learning stages
    'learn.label':    'Der Lehrplan',
    'learn.title':    'Sechs Stufen. Von null zum autonomen Roboter.',
    'learn.subtitle': 'Jede Lektion folgt dem verkörperten Lernkreislauf: Konzept → Code → Aktion → Reflexion → Erweiterung. Du liest nicht nur — du lässt den Roboter es tun.',
    'learn.cta':      'Kursmaterial ansehen',
    'stage0.level':   'Stufe 0 — Grundlage',
    'stage0.title':   'Linux & die Maschine',
    'stage0.desc':    'Die Kommandozeile, SSH, Git und die Hardware des Roboters. Du lernst, mit der Maschine zu sprechen, bevor du ihr sagst, was sie tun soll.',
    'stage1.level':   'Stufe 1 — Anfänger',
    'stage1.title':   'Programmieren',
    'stage1.desc':    'Python, C++, Rust, Datenstrukturen und Netzwerke. Baue ein Web-Dashboard, das in Echtzeit mit deinem Roboter kommuniziert.',
    'stage2.level':   'Stufe 2 — Spieleentwicklung',
    'stage2.title':   'Spieleentwicklung',
    'stage2.desc':    '2D-Spiele in Python, 3D-Spiele in C++ und Multiplayer mit Rust. Lerne Physik-Engines, Rendering und vernetztes Gameplay.',
    'stage3.level':   'Stufe 3 — Mittelstufe',
    'stage3.title':   'Robotik',
    'stage3.desc':    'Elektronik, Motorsteuerung, Sensoren, Computer Vision und ROS2. Der Roboter bewegt sich, sieht und reagiert auf die physische Welt.',
    'stage4.level':   'Stufe 4 — Fortgeschritten',
    'stage4.title':   'KI & Maschinelles Lernen',
    'stage4.desc':    'PyTorch, Deep Learning, Transformer, agentische KI, multimodale Modelle — alles lokal auf der Jetson-GPU. Der Roboter lernt zu denken.',
    'stage5.level':   'Stufe 5 — Abschluss',
    'stage5.title':   'Autonomer Roboter',
    'stage5.desc':    'Vollständige Systemarchitektur, autonome Verhaltensweisen und deine Abschlussmission: entwirf, baue und präsentiere eine originale Kreation.',

    // Coach
    'coach.label':      'Der KI-Lerncoach',
    'coach.title':      'Dein Lehrer lebt im Roboter.',
    'coach.hero.title': 'Ein lokales LLM, feinabgestimmt auf jeden Kurs',
    'coach.hero.desc':  'Ein KI-Coach läuft vollständig auf dem Gerät — kein Internet, kein Abo. Er kennt den gesamten Lehrplan, beantwortet Fragen tiefgehend, erklärt was in deinem Code schiefgelaufen ist und führt dich durch jeden Schritt. Dein persönlicher Tutor, rund um die Uhr, sogar off-grid.',
    'coach.voice.title': 'Sprachschnittstelle',
    'coach.voice.desc':  'Sprich mit dem Roboter, hör die Antwort zurück. Eingebaute Spracherkennung und Text-to-Speech bedeutet, dass deine Hände frei bleiben, während du baust und verkabelst.',
    'coach.cloud.title': 'Optionales Cloud-Upgrade',
    'coach.cloud.desc':  'Verbinde dich mit einem gehosteten Dienst für ein leistungsfähigeres Modell, von der Community beigetragene Inhalte und kontinuierlich aktualisierte Kurse.',

    // Who
    'who.label':          'Für wen ist es?',
    'who.title':          'Eigentlich für so ziemlich jeden.',
    'who.students.title': 'Schüler & Studenten',
    'who.students.desc':  'Lerne programmieren, baue Roboter und trainiere KI — alles auf einem Gerät, in deinem eigenen Tempo.',
    'who.teachers.title': 'Lehrkräfte',
    'who.teachers.desc':  'Ein komplettes Unterrichtswerkzeug. Kein IT-Setup, keine Cloud-Konten, keine kaputten Abhängigkeiten.',
    'who.makers.title':   'Maker & Bastler',
    'who.makers.desc':    'Eine Jetson-Linux-Box im Roboterkörper, vorkonfiguriert und bereit zum Hacken.',
    'who.offgrid.title':  'Off-grid & Abgelegen',
    'who.offgrid.desc':   'Funktioniert überall, kein Internet nötig. Hochwertige Bildung ohne Konnektivitätsbarrieren.',

    // Follow
    'follow.label': 'Mach mit beim Projekt',
    'follow.title': 'Das ist erst der Anfang.',
    'follow.desc':  'LearningMachina ist ein offenes, wachsendes Projekt. Folge auf GitHub, um beim Aufbau zuzuschauen — und irgendwann selbst eins zu bauen.',

    // Footer
    'footer.text': 'Open Source · Mit ♥ gebaut',
  },

  fr: {
    // Nav
    'nav.what':    'Quoi',
    'nav.learn':   'Apprendre',
    'nav.coach':   'Coach IA',
    'nav.who':     'Pour qui',
    'nav.github':  'Suivre sur GitHub',

    // Hero
    'hero.eyebrow': 'Matériel EdTech Open Source',
    'hero.line1':   'Apprendre.',
    'hero.line2':   'Construire.',
    'hero.line3':   'Puis le faire penser.',
    'hero.desc':    'Un robot. Un appareil. Tout ce qu\'il faut pour passer de votre première ligne de code à une machine entièrement autonome, propulsée par l\'IA — sans connexion internet.',
    'hero.learnMore': 'En savoir plus',

    // Stats
    'stats.stages':  'Étapes d\'apprentissage',
    'stats.lessons': 'Leçons pratiques',
    'stats.offline': 'Fonctionne hors ligne',
    'stats.cloud':   'Dépendance cloud',

    // What
    'what.label': 'Le produit',
    'what.title': 'Un robot qui est aussi un ordinateur.<br>Un ordinateur qui est aussi un professeur.',
    'what.p1':    '<strong>LearningMachina</strong> est un robot compact construit sur du <strong>matériel NVIDIA</strong> — un PC Linux complet avec GPU, intégré dans un boîtier compatible LEGO. Branchez un écran et un clavier : c\'est un ordinateur. Branchez des moteurs, caméras et capteurs : c\'est un robot.',
    'what.p2':    'La plupart des gens qui veulent apprendre la programmation, la robotique <em>et</em> l\'IA ont besoin de trois installations séparées — un ordinateur portable, un kit de robotique et une station GPU. Ce sont des milliers d\'euros et des heures de configuration avant d\'écrire une seule ligne de code.',
    'what.p3':    'LearningMachina est livré prêt à l\'emploi. Chaque outil installé, chaque langage configuré, chaque cours préchargé. Branchez, allumez et commencez à apprendre. Pas de configuration, pas de comptes cloud, pas de dépendances cassées. Juste vous et la machine, apprenant ensemble, où que vous soyez — même hors réseau.',
    'what.p4':    '<strong>Et le meilleur</strong>, c\'est le coach IA qui vit à l\'intérieur. Un LLM local, affiné sur le programme, prêt à répondre à vos questions, déboguer votre code et vous guider à chaque étape du processus d\'apprentissage. Votre tuteur personnel, disponible 24h/24, sans connexion internet. Et vous pouvez même lui parler — l\'interface vocale intégrée vous permet de poser des questions et d\'obtenir des réponses sans jamais quitter votre matériel des mains.',

    // Spec list
    'spec.nvidia':   'Matériel NVIDIA — Linux complet + GPU',
    'spec.courses':  'Cours inclus',
    'spec.tutor':    'Tuteur IA local',
    'spec.voice':    'Interface vocale intégrée',
    'spec.motor':    'Carte de pilotage moteur incluse',
    'spec.camera':   'Caméra, capteurs & ports moteur prêts',
    'spec.lego':     'Boîtier modulaire compatible LEGO',
    'spec.langs':    'Python, C++, Rust & Nodejs préinstallés',
    'spec.offline':  '100 % utilisable hors ligne',
    'spec.battery':  'Batterie incluse',
    'spec.cloud':    'Connectivité cloud optionnelle',

    // Learning stages
    'learn.label':    'Le programme',
    'learn.title':    'Six étapes. De zéro à l\'autonomie.',
    'learn.subtitle': 'Chaque leçon suit la boucle d\'apprentissage incarné : Concept → Code → Action → Réflexion → Extension. Vous ne lisez pas seulement — vous faites agir le robot.',
    'learn.cta':      'Voir le matériel de cours',
    'stage0.level':   'Étape 0 — Fondation',
    'stage0.title':   'Linux & la Machine',
    'stage0.desc':    'La ligne de commande, SSH, Git et le matériel du robot. Vous apprenez à parler à la machine avant de lui dire quoi faire.',
    'stage1.level':   'Étape 1 — Débutant',
    'stage1.title':   'Programmation',
    'stage1.desc':    'Python, C++, Rust, structures de données et réseaux. Construisez un tableau de bord web qui communique avec votre robot en temps réel.',
    'stage2.level':   'Étape 2 — Jeux vidéo',
    'stage2.title':   'Développement de jeux',
    'stage2.desc':    'Jeux 2D en Python, jeux 3D en C++ et multijoueur avec Rust. Apprenez les moteurs physiques, le rendu et le gameplay en réseau.',
    'stage3.level':   'Étape 3 — Intermédiaire',
    'stage3.title':   'Robotique',
    'stage3.desc':    'Électronique, contrôle moteur, capteurs, vision par ordinateur et ROS2. Le robot bouge, voit et réagit au monde physique.',
    'stage4.level':   'Étape 4 — Avancé',
    'stage4.title':   'IA & Apprentissage automatique',
    'stage4.desc':    'PyTorch, deep learning, transformers, IA agentique, modèles multimodaux — tout exécuté localement sur le GPU Jetson. Le robot apprend à penser.',
    'stage5.level':   'Étape 5 — Projet final',
    'stage5.title':   'Robot autonome',
    'stage5.desc':    'Architecture système complète, comportements autonomes et votre mission finale : concevoir, construire et présenter une création originale.',

    // Coach
    'coach.label':      'Le coach IA',
    'coach.title':      'Votre professeur vit dans le robot.',
    'coach.hero.title': 'Un LLM local, affiné sur chaque cours',
    'coach.hero.desc':  'Un coach IA fonctionne entièrement sur l\'appareil — pas d\'internet, pas d\'abonnement. Il connaît tout le programme, répond aux questions en profondeur, explique ce qui n\'a pas fonctionné dans votre code et vous guide à chaque étape. Votre tuteur personnel, disponible 24h/24, même hors réseau.',
    'coach.voice.title': 'Interface vocale',
    'coach.voice.desc':  'Parlez au robot, écoutez la réponse. La reconnaissance vocale et la synthèse vocale intégrées vous permettent de garder les mains libres pendant que vous construisez et câblez.',
    'coach.cloud.title': 'Mise à niveau cloud optionnelle',
    'coach.cloud.desc':  'Connectez-vous à un service hébergé pour un modèle plus puissant, du contenu contribué par la communauté et des cours continuellement mis à jour.',

    // Who
    'who.label':          'Pour qui ?',
    'who.title':          'À peu près tout le monde, honnêtement.',
    'who.students.title': 'Étudiants',
    'who.students.desc':  'Apprenez à coder, construisez des robots et entraînez de l\'IA — le tout sur un seul appareil, à votre rythme.',
    'who.teachers.title': 'Enseignants',
    'who.teachers.desc':  'Un outil pédagogique complet. Pas de configuration IT, pas de comptes cloud, pas de dépendances cassées.',
    'who.makers.title':   'Makers & Bricoleurs',
    'who.makers.desc':    'Un boîtier Linux Jetson dans un corps de robot, préconfiguré et prêt à bidouiller.',
    'who.offgrid.title':  'Hors réseau & Isolé',
    'who.offgrid.desc':   'Fonctionne partout, pas d\'internet nécessaire. Une éducation de qualité sans barrières de connectivité.',

    // Follow
    'follow.label': 'Rejoignez le projet',
    'follow.title': 'Ce n\'est que le début.',
    'follow.desc':  'LearningMachina est un projet ouvert et évolutif. Suivez sur GitHub pour le voir se construire — et un jour, construisez le vôtre.',

    // Footer
    'footer.text': 'Open source · Fait avec ♥',
  }
};

/* ── i18n engine ─────────────────────────────────────────── */

let currentLang = localStorage.getItem('lm-lang') ||
  (navigator.language.startsWith('de') ? 'de' :
   navigator.language.startsWith('fr') ? 'fr' : 'en');

const langMeta = {
  en: { flag: '🇬🇧', title: 'LearningMachina — Learn. Build. Think.' },
  de: { flag: '🇩🇪', title: 'LearningMachina — Lernen. Bauen. Denken.' },
  fr: { flag: '🇫🇷', title: 'LearningMachina — Apprendre. Construire. Penser.' },
};

const langOrder = ['en', 'de', 'fr'];

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lm-lang', lang);
  document.documentElement.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang]?.[key];
    if (text) el.innerHTML = text;
  });

  // Update page title
  document.title = langMeta[lang]?.title || langMeta.en.title;

  // Update lang toggle button
  const flagEl = document.getElementById('langFlag');
  const codeEl = document.getElementById('langCode');
  if (flagEl) flagEl.textContent = langMeta[lang]?.flag || '🇬🇧';
  if (codeEl) codeEl.textContent = lang.toUpperCase();
}

// Apply on load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const nextLang = langOrder[(langOrder.indexOf(currentLang) + 1) % langOrder.length];
      setLanguage(nextLang);
    });
  }
});
