var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';


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
  lVar = setTimeout(ShowPage, 1);
  window.scroll(0,0);
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
var navli;
var scroll;


function scrollFunction(scroll) {
  header = document.getElementById("header");
  nav = document.getElementById("nav");
  navli = document.getElementById("navli");
  

  if (document.body.scrollTop > 50 ) { 
    header.style.height = "50px";
    nav.style.fontSize = "20px";
	

    
  } else {
    header.style.height = "100px";
    nav.style.fontSize = "40px";
	

	
    
  }
  
   if (document.body.scrollTop > scroll ) { 

	navli.style.paddingLeft = "0%";
	navli.style.paddingRight = "0%";
	nav.style.textAlign = "left";
    
  } else {
	navli.style.paddingLeft = "1.5%";
	navli.style.paddingRight = "1.5%";
	nav.style.textAlign = "center";
  }


}


$(function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html"); 
});
