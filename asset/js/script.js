//Mene Hamburger
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function(){
	dropdownMenu.classList.toggle('open');
	const isOpen = dropdownMenu.classList.contains('open');


	toggleBtnIcon.classList = isOpen?'fa-solid fa-xmark':'fa-solid fa-bars';
}


//Slider 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	 let i;
	 let slides = document.getElementsByClassName("comment");
	 let dots = document.getElementsByClassName("dot");
	 if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	 }
	 for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slideIndex++;
  	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "flex";
	setTimeout(showSlides, 4000);
	dots[slideIndex-1].className += " active";
}