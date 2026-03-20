import './style.css';

const navHtml = `
<nav class="fixed top-0 w-full z-50 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl transition-all duration-300">
  <div class="flex justify-between items-center h-16 px-8 max-w-7xl mx-auto">
    <div class="flex items-center gap-8">
      <a href="index.html" class="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 font-headline">OpenGradient</a>
      <div class="hidden md:flex gap-6 items-center">
        <a class="nav-link text-sm font-medium tracking-tight" href="index.html" data-path="/">Home</a>
        <a class="nav-link text-sm font-medium tracking-tight" href="models/index.html" data-path="/models">Model Hub</a>
        <a class="nav-link text-sm font-medium tracking-tight" href="ecosystem/index.html" data-path="/ecosystem">Ecosystem</a>
        <a class="nav-link text-sm font-medium tracking-tight" href="community/index.html" data-path="/community">Community</a>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <a href="https://www.opengradient.ai/" target="_blank" class="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-primary-container text-white text-sm font-semibold hover:opacity-90 active:scale-95 shadow-md hover:shadow-lg transition-all inline-block">
        Get Started
      </a>
      <button id="theme-toggle" class="p-2 rounded-full bg-surface-container-low hover:bg-surface-container transition-colors ml-2 flex items-center justify-center text-on-surface">
        <span class="material-symbols-outlined dark:hidden">dark_mode</span>
        <span class="material-symbols-outlined hidden dark:block">light_mode</span>
      </button>
    </div>
  </div>
  <div class="bg-zinc-100/50 dark:bg-zinc-800/50 h-px w-full"></div>
</nav>
`;

