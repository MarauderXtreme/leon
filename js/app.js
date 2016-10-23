function easteregg() {
	console.log(`%c This site was build by`, "color:#00050f; font-family:monospace");
	console.log(`%c
███╗   ███╗ █████╗ ██████╗  █████╗ ██╗   ██╗██████╗ ███████╗██████╗ ██╗  ██╗████████╗██████╗ ███████╗███╗   ███╗███████╗
████╗ ████║██╔══██╗██╔══██╗██╔══██╗██║   ██║██╔══██╗██╔════╝██╔══██╗╚██╗██╔╝╚══██╔══╝██╔══██╗██╔════╝████╗ ████║██╔════╝
██╔████╔██║███████║██████╔╝███████║██║   ██║██║  ██║█████╗  ██████╔╝ ╚███╔╝    ██║   ██████╔╝█████╗  ██╔████╔██║█████╗  
██║╚██╔╝██║██╔══██║██╔══██╗██╔══██║██║   ██║██║  ██║██╔══╝  ██╔══██╗ ██╔██╗    ██║   ██╔══██╗██╔══╝  ██║╚██╔╝██║██╔══╝  
██║ ╚═╝ ██║██║  ██║██║  ██║██║  ██║╚██████╔╝██████╔╝███████╗██║  ██║██╔╝ ██╗   ██║   ██║  ██║███████╗██║ ╚═╝ ██║███████╗
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝
`, "color:#ff6600; font-size:10px; font-family:monospace");
	console.log(`%c I like your enthusiasm but here you won't find any content here`, "color:#00050f; font-family:monospace");
	console.log(`%c If you are interested in the source-code go to github.com/marauderxtreme/leon`, "color:#00050f; font-family:monospace");
}

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
  	adaptiveHeight: true,
		lazyLoad: 'progressive',
		// Disable navigation arrows
		arrows: false
	});
	easteregg();
});