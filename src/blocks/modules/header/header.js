(function fixedMenuScroll() {
    const header = document.querySelector('.header-scroll');
    const link = document.querySelector('.header__link');


    if (header && link) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 1000) {
                header.classList.add('header--fixed');
                link.classList.add('link--fixed');


            } else {
                header.classList.remove('header--fixed');
                link.classList.remove('link--fixed');

            }
        })
    }
})();