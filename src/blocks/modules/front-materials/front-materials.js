(function toggleTabs() {
    const materialsBtn = document.querySelectorAll('.materials__btn');
    const tab = document.querySelectorAll('.materials-tab');
    const select = document.querySelector('.materials__mob-control');


    if (materialsBtn && tab && (materialsBtn.length == tab.length)) {
        for (let i = 0; i < materialsBtn.length; i++) {
            materialsBtn[i].addEventListener('click', function (e) {
                e.preventDefault();
                changeActive(i);
            })
        }
    }

    if (select) {
        select.addEventListener('change', function (e) {
            let item = select.value;
            changeActive(item);
        })
    }

    function changeActive(n) {
        for (let i = 0; i < materialsBtn.length; i++) {
            materialsBtn[i].classList.remove('materials__btn--active');
            tab[i].classList.remove('materials-tab--active');
        }
        materialsBtn[n].classList.add('materials__btn--active');
        tab[n].classList.add('materials-tab--active');
    }

})();











