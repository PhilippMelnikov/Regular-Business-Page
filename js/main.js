$(document).ready(function () {

	$('.dropdown').hover(function () {
		$(this).find('.dropdown-content').fadeIn(200);
	},function () {
		$(this).find('.dropdown-content').fadeOut(200);
	})

	$('.carousel').carousel({interval: 6000});

	$('.collapsible').click(function () {
		if(!$(this).children('.arrow-up').length){

			$(this).find('.fa-angle-double-down').addClass('arrow-up');
		}
		else{
			$(this).find('.fa-angle-double-down').removeClass('arrow-up');
		}
		
	})

})