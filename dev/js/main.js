$(document).ready(function() {
	$('.search').click(function(event) {
		if(!$(this).hasClass('active'))
			$(this).addClass('active');
	});
	$('.close-search').click(function(event) {
		event.stopImmediatePropagation();
		$('.search').removeClass('active');
	});
	$('.single-slider__thumbs').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1
	});
	$('.single-slider__thumbs .img-wrap').click(function(event) {
		var src = $(this).data('src');
		var videoUrl = $(this).data('url');
		if(src) {
			$('.single-slider__view').css('background-image', 'url('+src+')');
			$('.single-video').attr('src', '');
		} else {
			$('.single-video').attr('src', videoUrl);
		}
	});
	var moneyFormat = wNumb({
		decimals: 0,
		thousand: ' ',
	})
});