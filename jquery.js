

//script for scroll down button

$(function() {
	"use strict";
  	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

	$(window).on("scroll", function() {
	"use strict";
	if($(window).scrollTop()) {
		$('nav').addClass('black');
	}
	else {
		$('nav').removeClass('black');
	}
});


//Popup window for CV
//Get popup elemeny
var cvpopup = document.getElementById('cvpopup');
//Get open modal button
var cv = document.getElementById('cv');
//Get close button 
var closePopup = document.getElementsByClassName('closePopup')[0];

cv.addEventListener('click', openPopup);
closePopup.addEventListener('click', closepop);
window.addEventListener('click', outsideClick);

//Lister for open click
function openPopup(){
	cvpopup.style.display = 'block';
}
//Fuction to close popup
function closepop() {
	cvpopup.style.display='none';
}
//Function to close popup if outside click
function outsideClick(e) {
	if(e.target == popup){
		popup.style.display = 'none';
	}
}



//Popup window for Map
//Get popup elemeny
var popup = document.getElementById('simplePopup');
//Get open modal button
var mappopup = document.getElementById('mappopup');
//Get close button 
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Lister for open click
mappopup.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
//Listen for outside click
window.addEventListener('click', outsideClick);

//Fuction open popup
function openModal(){
	popup.style.display = 'block';
}

//Fuction to close popup
function closeModal() {
	popup.style.display='none';
}


//Function to close popup if outside click
function outsideClick(e) {
	if(e.target == popup){
		popup.style.display = 'none';
	}
}



















