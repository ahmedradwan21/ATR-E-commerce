const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

const carticon = document.querySelector("#lg-bag");
const cart = document.getElementById("navbar");
const closecart = document.getElementById("navbar");

const container = document.getElementById("container");
const signInEmail = document.getElementById("signInEmail");
const signUpEmail = document.getElementById("signUpEmail");

function openSignIn() {
	container.classList.remove("right-panel-active");
	if (signUpEmail.value !== "") {
		signInEmail.value = signUpEmail.value;
	}
}

function openSignUp() {
	container.classList.add("right-panel-active");
	if (signInEmail.value !== "") {
		signUpEmail.value = signInEmail.value;
	}
}

if (bar) {
	bar.addEventListener("click", () => {
		nav.classList.add("active");
	});
}

if (close) {
	close.addEventListener("click", () => {
		nav.classList.remove("active");
	});
}

/*========  toggle style switcher  ========= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
	document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
	if (document.querySelector(".style-switcher").classList.contains("open")) {
		document.querySelector(".style-switcher").classList.remove("open");
	}
});
/* ================== theme colors ================= */
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
	alternateStyle.forEach((style) => {
		if (color === style.getAttribute("title")) {
			style.removeAttribute("disabled");
		} else {
			style.setAttribute("disabled", "true");
		}
	});
}
/* ================ theme colors and dark mode ================= */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
	dayNight.querySelector("i").classList.toggle("fa-sun");
	dayNight.querySelector("i").classList.toggle("fa-moon");
	document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
	if (document.body.classList.contains("dark")) {
		dayNight.querySelector("i").classList.add("fa-sun");
	} else {
		dayNight.querySelector("i").classList.add("fa-moon");
	}
});

var typed = new Typed(".typing", {
	strings: ["", "FullStack", "Software Engineer", "backend", "Marketing"],
	typeSpeed: 100,
	BackSpeed: 60,
	loop: true,
});
let span = document.querySelector(".up");

window.onscroll = function () {
	// console.log(this.scrollY);
	// if (this.scrollY >= 1000) {
	//   span.classList.add("show");
	// } else {
	//   span.classList.remove("show");
	// }
	this.scrollY >= 1000
		? span.classList.add("show")
		: span.classList.remove("show");
};

span.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};
