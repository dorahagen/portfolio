$(document).ready(function() {

	// Linked In

	$('.linkedin-off').mouseenter(function() {
		$(this).hide();
		$('.linkedin-on').show()
		.animate (
			{'left': '0px'},
			100,
			function() {
				// slide out complete
			}
		);
	});
	$('.linkedin-on').mouseleave(function() {
		$(this).animate (
			{'left': '-174px'},
			500,
			function() {
				// slide in complete
			}
		).hide();
		$('.linkedin-off').show();
	});

	// Twitter

	$('.twitter-off').mouseenter(function() {
		$(this).hide();
		$('.twitter-on').show()
		.animate (
			{'left': '0px'},
			100,
			function() {
				// slide out complete
			}
		);
	});
	$('.twitter-on').mouseleave(function() {
		$(this).animate (
			{'left': '-174px'},
			500,
			function() {
				// slide in complete
			}
		).hide();
		$('.twitter-off').show();
	});

	// Behance

	$('.behance-off').mouseenter(function() {
		$(this).hide();
		$('.behance-on').show()
		.animate (
			{'left': '0px'},
			100,
			function() {
				// slide out complete
			}
		);
	});
	$('.behance-on').mouseleave(function() {
		$(this).animate (
			{'left': '-174px'},
			500,
			function() {
				// slide in complete
			}
		).hide();
		$('.behance-off').show();
	});

	// Email

	$('.email-off').mouseenter(function() {
		$(this).hide();
		$('.email-on').show()
		.animate (
			{'left': '0px'},
			100,
			function() {
				// slide out complete
			}
		);
	});
	$('.email-on').mouseleave(function() {
		$(this).animate (
			{'left': '-174px'},
			500,
			function() {
				// slide in complete
			}
		).hide();
		$('.email-off').show();
	});

});