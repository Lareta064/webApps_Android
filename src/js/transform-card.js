/**************показать описание задачи на карте*************** */
const toggleClass = document.querySelectorAll('.toggle-class');
if (toggleClass.length > 0) {
	for (let item of toggleClass) {
		const addClassBtn = item.querySelector('.toggle-class-add');
		const removeClassBtn = item.querySelector('.toggle-class-remove');
		if (addClassBtn){
			addClassBtn.addEventListener('click', () => {
				item.classList.toggle('open')
			});
		}
		if (removeClassBtn){
			removeClassBtn.addEventListener('click', () => {
				item.classList.remove('open');
			});
		}
	}
}