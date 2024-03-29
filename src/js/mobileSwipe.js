var Swipe = (function () {
	function Swipe(element) {
		this.xDown = null;
		this.yDown = null;
		this.element = typeof (element) === 'string' ? document.querySelector(element) : element;
		this.element.addEventListener('touchstart', function (evt) {
			this.xDown = evt.touches[0].clientX;
			this.yDown = evt.touches[0].clientY;
		}.bind(this), false);
	}

	Swipe.prototype.onLeft = function (callback) {
		this.onLeft = callback;
		return this;
	};
	Swipe.prototype.onRight = function (callback) {
		this.onRight = callback;
		return this;
	};
	Swipe.prototype.onUp = function (callback) {
		this.onUp = callback;
		return this;
	};
	Swipe.prototype.onDown = function (callback) {
		this.onDown = callback;
		return this;
	};

	Swipe.prototype.handleTouchMove = function (evt) {
		if (!this.xDown || !this.yDown) {
			return;
		}
		var xUp = evt.touches[0].clientX;
		var yUp = evt.touches[0].clientY;
		this.xDiff = this.xDown - xUp;
		this.yDiff = this.yDown - yUp;

		if (Math.abs(this.xDiff) !== 0) {
			if (this.xDiff > 2) {
				typeof (this.onLeft) === "function" && this.onLeft();
			} else if (this.xDiff < -2) {
				typeof (this.onRight) === "function" && this.onRight();
			}
		}

		if (Math.abs(this.yDiff) !== 0) {
			if (this.yDiff > 2) {
				typeof (this.onUp) === "function" && this.onUp();
			} else if (this.yDiff < -2) {
				typeof (this.onDown) === "function" && this.onDown();
			}
		}
		// Reset values.
		this.xDown = null;
		this.yDown = null;
	};

	Swipe.prototype.run = function () {
		this.element.addEventListener('touchmove', function (evt) {
			this.handleTouchMove(evt);
		}.bind(this), false);
	};

	return Swipe;
}());
Swipe.prototype.onLeft = function (callback) {
	this.onLeft = callback;
	return this;
};
Swipe.prototype.onRight = function (callback) {
	this.onRight = callback;
	return this;
};
Swipe.prototype.onUp = function (callback) {
	this.onUp = callback;
	return this;
};
Swipe.prototype.onDown = function (callback) {
	this.onDown = callback;
	return this;
};
Swipe.prototype.handleTouchMove = function (evt) {
	if (!this.xDown || !this.yDown) { return; }
	var xUp = evt.touches[0].clientX;
	var yUp = evt.touches[0].clientY;
	this.xDiff = this.xDown - xUp;
	this.yDiff = this.yDown - yUp;
	//Swipe Left or Right 
	if (Math.abs(this.xDiff) !== 0) {
		if (this.xDiff > 2) {
			typeof (this.onLeft) === "function" && this.onLeft();
		} else if (this.xDiff < -2) {
			typeof (this.onRight) === "function" && this.onRight();
		}
	}
	if (Math.abs(this.yDiff) !== 0) {
		if (this.yDiff > 2) {
			typeof (this.onUp) === "function" && this.onUp();
		} else if (this.yDiff < -2) {
			typeof (this.onDown) === "function" && this.onDown();
		}
	}
	this.xDown = null;
	this.yDown = null;
};
Swipe.prototype.run = function () {
	this.element.addEventListener('touchmove', function (evt) {
		this.handleTouchMove(evt);
	}.bind(this), false);
};
const swipeBlock1 = document.querySelector('#swipe1');
const swipeBlock2 = document.querySelector('#swipe2');
const swipeBlock3 = document.querySelector('#swipe3');
if (swipeBlock1){
	var swiper1 = new Swipe('#swipe1');
	swiper1.onUp(()=>upHandler(swiper1.element));
	swiper1.onDown(()=>downHandler(swiper1.element));
	swiper1.run();
}
if (swipeBlock2) {
	var swiper2 = new Swipe('#swipe2');
	swiper2.onUp(() => upHandler(swiper2.element));
	swiper2.onDown(()=>downHandler(swiper2.element));
	swiper2.run();
}
if (swipeBlock3) {
	var swiper3 = new Swipe('#swipe3');
	swiper3.onUp(() => upHandler(swiper3.element));
	swiper3.onDown(()=>downHandler(swiper3.element));
	swiper3.run();
}

function upHandler(element){
	if(!element) 
		console.error('Up handler requires element argument');
	const btnParent = element.closest('.toggle-class');
	btnParent.classList.add('open');
}

function downHandler(element) {
	if (!element)
		console.error('Down handler requires element argument');
	const btnParent = element.closest('.toggle-class');
	btnParent.classList.remove('open');
}
