const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

// Ajuste aqui: se suas fotos começam no 2 e vão até 44
const startImage = 2;
const endImage = 44;
let currentIndex = 0;

// 1. Criar imagens dinamicamente
for (let i = startImage; i <= endImage; i++) {
    const li = document.createElement('li');
    li.style.minWidth = '100%'; // Garante que cada item ocupe todo o espaço
    const img = document.createElement('img');
    img.src = `certiicdaos/${i}.png`; // Note que sua pasta está escrita "certiicdaos"
    img.alt = `Certificado ${i}`;
    li.appendChild(img);
    track.appendChild(li);
}

// 2. Função para mover o carrossel
function updateCarousel() {
    const slideWidth = track.parentElement.offsetWidth; // Pega a largura do container pai
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// 3. Botões
nextBtn.addEventListener('click', () => {
    const slides = track.querySelectorAll('li');
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    const slides = track.querySelectorAll('li');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// 4. Auto play e Redimensionamento
setInterval(() => {
    const slides = track.querySelectorAll('li');
    if(slides.length > 0) {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }
}, 5000);

// Garante que ao girar o celular ou dar zoom, ele se ajuste
window.addEventListener('resize', updateCarousel);
// Executa uma vez ao carregar para alinhar
window.onload = updateCarousel;
