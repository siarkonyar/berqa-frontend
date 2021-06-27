const menuBtn = document.querySelector('.hamburger');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if(!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
	}
});

const navbar = document.querySelector('.navbar');
menuBtn.addEventListener('click', () => {
	navbar.classList.toggle('show');
});