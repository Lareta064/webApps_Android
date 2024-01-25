/***********sms inputs*************** */
const inputs = document.querySelectorAll(".code-input");
inputs.forEach(((input, index) => {
	input.addEventListener("input", (e => {
		let value = e.target.value;
		if (/^\d$/.test(value)) if (inputs[index + 1]) inputs[index + 1].focus();
		e.target.value = value.replace(/\D/g, "").substring(0, 1);
	}));
}));