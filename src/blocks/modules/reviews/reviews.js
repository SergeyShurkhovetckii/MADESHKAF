import Swiper from 'swiper';

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".rewiews-next",
      prevEl: ".rewiews-prev",
    },
  });
