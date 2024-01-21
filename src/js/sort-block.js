/*====выводит категорию при фильтрации на странице мониторинг */
const sortOut = document.querySelector('.sort-block__out');
const sortList = document.querySelector('#sort-cat');

if (sortList) {
	const sortListItems = sortList.querySelectorAll('.sort-list-cat');
	const cleanSort = document.querySelector('#cancel-sort');

	for (let sortItem of sortListItems) {

		sortItem.addEventListener('click', function (e) {

			e.preventDefault();
			const sortCatActive = sortList.querySelector('.sort-list-cat.active');
			if (sortCatActive) sortCatActive.classList.remove('active');
			
			this.classList.add('active');
			const sortCat = sortItem.querySelector('.cat-type').textContent;
			sortOut.textContent = sortCat;
			setTimeout(() => this.closest('.modal-frame-wrapper').classList.remove('visible'), 300);
		});
		/***********отмена сортировки************** */
		cleanSort.addEventListener('click', () => {
			const sortCatActive = sortList.querySelector('.sort-list-cat.active');
			sortOut.textContent = '';
			if (sortCatActive) {
				sortCatActive.classList.remove('active');
			}


		});
	}
}