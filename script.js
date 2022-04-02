
//Slider
let slideIndex = 1;
showSlides(slideIndex);

//Nächste/vorherige
function plusSlides(n) {
    showSlides(slideIndex += n)
}

//Bilderkontrolle
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("meinBild");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//Laden
var lVar;

function ladeFunktion(){
  lVar = setTimeout(ShowPage, 1000);
}

function ShowPage(){
  var laden = document.getElementById("laden");
  var content= document.getElementById("content");

  laden.classList.add("hidden");
  content.classList.replace("hidden", "shownBlock")
}

//onScroll

var header;
var nav;
var delay = 800;
var lastChange = 0;

function scrollFunction() {
  header = document.getElementById("header");
  nav = document.getElementById("nav");
  

  if (document.body.scrollTop > 50 ) {
    if (lastChange >= (Date.now())) return;
    header.style.height = "50px";
    nav.style.fontSize = "20px";
    
  } else {
    if (lastChange >= (Date.now())) return;
    header.style.height = "100px";
    nav.style.fontSize = "40px";
    
  }
  lastChange = Date.now();



}

