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
})();

