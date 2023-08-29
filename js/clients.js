const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  freeMode: true,
  spaceBetween: 10,
  spaceBetween: 10,
  breakpoints: {
    450: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1980: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
