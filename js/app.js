$(document).ready(function() {
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
});