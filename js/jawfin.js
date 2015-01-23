$(document).ready(function(){
	$('ul#work-list li a').fancyZoom({scaleImg: true, closeOnClick: true, width: 600, height: 400}).tipTip({
		defaultPosition: "top", 
		edgeOffset: 5,
		delay: 100
	});
	$().UItoTop({ easingType: 'easeOutQuart' });
});