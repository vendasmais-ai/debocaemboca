const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

const startImage = 2;
const endImage = 44;
let currentIndex = 0;

// Limpa o track antes de começar (evita duplicados)
track.innerHTML = '';

for (let i = startImage; i <= endImage; i++) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = `certificados/${i}.png`;
   img.alt = `Certificados de Qualificação Profissional- Edison Riella ${i} - DeBocaEmBoca`;
   li.appendChild(img);
    track.appendChild(li);
}

function updateCarousel() {
    const slideWidth = track.parentElement.offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    const total = endImage - startImage + 1;
    currentIndex = (currentIndex + 1) % total;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    const total = endImage - startImage + 1;
    currentIndex = (currentIndex - 1 + total) % total;
    updateCarousel();
});

// Força o ajuste inicial após um pequeno delay para o navegador processar o CSS
setTimeout(updateCarousel, 500);

window.addEventListener('resize', updateCarousel);

setInterval(() => {
    const total = endImage - startImage + 1;
    currentIndex = (currentIndex + 1) % total;
    updateCarousel();
}, 4000);
