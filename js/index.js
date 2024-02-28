const swiper = new Swiper(".slider__custom", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 500,
  spaceBetween: 100,
  effect: "fade",
  // autoplay: {
  //   delay: 5000,
  // },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
