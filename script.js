// Mobile Menu
const mobileMenuBtnEl = document.getElementById('mobileMenuBtn');
const mobileMenuEl = document.getElementById('mobileMenu');

const overlayEl = document.getElementById('overlayEl');

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
  overlayEl.classList.toggle('overlay-show');
});

// Cart Menu

const cartEl = document.getElementById('cartEl');
const cartIconEl = document.getElementById('cartIconEl');

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

// Desktop Image Selection

const carouselItems = document.querySelectorAll('.carousel-item');
const thumbnails = document.querySelectorAll(
  '.thumbnail-item .thumbnail-image',
);

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    carouselItems[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });

    thumbnails.forEach((thumb) => {
      thumb.classList.remove('thumbnail-active');
    });

    thumbnail.classList.add('thumbnail-active');
  });
});

// Cart Amount

const amountQty = document.getElementById('amountQty');
const plusQtyBtn = document.getElementById('plusQtyBtn');
const minusQtyBtn = document.getElementById('minusQtyBtn');

let itemQty = 0;
let totalPrice = 125.0;

function updateAmount() {
  amountQty.textContent = itemQty;
}

function increaseAmount() {
  itemQty++;
  updateAmount();
}
function decreaseAmount() {
  if (itemQty > 0) {
    itemQty--;
  }
  updateAmount();
}

plusQtyBtn.addEventListener('click', increaseAmount);
minusQtyBtn.addEventListener('click', decreaseAmount);
