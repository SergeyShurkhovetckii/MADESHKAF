// Слайдер отзывы
import reviewsSlider from 'swiper';

var swiper_3 = new reviewsSlider(".rewiews-swiper", {
    pagination: {
        el: ".rewiews-swiper__pagination",
        bulletClass:'bullets',
        bulletActiveClass:'bullets--active',
        clickable:true,
        
        
    },
    navigation: {
        nextEl: ".rewiews-swiper__next",
        prevEl: ".rewiews-swiper__prev",
    },
});