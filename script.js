/* VARIABLES */
const hamburger = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close')
const menu = document.querySelector('.menu')
const previousBtn = document.querySelector('.angle-left')
const nextBtn = document.querySelector('.angle-right')
const slides = document.querySelectorAll('.img-slide')
const slidesText = document.querySelectorAll('.slide')
let slideIndex = 0

/* FUNCTION */
// slide
function showSlides(direction) {
  if (direction === 'next') {
    slideIndex++
    if (slideIndex === slides.length) {
      slideIndex = 0
    }
  } else {
    if (slideIndex === 0) {
      slideIndex = slides.length - 1
    } else {
      slideIndex--
    }
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('main')
    slidesText[i].classList.remove('main')
  }
  slides[slideIndex].classList.add('main')
  slidesText[slideIndex].classList.add('main')
}

/* EVENT LISTENER*/

// navbar mobile
hamburger.addEventListener('click', () => {
  menu.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none'
})

// next/previous controls
previousBtn.addEventListener('click', () => {
  showSlides('prev')
})

nextBtn.addEventListener('click', () => {
  showSlides('next')
})
