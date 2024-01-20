/*====выводит категорию при фильтрации на странице мониторинг */
const sortOut = document.querySelector('.sort-block__out');
const sortList = document.querySelector('#sort-cat');

if (sortList) {
	const sortListItems = sortList.querySelectorAll('.sort-list-cat');

	for (let sortItem of sortListItems) {
		const sortCatActive = sortList.querySelector('.active');
		sortItem.addEventListener('click', function (e) {
			e.preventDefault();
			if (sortCatActive) sortCatActive.classList.remove('active');

			this.classList.add('active');
			const sortCat = sortItem.textContent;
			sortOut.textContent = sortCat;
			setTimeout(function() {
				this.closest('.modal-frame-wrapper').classList.remove('visible');
				bodyEl.classList.remove('lock');

			} , 500);
		});
	}
}