$(document).ready(function(){
	// Foundation JavaScript
	// Documentation can be found at: https://foundation.zurb.com/sites/docs/
	$(document).foundation();
	// Slick Slider Configuration
	// Documentation can be found at: https://kenwheeler.github.io/slick/
	$('.index-slider').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 10000,
		slidesToShow: 1,
		accessbility: true,
		// Disable navigation arrows
		arrows: false
	});
});