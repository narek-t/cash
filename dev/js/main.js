$(document).ready(function() {
	$('.search').click(function(event) {
		if(!$(this).hasClass('active'))
			$(this).addClass('active');
	});
	$('.close-search').click(function(event) {
		event.stopImmediatePropagation();
		$('.search').removeClass('active');
	});
});