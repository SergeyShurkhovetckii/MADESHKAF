// Слайдер отзывы
import Swiper_3 from 'swiper';

var swiper_3 = new Swiper_3(".rewiews-Swiper", {
    pagination: {
        el: ".rewiews-pagination__pagination",
        bulletClass:'bullets',
        bulletActiveClass:'bullets--active',
        clickable:true,
        
        
    },
    navigation: {
        nextEl: ".rewiews-next",
        prevEl: ".rewiews-prev",
    },
});