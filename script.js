// script.js

// Function for navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

// Function for scroll animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const options = {
        root: null,
        threshold: 0.1,
    };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);
    elements.forEach(element => observer.observe(element));
}

// Function for form handling
function initFormHandling() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    // Perform form validation or submission tasks
}

// Countdown timer
function startCountdown(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

// Image gallery effects
function initImageGallery() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(image => {
        image.addEventListener('click', showFullImage);
    });
}

function showFullImage(event) {
    const fullImage = document.querySelector('.full-image');
    fullImage.src = event.target.src;
    fullImage.classList.add('active');
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initFormHandling();
    // Assuming a countdown of 60 seconds
    const countdownDisplay = document.querySelector('.countdown');
    startCountdown(60, countdownDisplay);
    initImageGallery();
});
