const sliderSwipe = ({ target }) => {
  if (!target.classList.contains("hero-slider__button")) {
    return;
  }
  const allSlides = document.querySelectorAll(".hero-slider__button");

  allSlides.forEach((item) => {
    item.classList.remove("active");
  });
  target.classList.add("active");
};

document.querySelector(".hero-slider").addEventListener("click", sliderSwipe);
