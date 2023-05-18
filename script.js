// const bar = document.getElementById("bar");
// const close = document.getElementById("close");
// const nav = document.getElementById("navbar");

// const carticon = document.querySelector("#lg-bag");
// const cart = document.getElementById("navbar");
// const closecart = document.getElementById("navbar");

const container = document.getElementById("container");
const signInEmail = document.getElementById("signInEmail");
const signUpEmail = document.getElementById("signUpEmail");

// opensingnIN
function openSignIn() {
	container.classList.remove("right-panel-active");
	// if (signUpEmail.value !== "") {
	// 	signInEmail.value = signUpEmail.value;
	// }
}
// opensingnUp
function openSignUp() {
	container.classList.add("right-panel-active");
	// if (signInEmail.value !== "") {
	// 	// signUpEmail.value = signInEmail.value;
	// }
}




// const observer = new IntersectionObserver((entries) => {
// 	entries.forEach((entry)=>{
// 		console.log(entry)
// 		if(entry.isIntersecting){
// 			entry.target.classList.add('show');

// 		}else{
// 			entry.target.classList.remove('show')
// 		}
// 	})
// })
// const hiddenElements = document.querySelectorAll('.hidden');

// hiddenElements.forEach((el) => observer.observe(el));


//    start menu
// OPEN MENU
const menuDOM = document.getElementById("menu");
const menuBtn = document.getElementById("mb");
// const allSecTitle = [...document.querySelectorAll(".section-title")];
// const prog = document.querySelector(".progress");
menuDOM.style.display = "none";
menuDOM.style.transform = "translateX(-100%)";
menuDOM.style.boxShadow = "none";

const openMenu = () => {
	menuDOM.style.display = "block";
	setTimeout(() => {
		menuDOM.style.transform = "translateX(0)";
		menuDOM.style.boxShadow = "";
		menuDOM.style.transition = ".5s";
	}, 10);
	
	// allSecTitle.forEach((st) => {
	// 	st.style.zIndex = "0";
	// });
	// try {
	// 	prog.style.zIndex = "0";
	// } catch (error) {}
	// document.lastChild.style.overflow = "hidden"; // Disables the window scrolling
};

// CLOSE MENU
const closeMenu = () => {
	menuDOM.style.transform = "translateX(-100%)";
	menuDOM.style.boxShadow = "none";
	menuDOM.style.transition = ".5s";
	setTimeout(() => {
		menuDOM.style.display = "none";
		// allSecTitle.forEach((st) => {
		// 	st.style.zIndex = "";
		// });
		// try {
		// 	prog.style.zIndex = "";
		// } catch (error) {}
	}, 500);
	// document.lastChild.style.overflow = ""; // ReEnables the window scrolling
};

// CLOSES MENU IF ANY AREA OUTSIDE THE MENU BOX GETS CLICKED
// window.addEventListener("click", (e) => {
// 	if (menuDOM.style.display === "block") {
// 		let parent =
// 		e.target.parentNode.parentNode.parentNode.parentNode === menuDOM ||
// 		e.target.parentNode.parentNode.parentNode === menuDOM ||
// 			e.target.parentNode.parentNode === menuDOM ||
// 			e.target.parentNode === menuDOM;
			
// 		if (!parent && e.target !== menuBtn) {
// 			closeMenu();
// 		}
// 	}
// });


// //  finsh menu


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
