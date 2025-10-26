export function initMobileMenu() {
  const menuButton = document.querySelector('.menu-hamburguer');
  const nav = document.querySelector('header nav');

  if (!menuButton || !nav) return;

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');

    // Controle do ARIA
    const isExpanded = nav.classList.contains('active');
    menuButton.setAttribute('aria-expanded', isExpanded);

    if (isExpanded) {
      menuButton.textContent = '✕';
    } else {
      menuButton.textContent = '☰';
    }
  });
}       