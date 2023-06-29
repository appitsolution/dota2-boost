const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  freeMode: true,
  spaceBetween: 10,

  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
