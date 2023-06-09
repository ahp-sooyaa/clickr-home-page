const navbar = document.querySelector("nav");

window.onscroll = () => {
	if (window.scrollY > 100) {
		navbar.classList.add("navbar-sticky");
	} else {
		navbar.classList.remove("navbar-sticky");
	}
};
