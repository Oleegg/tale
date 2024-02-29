const swiper = new Swiper(".slider__custom", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 500,
  spaceBetween: 40,
  slidesPerView: 1,

  breakpoints: {
    // when window width is >= 1000px
    1330: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
    // when window width is >= 560px
    560: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
