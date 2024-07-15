// In the name of God
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const progressBar = document.getElementById('progress-bar');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    document.addEventListener('keydown', handleKeyPress);
    updateNavigationButtons();
});

prevButton.addEventListener('click', () => {
    previousSlide();
    updateNavigationButtons();
});

nextButton.addEventListener('click', () => {
    nextSlide();
    updateNavigationButtons();
});

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.opacity = 0;
        if (i === index) {
            slide.classList.add('active');
            setTimeout(() => {
                slide.style.opacity = 1;
            }, 0);
        }
    });
    updateProgressBar();
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function previousSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

function updateProgressBar() {
    const progress = (currentSlide / (totalSlides - 1)) * 100;
    progressBar.style.width = `${progress}%`;
}

function handleKeyPress(event) {
    if (event.key === 'ArrowRight') {
        nextSlide();
        updateNavigationButtons();
    } else if (event.key === 'ArrowLeft') {
        previousSlide();
        updateNavigationButtons();
    }
}

function updateNavigationButtons() {
    if (currentSlide === 0) {
        prevButton.classList.add('hidden');
    } else {
        prevButton.classList.remove('hidden');
    }

    if (currentSlide === totalSlides - 1) {
        nextButton.classList.add('hidden');
    } else {
        nextButton.classList.remove('hidden');
    }
}

// Touch swipe support
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', handleTouchEnd, false);

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
    touchEndX = touchStartX;
}

function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (touchEndX < touchStartX - 50) {
        nextSlide();
        updateNavigationButtons();
    } else if (touchEndX > touchStartX + 50) {
        previousSlide();
        updateNavigationButtons();
    }
}
