const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

const totalImages = 22;
let currentIndex = 0;

// Criar imagens automaticamente
for (let i = 1; i <= totalImages; i++) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = `certificados/${i}.png`;
  img.alt = `Certificados ${i}`;
  li.appendChild(img);
  track.appendChild(li);
}

const slides = Array.from(track.children);

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Auto play
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 5000);

window.addEventListener('resize', updateCarousel);
