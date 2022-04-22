const slides = document.querySelectorAll('[data-js="carosel_item"]');
const nextButton = document.querySelectorAll('[data-js="carosel_button--next"]');

let currentSlideIndex = 0;

nextButton.addEventListener('click', () => {
    currentSlideIndex++;

    slides.forEach(slide => {
        slide.classList.remove('carousel__item--visible')
    })
});
slides[currentSlideIndex].classList.add('carousel__item--visible');



