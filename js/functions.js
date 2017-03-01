$(document).ready(function() {




// --------------------------------------------------------
// itemDownload expansion

	$('.downloadable li > a').on('click', function (j) {
		j.preventDefault();
		$(this).next('.itemDownload').toggleClass('open');
	});





// --------------------------------------------------------
// qa expansion

	$('.qa li > a').on('click', function (j) {
		j.preventDefault();
		$(this).closest('li').toggleClass('open');
	});





// --------------------------------------------------------
// expansion generic simple

	$('.expand').on('click', function (j) {
		j.preventDefault();
		$(this).next('.expandable').toggleClass('open');
		$(this).toggleClass('active');
	});





// --------------------------------------------------------
// downloads scroll and button

	if ($('.downloads').length) {
		$(window).on('scroll', function () {
			if($(window).scrollTop() > $('.downloads').offset().top) {
				$('body').addClass('scrolledPastDownloads');
			}
			else {
				$('body').removeClass('scrolledPastDownloads');
			}
		});
	}

	$('button.download').on('click', function () {
		if($('body').hasClass('scrolledPastDownloads')) {
			$('html, body').animate ({
				scrollTop: $('.downloads').offset().top - 100
			}, 300);
			$('.downloads').addClass('open');
		}
		else {
			$('.downloads').toggleClass('open');
		}
	});





// --------------------------------------------------------
// header menu expansion

	$('header button').on('click', function () {
		$('header').toggleClass('open');
	});









});// end jquery
