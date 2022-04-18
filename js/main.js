let burger = document.querySelector('.burger'),
	close = document.querySelector('.menu_close'),
	menu = document.querySelector('.menu');

let swiper = new Swiper('.slider-container', {
	centeredSlides: true,
	slidesPerView: 3,
	loop: true,
	spaceBetween: 100,
});

burger.addEventListener('click', () => {
	menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
});