console.log("App inicializado");

// Adicionar classe 'active' ao link da página atual
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath.split('/').pop()) {
      link.style.backgroundColor = 'var(--primary)';
      link.style.color = 'white';
    }
  });
});
