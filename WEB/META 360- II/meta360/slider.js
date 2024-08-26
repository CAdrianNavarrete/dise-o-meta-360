let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // Oculta todas las slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Muestra la slide actual
    slides[slideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Inicializar el slider mostrando la primera imagen
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});
