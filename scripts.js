//Fade animation
AOS.init({duration: 2000});

//Typing Animation
const title = "Ellie Redmayne"; 
const subtitle ="Web Developer ";
const titleArray = title.split("");
const subtitleArray = subtitle.split("");
let timer;

function frameLooper () {
	if (titleArray.length > 0 || subtitleArray.length > 0) {
		document.getElementById("title-text").innerHTML += titleArray.shift()
    document.getElementById("subtitle-text").innerHTML += subtitleArray.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',100); 

}
frameLooper();

//Nav bar 
const navToggle = document.querySelector(".nav-toggle");

const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

//Scroll to top
scrollButton = document.getElementById("scroll-top");

window.onscroll = function() {scrollDisplay()};

function scrollDisplay() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function handleTopScroll() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}