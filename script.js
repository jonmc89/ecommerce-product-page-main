const mobileMenuBtnEl = document.getElementById('mobileMenuBtn');
const mobileMenuEl = document.getElementById('mobileMenu');

mobileMenuBtnEl.addEventListener('click', () => {
  const isOpen = mobileMenuBtnEl.getAttribute('aria-expanded') === 'true';

  mobileMenuBtnEl.setAttribute('aria-expanded', String(!isOpen));

  mobileMenuBtnEl.setAttribute(
    'aria-label',
    isOpen ? 'Open navigation menu' : 'Close navigation menu',
  );

  mobileMenuEl.inert = isOpen;

  mobileMenuEl.classList.toggle('mobile-menu-open', !isOpen);
  mobileMenuBtnEl.classList.toggle('menu-button-icon-close', !isOpen);
});
