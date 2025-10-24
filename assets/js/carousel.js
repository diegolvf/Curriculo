const slide = document.querySelector('.carousel-slide');
const items = document.querySelectorAll('.carousel-item');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;

// Cria indicadores
items.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
    slide.style.transform = `translateX(-${index * 100}%)`;
    dots[currentIndex].classList.remove('active');
    dots[index].classList.add('active');
    currentIndex = index;
}

// Auto-carrossel (muda a cada 5 segundos)
setInterval(() => {
    let next = (currentIndex + 1) % items.length;
    goToSlide(next);
}, 5000);
