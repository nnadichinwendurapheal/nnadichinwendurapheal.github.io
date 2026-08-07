const slides = Array.from(document.querySelectorAll('.slide'));
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

if (slides.length > 0) {
  setInterval(nextSlide, 4500);
}

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function runSearch() {
  const query = (searchInput?.value || '').trim().toLowerCase();
  if (!query) return;

  const section = document.getElementById('products');
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  document.querySelectorAll('.category-card, .product-card').forEach(card => {
    const text = (card.getAttribute('data-category') || card.getAttribute('data-name') || '').toLowerCase();
    const match = text.includes(query);
    card.style.display = match ? '' : 'none';
  });
}

searchBtn?.addEventListener('click', runSearch);
searchInput?.addEventListener('keydown', e => {
  if (e.key === 'Enter') runSearch();
});

const productFilter = document.getElementById('productFilter');
productFilter?.addEventListener('input', () => {
  const query = productFilter.value.toLowerCase().trim();
  document.querySelectorAll('#productGrid .product-card').forEach(card => {
    const text = (card.getAttribute('data-name') || '').toLowerCase();
    card.style.display = text.includes(query) ? '' : 'none';
  });
});

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
