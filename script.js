const mobileMenuBtnEl = document.getElementById('mobileMenuBtn');
const mobileMenuEl = document.getElementById('mobileMenu');
const cartEl = document.getElementById('cartEl');
const cartIconEl = document.getElementById('cartIconEl');

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

cartIconEl.addEventListener('click', () => {
  const isOpen = cartIconEl.getAttribute('aria-expanded') === 'true';

  cartIconEl.setAttribute('aria-expanded', String(!isOpen));

  cartIconEl.setAttribute(
    'aria-label',
    isOpen ? 'Open cart menu' : 'Close cart menu',
  );

  cartEl.inert = isOpen;

  cartEl.classList.toggle('cart-visible', !isOpen);
});
