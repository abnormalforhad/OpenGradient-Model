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
`;

document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.getElementById('layout-nav');
  if (navContainer) navContainer.innerHTML = navHtml;

  const footerContainer = document.getElementById('layout-footer');
  if (footerContainer) footerContainer.innerHTML = footerHtml;

  // Highlight active link
  // Base path logic to fix relative paths for deep pages (e.g. inside /models/)
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
});
