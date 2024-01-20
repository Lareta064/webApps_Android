document.addEventListener("DOMContentLoaded", function () {
	//====== each group and toggle active class ========
	const tabs = document.querySelectorAll('.tabs');
	// На нет и скрипта нет
	if (tabs.length < 1) return;
	// Раз дошёл сюда, значит табс не пустой
	for (let tab of tabs) {
		// Ищем кнопки и контейнеры
		const tabBtns = tab.querySelectorAll('[tab-btn]');
		const tabContainers = tab.querySelectorAll('[tab-body]');

		// Если количество кнопок и контейнеров разное или если их нет
		if (
			tabBtns.length !== tabContainers.length
			|| tabBtns.length === 0
		) return;

		// Добавляем листенеры
		for (btn of tabBtns) {
			const clickedBtn = btn;
			btn.addEventListener('click', (e) => {
				e.stopPropagation();
				const btnData = clickedBtn.getAttribute('tab-btn');

				const activeBtn = Array.from(tabBtns).find(btn => btn.classList.contains('active'));
				const activeCont = Array.from(tabContainers).find(cont => cont.classList.contains('active'));
				activeBtn.classList.remove('active');
				activeCont.classList.remove('active');

				const relatedCont = Array.from(tabContainers).find(cont => cont.getAttribute('tab-body') === btnData);
				clickedBtn.classList.add('active');
				relatedCont.classList.add('active');
			})
		}
	}
});

