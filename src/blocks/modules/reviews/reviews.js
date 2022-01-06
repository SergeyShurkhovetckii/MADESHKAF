// Слайдер отзывы
import Swiper_3 from 'swiper';

var swiper = new Swiper_3(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".rewiews-next",
        prevEl: ".rewiews-prev",
    },
});