let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

document.getElementById('next').addEventListener('click', () => {
    changeSlide(1);
});

document.getElementById('prev').addEventListener('click', () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';  
}


slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
});
