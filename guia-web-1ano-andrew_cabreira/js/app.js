// Guia Profissional de Desenvolvimento Web - 2025
// Autor: Andrew Cabreira
// Tema claro/escuro, menu mobile, localStorage

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
}

function loadTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') document.body.classList.add('dark');
}

function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  const menuBtn = document.getElementById('menu-btn');
  if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
  // Rolagem suave para o botão "Começar"
  const startBtn = document.querySelector('.hero a');
  if (startBtn) {
    startBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.getElementById('fundamentos');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  // Interatividade dos accordions na página de boas práticas
  document.querySelectorAll('.accordion').forEach(btn => {
    btn.addEventListener('click', function() {
      const panel = btn.nextElementSibling;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      if (!expanded) {
        panel.hidden = false;
      } else {
        panel.hidden = true;
      }
    });
  });
});
