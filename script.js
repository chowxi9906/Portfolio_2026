/* hamburger menu toggle */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/* portfolio filtering */
const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // remove active state from all buttons
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.category;

    cards.forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


/*** PROJECT WEBPAGE ***/

console.log("Slider script is running!");

document.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelectorAll('.gallery-content');
    const dots = document.querySelectorAll('.dot');

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentSlide = 0;

    function updateGallery(index) {
        slides.forEach(slide =>
            slide.classList.remove('active'));
        dots.forEach(dot =>
            dot.classList.remove('active'));
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    /* NEXT BUTTON */
    nextBtn.addEventListener('click', () => {
        let nextIndex =
            (currentSlide + 1) % slides.length;
        updateGallery(nextIndex);
    });

    /* PREVIOUS BUTTON */
    prevBtn.addEventListener('click', () => {
        let prevIndex =
            (currentSlide - 1 + slides.length)
            % slides.length;
        updateGallery(prevIndex);
    });
    /* DOTS */
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateGallery(index);

        });
    });

    /* INITIALIZE */
    updateGallery(0);

});