const footerHtml = `
<footer class="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mt-auto">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-8 max-w-7xl mx-auto">
    <div class="col-span-2 md:col-span-1 space-y-4">
      <span class="text-lg font-bold text-zinc-900 dark:text-zinc-50 font-headline">OpenGradient</span>
      <p class="text-xs font-body text-zinc-500 leading-relaxed">© 2024 OpenGradient. Built for the Luminous Curator.</p>
    </div>
    <div class="space-y-4">
      <h4 class="text-xs font-label uppercase tracking-widest text-zinc-900 dark:text-zinc-50">Resources</h4>
      <ul class="space-y-2">
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="https://github.com/OpenGradient" target="_blank">GitHub</a></li>
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="https://docs.opengradient.ai/" target="_blank">Docs</a></li>
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="https://www.opengradient.ai/blog" target="_blank">Blog</a></li>
      </ul>
    </div>
    <div class="space-y-4">
      <h4 class="text-xs font-label uppercase tracking-widest text-zinc-900 dark:text-zinc-50">Community</h4>
      <ul class="space-y-2">
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="https://x.com/OpenGradient" target="_blank">X</a></li>
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="https://discord.com/invite/2t5sx5BCpB" target="_blank">Discord</a></li>
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="https://www.linkedin.com/company/opengradientlabs/" target="_blank">LinkedIn</a></li>
      </ul>
    </div>
    <div class="space-y-4">
      <h4 class="text-xs font-label uppercase tracking-widest text-zinc-900 dark:text-zinc-50">Legal</h4>
      <ul class="space-y-2">
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="https://opengradient.medium.com/" target="_blank">Medium</a></li>
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="https://x.com/i/communities/1978779669693362400" target="_blank">X Community</a></li>
      </ul>
    </div>
  </div>
</footer>
<div class="fixed bottom-6 right-6 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-full px-4 py-3 flex items-center gap-3 editorial-shadow z-50">
  <span class="relative flex h-3 w-3">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
  </span>
  <span class="text-xs font-label uppercase tracking-widest font-bold text-zinc-900 dark:text-zinc-50">Network: Live</span>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.getElementById('layout-nav');
  if (navContainer) navContainer.innerHTML = navHtml;

  const footerContainer = document.getElementById('layout-footer');
  if (footerContainer) footerContainer.innerHTML = footerHtml;

  // Base path logic to fix relative paths for deep pages
  const isDeepPage = window.location.pathname.includes('/models') || window.location.pathname.includes('/ecosystem') || window.location.pathname.includes('/community');
  
  if (isDeepPage) {
    const brandLink = document.querySelector('a.font-headline');
    if (brandLink) brandLink.href = '../index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
       const rawHref = link.getAttribute('href');
       if (rawHref === 'index.html') link.setAttribute('href', '../index.html');
       else link.setAttribute('href', '../' + rawHref);
    });
  }

  // Highlight active link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const dataPath = link.getAttribute('data-path');
    const isActive = dataPath === '/' ? (currentPath.endsWith('/') || currentPath.endsWith('index.html')) && !currentPath.includes('models') && !currentPath.includes('ecosystem') && !currentPath.includes('community') : currentPath.includes(dataPath);

    if (isActive) {
      link.classList.add('text-teal-700', 'dark:text-teal-400', 'border-b-2', 'border-teal-700', 'dark:border-teal-400', 'pb-1');
      link.classList.remove('text-zinc-600', 'dark:text-zinc-400', 'hover:text-zinc-900');
    } else {
       link.classList.add('text-zinc-600', 'dark:text-zinc-400', 'hover:text-zinc-900', 'dark:hover:text-zinc-100', 'transition-colors', 'duration-200');
    }
  });

  // Feature 1: Dark Mode Logic
  const themeToggleDarkIcon = document.querySelector('#theme-toggle .material-symbols-outlined.dark\\\\:hidden');
  const themeToggleLightIcon = document.querySelector('#theme-toggle .material-symbols-outlined.hidden');
  const themeToggleBtn = document.getElementById('theme-toggle');

  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
  } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });
  }

  // Feature 2: Scroll Reveal Animations
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('opacity-100', 'translate-y-0', 'blur-none');
              entry.target.classList.remove('opacity-0', 'translate-y-8', 'blur-sm');
          }
      });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-8', 'blur-sm');
      observer.observe(el);
  });

  // Feature 3: Interactive Mouse Glow Effects
  document.querySelectorAll('.glow-card').forEach(card => {
      card.addEventListener('mousemove', e => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', x + 'px');
          card.style.setProperty('--mouse-y', y + 'px');
      });
  });

  // Feature 5: Local Storage "Saved Models" Bookmark
  const savedModels = JSON.parse(localStorage.getItem('savedModels') || '[]');
  document.querySelectorAll('.bookmark-btn').forEach(btn => {
      const modelId = btn.getAttribute('data-model-id');
      const icon = btn.querySelector('.material-symbols-outlined');
      
      if (icon && savedModels.includes(modelId)) {
          icon.style.fontVariationSettings = "'FILL' 1";
          icon.classList.add('text-teal-500');
      }

      btn.addEventListener('click', (e) => {
          e.preventDefault();
          if(!icon) return;
          const index = savedModels.indexOf(modelId);
          if (index === -1) {
              savedModels.push(modelId);
              icon.style.fontVariationSettings = "'FILL' 1";
              icon.classList.add('text-teal-500');
          } else {
              savedModels.splice(index, 1);
              icon.style.fontVariationSettings = "'FILL' 0";
              icon.classList.remove('text-teal-500');
          }
          localStorage.setItem('savedModels', JSON.stringify(savedModels));
      });
  });

  // Feature 4: Custom Terminal Emulator Typing Effect
  const terminalContent = document.getElementById('terminal-content');
  if (terminalContent) {
      const lines = [
          { text: "// Initialize network connection...", class: "text-zinc-500 mb-2", delay: 500, typing: false },
          { text: "$ opengradient network start --mesh", class: "text-zinc-300 mb-1", delay: 600, typing: true },
          { text: "> [OK] Connecting to 128 decentral nodes...", class: "text-teal-400 mb-1", delay: 800, typing: false },
          { text: "> [OK] Synchronizing mempool...", class: "text-teal-400 mb-1", delay: 500, typing: false },
          { text: "$ opengradient deploy model --id \"mistral-7b\"", class: "text-zinc-300 mt-2 mb-1", delay: 1000, typing: true },
          { text: "> Deploying to edge cluster... ", class: "text-teal-400 flex", delay: 600, typing: false, showCursor: true }
      ];

      async function typeLine(lineData) {
          const div = document.createElement('div');
          div.className = lineData.class;
          terminalContent.appendChild(div);
          
          if (lineData.typing) {
              for (let i = 0; i < lineData.text.length; i++) {
                  div.textContent += lineData.text[i];
                  await new Promise(r => setTimeout(r, 20));
              }
          } else {
              div.textContent = lineData.text;
          }

          if (lineData.showCursor) {
              const cursor = document.createElement('span');
              cursor.className = 'animate-pulse ml-1 text-white';
              cursor.textContent = '_';
              div.appendChild(cursor);
          }
      }

      async function runTerminal() {
          for (const line of lines) {
              await new Promise(r => setTimeout(r, line.delay));
              if (!document.getElementById('terminal-content')) break; // Guard if removed
              await typeLine(line);
          }
      }

      const terminalObserver = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
              runTerminal();
              terminalObserver.disconnect();
          }
      }, { threshold: 0.5 });
      
      const heroTerminal = document.getElementById('hero-terminal');
      if (heroTerminal) terminalObserver.observe(heroTerminal);
  }

  // Feature 6: Network Status Widget (Dynamic)
  const networkStatusWidget = document.querySelector('.fixed.bottom-6.right-6');
  if (networkStatusWidget) {
      const networkStatusText = networkStatusWidget.querySelector('.text-xs');
      const networkPing = networkStatusWidget.querySelector('.animate-ping');
      
      if (networkStatusText && networkPing) {
          setInterval(() => {
              networkStatusText.textContent = "Network: Syncing...";
              networkPing.classList.replace('bg-teal-400', 'bg-yellow-400');
              networkPing.nextElementSibling.classList.replace('bg-teal-500', 'bg-yellow-500');
              
              setTimeout(() => {
                  const latency = Math.floor(Math.random() * 12) + 4; // 4-15ms
                  networkStatusText.textContent = `Network: Live (${latency}ms)`;
                  networkPing.classList.replace('bg-yellow-400', 'bg-teal-400');
                  networkPing.nextElementSibling.classList.replace('bg-yellow-500', 'bg-teal-500');
              }, 800 + Math.random() * 1000);
          }, 5000 + Math.random() * 5000);
      }
  }

});
