const hamburger = document.querySelector('.headermenu .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.headermenu .nav-bar .nav-list ul');
const headermenu = document.querySelector('.headermenu.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});
