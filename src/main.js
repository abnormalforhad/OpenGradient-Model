import './style.css';

const navHtml = `
<nav class="fixed top-0 w-full z-50 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl transition-all duration-300">
  <div class="flex justify-between items-center h-16 px-8 max-w-7xl mx-auto">
    <div class="flex items-center gap-8">
      <a href="/" class="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 font-headline">OpenGradient</a>
      <div class="hidden md:flex gap-6 items-center">
        <a class="nav-link text-sm font-medium tracking-tight" href="/">Home</a>
        <a class="nav-link text-sm font-medium tracking-tight" href="/models/">Model Hub</a>
        <a class="nav-link text-sm font-medium tracking-tight" href="/ecosystem/">Ecosystem</a>
        <a class="nav-link text-sm font-medium tracking-tight" href="/community/">Community</a>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <button class="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-primary-container text-white text-sm font-semibold hover:opacity-90 active:scale-95 shadow-md hover:shadow-lg transition-all">
        Get Started
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
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="#">GitHub</a></li>
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="#">Docs</a></li>
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="#">Newsletter</a></li>
      </ul>
    </div>
    <div class="space-y-4">
      <h4 class="text-xs font-label uppercase tracking-widest text-zinc-900 dark:text-zinc-50">Community</h4>
      <ul class="space-y-2">
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="#">X</a></li>
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="#">Discord</a></li>
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="#">LinkedIn</a></li>
      </ul>
    </div>
    <div class="space-y-4">
      <h4 class="text-xs font-label uppercase tracking-widest text-zinc-900 dark:text-zinc-50">Legal</h4>
      <ul class="space-y-2">
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="#">Privacy</a></li>
        <li><a class="text-xs font-body text-zinc-500 hover:underline decoration-teal-500 underline-offset-4" href="#">Terms</a></li>
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
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath === href || (currentPath === '/' && href === '/')) {
      link.classList.add('text-teal-700', 'dark:text-teal-400', 'border-b-2', 'border-teal-700', 'dark:border-teal-400', 'pb-1');
      link.classList.remove('text-zinc-600', 'dark:text-zinc-400', 'hover:text-zinc-900');
    } else {
       link.classList.add('text-zinc-600', 'dark:text-zinc-400', 'hover:text-zinc-900', 'dark:hover:text-zinc-100', 'transition-colors', 'duration-200');
    }
  });
});
