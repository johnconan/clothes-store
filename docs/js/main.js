$(document).ready(function() {

 $(".owl-carousel").owlCarousel({
	items:1,
	nav:true,
	loop:true,
	autoplay:2000
	// navText:["<img src=\"img/arrow-left.png\">","<img src=\"img/arrow-right.png\">"]

});
});

// preloader
window.onload = function() {
	$("#page-preloader").delay(1000).fadeOut("slow");
};
