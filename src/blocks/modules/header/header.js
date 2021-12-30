(function fixedMenuScroll() {
    const header = document.querySelector('.header-scroll');
    let link = document.querySelectorAll('.header__link');

    
    for (let i = 0; i < link.length ; i++ ){
        console.log(link[i]);
        


    if (header && link[i]) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                header.classList.add('header--fixed');
                link[i].classList.add('link--fixed');


            } else {
                header.classList.remove('header--fixed');
                link[i].classList.remove('link--fixed');

            }
        })
    }
}})();