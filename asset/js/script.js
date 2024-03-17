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

// Carousel

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});
