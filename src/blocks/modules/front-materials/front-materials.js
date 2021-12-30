// (function toggleTabs() {
//     const materialsBtn = document.querySelectorAll('.materials__btn');
//     const tab = document.querySelectorAll('.materials-tab');
//     const select = document.querySelector('.price-top__mob-nav');

//     if (materialsBtn && tab && (materialsBtn.length == tab.length)) {
//         for (let i = 0; i < materialsBtn.length; i++) {
//             materialsBtn[i].addEventListener('click', function (e) {
//                 e.preventDefault();
//                 changeActive(i);
//             })
//         }
//     }

//     if (select) {
//         select.addEventListener('change', function (e) {
//             let item = select.value;
//             changeActive(item);
//         })
//     }

//     function changeActive(n) {
//         for (let i = 0; i < priceBtn.length; i++) {
//             materialsBtn[i].classList.remove('price-top-btn--active');
//             tab[i].classList.remove('price-bottom--active');
//         }
//         materialsBtn[n].classList.add('price-top-btn--active');
//         tab[n].classList.add('price-bottom--active');
//     }

// })();

