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