document.addEventListener('DOMContentLoaded', function(){
  const repoUrl = 'https://github.com/TheUniverse606/KeyCrate2.0';

  // Copy-to-clipboard with feedback
  const copyBtn = document.getElementById('copyBtn');
  if(copyBtn){
    copyBtn.addEventListener('click', async function(){
      try{
        await navigator.clipboard.writeText(repoUrl);
        copyBtn.classList.add('active');
        copyBtn.textContent = 'URL copiada ✓';
        setTimeout(()=>{ copyBtn.classList.remove('active'); copyBtn.textContent = 'Copiar URL del repositorio'; }, 2200);
      }catch(e){
        const el = document.createElement('textarea'); el.value = repoUrl; document.body.appendChild(el); el.select();
        try{ document.execCommand('copy'); copyBtn.textContent = 'URL copiada ✓'; }catch(err){ alert('Copia manual: ' + repoUrl); }
        document.body.removeChild(el);
        setTimeout(()=> copyBtn.textContent = 'Copiar URL del repositorio',2200);
      }
    });
  }

  // Add subtle pulse to download button
  const downloadBtn = document.getElementById('downloadBtn');
  if(downloadBtn){
    downloadBtn.addEventListener('mouseenter', ()=> downloadBtn.classList.add('pulse'));
    downloadBtn.addEventListener('mouseleave', ()=> downloadBtn.classList.remove('pulse'));
  }

  // Reveal on scroll using IntersectionObserver
  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  if('IntersectionObserver' in window && revealEls.length){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    },{threshold:0.12});
    revealEls.forEach(el=>io.observe(el));
  } else {
    // fallback: reveal all
    revealEls.forEach(el=>el.classList.add('revealed'));
  }
});

/* -----------------
   Internationalization
   ----------------- */
