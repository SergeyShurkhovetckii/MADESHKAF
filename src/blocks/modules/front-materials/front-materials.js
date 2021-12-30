(function toggleTabs () {
	const priceBtn = document.querySelectorAll('.price-top-btn');
	const tab = document.querySelectorAll('.price-bottom');
	const select = document.querySelector('.price-top__mob-nav');

	if (priceBtn && tab && (priceBtn.length == tab.length)) {
		for (let i = 0; i < priceBtn.length; i++) {
			priceBtn[i].addEventListener('click', function(e) {
				e.preventDefault();
				changeActive(i);
			})
		}
	}

	if (select) {
		select.addEventListener('change', function(e) {
			let item = select.value;
			changeActive(item);
		})
	}

	function changeActive(n) {
		for (let i = 0; i < priceBtn.length; i++) {
			priceBtn[i].classList.remove('price-top-btn--active');
			tab[i].classList.remove('price-bottom--active');
		}
		priceBtn[n].classList.add('price-top-btn--active');
		tab[n].classList.add('price-bottom--active');
	}

})();
