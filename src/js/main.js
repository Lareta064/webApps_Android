document.addEventListener("DOMContentLoaded", function () {
   
	/*   форма подтверждения смс*/
	const inputs = document.querySelectorAll(".code-input");
	
	if (inputs.length > 0){	
		inputs.forEach(((input, index) => {
			input.addEventListener("input", (e => {
				let value = e.target.value;
				if (/^\d$/.test(value)) if (inputs[index + 1]) inputs[index + 1].focus();
				e.target.value = value.replace(/\D/g, "").substring(0, 1);
			}));
		}));
	}

   //========определить, что ios ===========
	const bodyEl = document.querySelector('body');
	// let isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
	// 	|| (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
	// if (!isIOS){
	// 	bodyEl.classList.remove('ios-device');
	// }

	//========= сортировка на стр Мониторинг ========
	const sortOut = document.querySelector('.sort-block__out');
	const sortList = document.querySelector('#sort-cat');
	
	if (sortList){
		const sortListItems = sortList.querySelectorAll('.sort-list-cat');
		const cleanSort = document.querySelector('#cancel-sort');
		
		for (let sortItem of sortListItems){
			
			sortItem.addEventListener('click', function(e){

				e.preventDefault();
				const sortCatActive = sortList.querySelector('.sort-list-cat.active');
				if (sortCatActive ) sortCatActive.classList.remove('active');
				
				this.classList.add('active');
				const sortCat = sortItem.querySelector('.cat-type').textContent;
				sortOut.textContent = sortCat;
				setTimeout(function(){
					sortItem.closest('.modal-frame-wrapper').classList.remove('visible');
					bodyEl.classList.remove('lock');
				}, 300);
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
	//====== each group and toggle active class ========
	const tabs = document.querySelectorAll('.tabs');
	// На нет и скрипта нет
	if(tabs.length > 0) {
		// Раз дошёл сюда, значит табс не пустой
		
		for (let tab of tabs)
		{
			// Ищем кнопки и контейнеры
			const tabBtns = tab.querySelectorAll('[tab-btn]');
			const tabContainers = tab.querySelectorAll('[tab-body]');

			// Если количество кнопок и контейнеров разное или если их нет
			if(
				tabBtns.length !== tabContainers.length 
				|| tabBtns.length === 0
			) return;

			// Добавляем листенеры
			for(btn of tabBtns)
			{
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
	}
	
	/* =============== modal с атрибутом frame-modal ===============*/
	const modalFramesOpen = document.querySelectorAll('[frame-btn]');
	const modalFrames = document.querySelectorAll('[frame-modal]');
	
	if (modalFrames.length > 0) {
		
		const modalFramesClose = document.querySelectorAll('[frame-close]');

		for (let item of modalFramesOpen) {
			item.addEventListener('click', function (e) {
			    
				for (let item of modalFrames) {
					item.classList.remove('visible');

					bodyEl.classList.remove('lock');
				}
				e.preventDefault();
				const itemAttr = item.getAttribute('frame-btn');

				for (let frame of modalFrames) {
					const frameAttr = frame.getAttribute('frame-modal');
					if (frameAttr == itemAttr) {
						frame.classList.add('visible');
						bodyEl.classList.add('lock');

					}
				}
			});
		}
		/*==  закрыть модалки  frame-modal по клику на крестик ======*/
		for (let item of modalFramesClose) {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				item.closest('[frame-modal]').classList.remove('visible');
				bodyEl.classList.remove('lock');


			});
		}
		/*=============== закрыть модалки по клику вне ===============*/
		for (let frame of modalFrames) {
			frame.addEventListener('click', function (e) {
				if (e.target === e.currentTarget) {
					this.classList.remove(`visible`);
					bodyEl.classList.remove('lock');
				}
			});
		}
	}
    
	/**************показать описание задачи на карте*************** */
	const toggleClass = document.querySelectorAll('.toggle-class');
	
	if (toggleClass.length > 0){
		for (let item of toggleClass){
			const addClassBtn = item.querySelector('.toggle-class-add');
			const removeClassBtn = item.querySelector('.toggle-class-remove');
			if (addClassBtn) {
				addClassBtn.addEventListener('click', () => {
					item.classList.toggle('open')
				});
			}
			if (removeClassBtn) {
				removeClassBtn.addEventListener('click', () => {
					
					item.classList.toggle('open');
				});
			}
		}
	}

	/*===================CUSTOM DROP FILTER====================*/
	const dropFilters = document.querySelectorAll('.custom-drop');
	if (dropFilters.length > 0) {
		for (let item of dropFilters) {
			const itemSelect = item.querySelector('.custom-drop__input');
			const itemDrop = item.querySelector('.custom-drop__list');
			// const itemDropItems = item.querySelectorAll('.drop-filter__item');

			item.addEventListener('click', function (e) {

				if (this.classList.contains('active')) {
					this.classList.remove('active');
				} else {
					this.classList.add('active');
				}
			});
			/********click Drop item******* */
			if (itemDrop) {
				itemDrop.addEventListener('click', function (e) {
					e.stopPropagation();
					const selectItemText = e.target.textContent;
					itemSelect.querySelector('input').setAttribute('value', selectItemText);
					item.classList.remove('active');
				});
			}
		}
	}

});
