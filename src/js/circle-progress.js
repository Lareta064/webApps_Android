
document.addEventListener("DOMContentLoaded", function () {

	/************круговой прогресс бар************* */
	const donuts = document.querySelectorAll(".loading-donut");
	if (donuts.length > 0) {
		function updateProgress() {


			donuts.forEach(donut => {
				const donutSegment = donut.querySelector(".donut-segment");
				const progressValue = +donut.getAttribute('data-progress') || 0;
				const circumference = 2 * Math.PI * parseFloat(donutSegment.getAttribute("r"));

				const progressOffset = (100 - progressValue) / 100 * circumference;
				donutSegment.style.strokeDasharray = `${circumference} ${circumference}`;
				donutSegment.style.strokeDashoffset = progressOffset;

				donut.dataset.progress = progressValue; // Update data attribute
			});
		};

		//- Invoke update progress
		updateProgress();
	}
});