(function(){
  const LANG_KEY = 'kc_lang';
  const select = document.getElementById('langSelect');
  if(!select) return;

  const translations = {
    es: {
      title_site: 'KeyCrate — Gestor de contraseñas',
      tag: 'Gestor de contraseñas local y cifrado, sencillo y seguro.',
      download_btn: 'Descargar desde GitHub',
      copy_btn: 'Copiar URL del repositorio',
      copy_feedback: 'URL copiada ✓',
      intro_h2: 'Protege tus credenciales localmente',
      intro_p: 'KeyCrate cifra tus entradas con Fernet y guarda los datos en SQLite. Pensado para usuarios que prefieren control total sobre sus contraseñas sin depender de servicios externos.',
      features_h2: 'Funciones principales',
      feature1: 'Almacenamiento cifrado',
      feature1_p: 'Cifrado simétrico con Fernet para mantener tus contraseñas seguras en disco.',
      feature2: 'Gestión práctica',
      feature2_p: 'Listar, buscar, generar y copiar contraseñas con una interfaz clara.',
      feature3: 'Ligero y portátil',
      feature3_p: 'Funcionamiento local con una pequeña base SQLite y sin dependencias remotas.',
      feature4: 'Fácil de usar',
      feature4_p: 'Interfaz basada en customtkinter pensada para usuarios no técnicos.',
      howto_h2: 'Cómo probarlo',
      howto1: 'Haz clic en "Descargar desde GitHub" o copia la URL.',
      howto2: 'Clona el repositorio: ',
      howto3: 'Sigue el README del proyecto para crear el entorno y ejecutar main.py.',
      repo_text: 'Repositorio:',
      footer_copy: '© KeyCrate',
      clone_cmd: 'git clone https://github.com/TheUniverse606/KeyCrate2.0.git'
    },
    en: {
      title_site: 'KeyCrate — Password manager',
      tag: 'Local password manager, encrypted with Fernet. Simple and secure.',
      download_btn: 'Download on GitHub',
      copy_btn: 'Copy repository URL',
      copy_feedback: 'URL copied ✓',
      intro_h2: 'Protect your credentials locally',
      intro_p: 'KeyCrate encrypts entries with Fernet and stores data in SQLite. Designed for users who prefer full control over their passwords without relying on external services.',
      features_h2: 'Main features',
      feature1: 'Encrypted storage',
      feature1_p: 'Symmetric encryption with Fernet to keep your passwords safe on disk.',
      feature2: 'Practical management',
      feature2_p: 'List, search, generate and copy passwords with a clear UI.',
      feature3: 'Lightweight & portable',
      feature3_p: 'Local operation with a small SQLite DB and no remote dependencies.',
      feature4: 'Easy to use',
      feature4_p: 'UI built with customtkinter designed for non-technical users.',
      howto_h2: 'How to try it',
      howto1: 'Click "Download on GitHub" or copy the URL.',
      howto2: 'Clone the repository: ',
      howto3: 'Follow the project README to create the environment and run main.py.',
      repo_text: 'Repository:',
      footer_copy: '© KeyCrate',
      clone_cmd: 'git clone https://github.com/TheUniverse606/KeyCrate2.0.git'
    },
    pt: {
      title_site: 'KeyCrate — Gerenciador de senhas',
      tag: 'Gerenciador de senhas local, encriptado com Fernet. Simples e seguro.',
      download_btn: 'Baixar no GitHub',
      copy_btn: 'Copiar URL do repositório',
      copy_feedback: 'URL copiada ✓',
      intro_h2: 'Proteja suas credenciais localmente',
      intro_p: 'KeyCrate cifra suas entradas com Fernet e armazena os dados no SQLite. Projetado para usuários que preferem controle total sobre suas senhas.',
      features_h2: 'Principais funcionalidades',
      feature1: 'Armazenamento criptografado',
      feature1_p: 'Criptografia simétrica com Fernet para manter suas senhas seguras no disco.',
      feature2: 'Gestão prática',
      feature2_p: 'Listar, pesquisar, gerar e copiar senhas com uma interface clara.',
      feature3: 'Leve e portátil',
      feature3_p: 'Funcionamento local com um pequeno SQLite e sem dependências remotas.',
      feature4: 'Fácil de usar',
      feature4_p: 'Interface baseada em customtkinter pensada para usuários não técnicos.',
      howto_h2: 'Como testar',
      howto1: 'Clique em "Baixar no GitHub" ou copie a URL.',
      howto2: 'Clone o repositório: ',
      howto3: 'Siga o README do projeto para criar o ambiente e executar main.py.',
      repo_text: 'Repositório:',
      footer_copy: '© KeyCrate',
      clone_cmd: 'git clone https://github.com/TheUniverse606/KeyCrate2.0.git'
    },
    it: {
      title_site: 'KeyCrate — Gestore di password',
      tag: 'Gestore di password locale, crittografato con Fernet. Semplice e sicuro.',
      download_btn: 'Scarica da GitHub',
      copy_btn: 'Copia URL del repository',
      copy_feedback: 'URL copiata ✓',
      intro_h2: 'Proteggi le tue credenziali localmente',
      intro_p: "KeyCrate crittografa le voci con Fernet e salva i dati in SQLite. Pensato per utenti che preferiscono il controllo totale sulle proprie password.",
      features_h2: 'Funzionalità principali',
      feature1: 'Archiviazione crittografata',
      feature1_p: 'Crittografia simmetrica con Fernet per mantenere le password sicure su disco.',
      feature2: 'Gestione pratica',
      feature2_p: 'Elenca, cerca, genera e copia password con un’interfaccia chiara.',
      feature3: 'Leggero e portatile',
      feature3_p: 'Funzionamento locale con un piccolo DB SQLite e senza dipendenze remote.',
      feature4: 'Facile da usare',
      feature4_p: 'Interfaccia basata su customtkinter pensata per utenti non tecnici.',
      howto_h2: 'Come provarlo',
      howto1: 'Clicca su "Scarica da GitHub" o copia l’URL.',
      howto2: 'Clona il repository: ',
      howto3: 'Segui il README del progetto per creare l’ambiente ed eseguire main.py.',
      repo_text: 'Repository:',
      footer_copy: '© KeyCrate',
      clone_cmd: 'git clone https://github.com/TheUniverse606/KeyCrate2.0.git'
    }
  };

  // ----- Add CV translations (HTML) and small labels -----
  translations.es.view_cv = 'Ver CV';
  translations.en.view_cv = 'View CV';
  translations.pt.view_cv = 'Ver CV';
  translations.it.view_cv = 'Visualizza CV';

  translations.es.cv_html = `
    <div class="cv-section">
      <h4>Información Personal</h4>
      <div class="cv-grid">
        <div>
          <ul class="cv-list">
            <li><strong>Nombre:</strong> Franco N. Abarzúa</li>
            <li><strong>Dirección:</strong> Cjon. Los Pimpollos, Los Claveles, Cañada Seca, Mendoza, Argentina</li>
            <li><strong>Teléfono:</strong> (+54) 9 260 467-2735</li>
            <li><strong>Email:</strong> abarzuafranco027@gmail.com</li>
            <li><strong>Nacionalidad:</strong> Argentina</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/TheUniverse606" target="_blank">TheUniverse606</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cv-section">
      <h4>Resumen Profesional</h4>
      <p class="cv-list">Estudiante en Tecnicatura Superior en Desarrollo de Software con experiencia práctica en desarrollo de software y tecnologías web. Capacidad demostrada para crear aplicaciones funcionales usando Python y buenas prácticas de programación.</p>
    </div>

    <div class="cv-section">
      <h4>Educación y Formación</h4>
      <p class="cv-list"><strong>Estudiante en Tecnicatura Superior en Desarrollo de Software</strong> | IES 9-012 — Mendoza, Argentina (2023 - Presente)</p>
      <ul class="cv-list">
        <li>Principales materias: Python, C++, HTML/CSS, JavaScript, React.js, Estructuras de Datos, Algoritmos, Bases de Datos.</li>
      </ul>
    </div>

    <div class="cv-section">
      <h4>Habilidades Técnicas</h4>
      <div class="cv-grid">
        <div>
          <h5>Lenguajes</h5>
          <ul class="cv-list"><li>Python: Intermedio</li><li>C++: Básico</li><li>JavaScript: Intermedio</li><li>HTML/CSS: Avanzado</li></ul>
        </div>
        <div>
          <h5>Herramientas</h5>
          <ul class="cv-list"><li>React.js (básico)</li><li>Git, VS Code</li><li>DB management básico</li></ul>
        </div>
      </div>
    </div>

    <div class="cv-section">
      <h4>Proyectos</h4>
      <div class="cv-list">
        <strong>KeyCrate — Password Manager (2024)</strong>
        <ul class="cv-list"><li>Aplicación para gestionar contraseñas con Python.</li><li>Cifrado básico y UI para almacenar/recuperar contraseñas.</li></ul>
        <strong>A.I.S.C. Manager — Sistema de Gestión (2024)</strong>
        <ul class="cv-list"><li>Sistema de inventario en Python con estructuras eficientes y UI cómoda.</li></ul>
      </div>
    </div>

    <div class="cv-section">
      <h4>Idiomas</h4>
      <ul class="cv-list"><li>Español: Nativo</li><li>Inglés: Nivel básico</li></ul>
    </div>

    <div class="cv-section">
      <h4>Información Adicional</h4>
      <ul class="cv-list"><li>Intereses: Desarrollo de Software, Tecnologías Web, Diseño de Sistemas</li><li>Actitud: Aprendizaje continuo y buenas prácticas</li></ul>
    </div>
  `;

  translations.en.cv_html = `
    <div class="cv-section">
      <h4>Personal Information</h4>
      <div class="cv-grid">
        <div>
          <ul class="cv-list">
            <li><strong>Name:</strong> Franco N. Abarzúa</li>
            <li><strong>Address:</strong> Cjon. Los Pimpollos, Los Claveles, Cañada Seca, Mendoza, Argentina</li>
            <li><strong>Phone:</strong> (+54) 9 260 467-2735</li>
            <li><strong>Email:</strong> abarzuafranco027@gmail.com</li>
            <li><strong>Nationality:</strong> Argentinean</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/TheUniverse606" target="_blank">TheUniverse606</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cv-section">
      <h4>Professional Summary</h4>
      <p class="cv-list">Student in the Higher Technician in Software Development program with hands-on experience in software development and web technologies. Able to build functional applications using Python and modern programming practices.</p>
    </div>

    <div class="cv-section">
      <h4>Education & Training</h4>
      <p class="cv-list"><strong>Student — Higher Technician in Software Development</strong> | IES 9-012 — Mendoza, Argentina (2023 - Present)</p>
      <ul class="cv-list">
        <li>Main subjects: Python, C++, HTML/CSS, JavaScript, React.js, Data Structures, Algorithms, DBMS.</li>
      </ul>
    </div>

    <div class="cv-section">
      <h4>Technical Skills</h4>
      <div class="cv-grid">
        <div>
          <h5>Languages</h5>
          <ul class="cv-list"><li>Python: Intermediate</li><li>C++: Basic</li><li>JavaScript: Intermediate</li><li>HTML/CSS: Advanced</li></ul>
        </div>
        <div>
          <h5>Tools</h5>
          <ul class="cv-list"><li>React.js (basic)</li><li>Git, VS Code</li><li>Basic DB management</li></ul>
        </div>
      </div>
    </div>

    <div class="cv-section">
      <h4>Projects</h4>
      <div class="cv-list">
        <strong>KeyCrate - Password Manager (2024)</strong>
        <ul class="cv-list"><li>Built a secure password manager application using Python.</li><li>Implemented basic encryption and a UI to store/retrieve passwords.</li></ul>
        <strong>A.I.S.C. Manager - Management System (2024)</strong>
        <ul class="cv-list"><li>Inventory tracking system in Python with efficient data structures and user-friendly interfaces.</li></ul>
      </div>
    </div>

    <div class="cv-section">
      <h4>Language Skills</h4>
      <ul class="cv-list"><li>Spanish: Native</li><li>English: Basic conversational</li></ul>
    </div>

    <div class="cv-section">
      <h4>Additional Information</h4>
      <ul class="cv-list"><li>Interests: Software Development, Web Technologies, System Design</li><li>Professional development: continuous learning</li></ul>
    </div>
  `;

  translations.pt.cv_html = `
    <div class="cv-section">
      <h4>Informações Pessoais</h4>
      <div class="cv-grid">
        <div>
          <ul class="cv-list">
            <li><strong>Nome:</strong> Franco N. Abarzúa</li>
            <li><strong>Endereço:</strong> Cjon. Los Pimpollos, Los Claveles, Cañada Seca, Mendoza, Argentina</li>
            <li><strong>Telefone:</strong> (+54) 9 260 467-2735</li>
            <li><strong>Email:</strong> abarzuafranco027@gmail.com</li>
            <li><strong>Nacionalidade:</strong> Argentina</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/TheUniverse606" target="_blank">TheUniverse606</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cv-section">
      <h4>Resumo Profissional</h4>
      <p class="cv-list">Estudante em Tecnicatura Superior em Desenvolvimento de Software com experiência prática em desenvolvimento de software e tecnologias web. Capacidade de criar aplicações funcionais usando Python e boas práticas de programação.</p>
    </div>

    <div class="cv-section">
      <h4>Educação e Formação</h4>
      <p class="cv-list"><strong>Estudante em Tecnicatura Superior em Desenvolvimento de Software</strong> | IES 9-012 — Mendoza, Argentina (2023 - Presente)</p>
      <ul class="cv-list">
        <li>Principais disciplinas: Python, C++, HTML/CSS, JavaScript, React.js, Estruturas de Dados, Algoritmos, SGBD.</li>
      </ul>
    </div>

    <div class="cv-section">
      <h4>Habilidades Técnicas</h4>
      <div class="cv-grid">
        <div>
          <h5>Linguagens</h5>
          <ul class="cv-list"><li>Python: Intermediário</li><li>C++: Básico</li><li>JavaScript: Intermediário</li><li>HTML/CSS: Avançado</li></ul>
        </div>
        <div>
          <h5>Ferramentas</h5>
          <ul class="cv-list"><li>React.js (básico)</li><li>Git, VS Code</li><li>Gerenciamento básico de BD</li></ul>
        </div>
      </div>
    </div>

    <div class="cv-section">
      <h4>Projetos</h4>
      <div class="cv-list">
        <strong>KeyCrate — Password Manager (2024)</strong>
        <ul class="cv-list"><li>Desenvolveu um gerenciador de senhas seguro em Python.</li><li>Implementou técnicas de criptografia básicas e UI para armazenar/recuperar senhas.</li></ul>
        <strong>A.I.S.C. Manager — Sistema de Gestão (2024)</strong>
        <ul class="cv-list"><li>Sistema de inventário em Python com estruturas de dados eficientes e interfaces amigáveis.</li></ul>
      </div>
    </div>

    <div class="cv-section">
      <h4>Idiomas</h4>
      <ul class="cv-list"><li>Espanhol: Nativo</li><li>Inglês: Básico</li></ul>
    </div>

    <div class="cv-section">
      <h4>Informação Adicional</h4>
      <ul class="cv-list"><li>Interesses: Desenvolvimento de Software, Tecnologias Web, Design de Sistemas</li><li>Desenvolvimento profissional: aprendizado contínuo</li></ul>
    </div>
  `;

  translations.it.cv_html = `
    <div class="cv-section">
      <h4>Informazioni Personali</h4>
      <div class="cv-grid">
        <div>
          <ul class="cv-list">
            <li><strong>Nome:</strong> Franco N. Abarzúa</li>
            <li><strong>Indirizzo:</strong> Cjon. Los Pimpollos, Los Claveles, Cañada Seca, Mendoza, Argentina</li>
            <li><strong>Telefono:</strong> (+54) 9 260 467-2735</li>
            <li><strong>Email:</strong> abarzuafranco027@gmail.com</li>
            <li><strong>Nazionalità:</strong> Argentina</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/TheUniverse606" target="_blank">TheUniverse606</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cv-section">
      <h4>Profilo Professionale</h4>
      <p class="cv-list">Studente in Tecnicatura Superiore in Sviluppo Software con esperienza pratica nello sviluppo software e tecnologie web. Capacità di creare applicazioni funzionali usando Python e pratiche moderne di programmazione.</p>
    </div>

    <div class="cv-section">
      <h4>Istruzione e Formazione</h4>
      <p class="cv-list"><strong>Studente in Tecnicatura Superiore in Sviluppo Software</strong> | IES 9-012 — Mendoza, Argentina (2023 - Presente)</p>
      <ul class="cv-list">
        <li>Principali materie: Python, C++, HTML/CSS, JavaScript, React.js, Strutture Dati, Algoritmi, DBMS.</li>
      </ul>
    </div>

    <div class="cv-section">
      <h4>Competenze Tecniche</h4>
      <div class="cv-grid">
        <div>
          <h5>Lingue di programmazione</h5>
          <ul class="cv-list"><li>Python: Intermedio</li><li>C++: Base</li><li>JavaScript: Intermedio</li><li>HTML/CSS: Avanzato</li></ul>
        </div>
        <div>
          <h5>Strumenti</h5>
          <ul class="cv-list"><li>React.js (base)</li><li>Git, VS Code</li><li>Gestione DB di base</li></ul>
        </div>
      </div>
    </div>

    <div class="cv-section">
      <h4>Progetti</h4>
      <div class="cv-list">
        <strong>KeyCrate - Password Manager (2024)</strong>
        <ul class="cv-list"><li>Sviluppato un gestore di password sicuro con Python.</li><li>Implementata crittografia di base e UI per memorizzare/recuperare password.</li></ul>
        <strong>A.I.S.C. Manager - Management System (2024)</strong>
        <ul class="cv-list"><li>Sistema di inventario in Python con strutture dati efficienti e interfacce user-friendly.</li></ul>
      </div>
    </div>

    <div class="cv-section">
      <h4>Lingue</h4>
      <ul class="cv-list"><li>Spagnolo: Madrelingua</li><li>Inglese: Base</li></ul>
    </div>

    <div class="cv-section">
      <h4>Informazioni Aggiuntive</h4>
      <ul class="cv-list"><li>Interessi: Sviluppo Software, Tecnologie Web, Progettazione di Sistemi</li><li>Sviluppo professionale: apprendimento continuo</li></ul>
    </div>
  `;

  function applyTranslations(lang){
    const map = translations[lang] || translations['es'];
    document.title = map.title_site;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.dataset.i18n;
      if(!key) return;
      // keep code elements intact when necessary
      if(el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') return;
      // For code cloneCmd we set textContent
      if(el.id === 'cloneCmd'){
        el.textContent = map.clone_cmd;
        return;
      }
      el.textContent = map[key] || el.textContent;
    });
    // clone command element
    const cloneCmd = document.getElementById('cloneCmd');
    if(cloneCmd) cloneCmd.textContent = map.clone_cmd;
  }

  // load saved lang or use select value
  const saved = localStorage.getItem(LANG_KEY) || select.value || 'es';
  select.value = saved;
  applyTranslations(saved);

  select.addEventListener('change', ()=>{
    const v = select.value;
    localStorage.setItem(LANG_KEY, v);
    applyTranslations(v);
  });

  // integrate with copy feedback
  const copyBtn = document.getElementById('copyBtn');
  if(copyBtn){
    const original = copyBtn.textContent;
    copyBtn.addEventListener('click', ()=>{
      const lang = localStorage.getItem(LANG_KEY) || 'es';
      const fb = translations[lang].copy_feedback || translations['es'].copy_feedback;
      copyBtn.textContent = fb;
      setTimeout(()=> copyBtn.textContent = translations[localStorage.getItem(LANG_KEY) || 'es'].copy_btn, 2000);
    });
  }

  // CV modal behaviour
  const cvBtn = document.getElementById('cvBtn');
  const cvOverlay = document.getElementById('cvModalOverlay');
  const cvModal = document.getElementById('cvModal');
  const cvContent = document.getElementById('cvContent');
  const cvClose = document.getElementById('cvClose');

  function openCV(){
    const lang = localStorage.getItem(LANG_KEY) || select.value || 'es';
    const map = translations[lang] || translations['es'];
    cvContent.innerHTML = map.cv_html || '<p>No CV available for '+lang+'</p>';
    cvOverlay.classList.add('open');
    cvModal.classList.add('open');
    cvOverlay.setAttribute('aria-hidden','false');
    // focus management
    cvClose.focus();
  }

  function closeCV(){
    cvOverlay.classList.remove('open');
    cvModal.classList.remove('open');
    cvOverlay.setAttribute('aria-hidden','true');
  }

  if(cvBtn && cvOverlay && cvModal){
    cvBtn.addEventListener('click', openCV);
    cvClose && cvClose.addEventListener('click', closeCV);
    // close on overlay click
    cvOverlay.addEventListener('click', (e)=>{ if(e.target === cvOverlay) closeCV(); });
    // close on ESC
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeCV(); });
    // update modal content on language change
    select.addEventListener('change', ()=>{ if(cvOverlay.classList.contains('open')) openCV(); });
  }
})();
