function navbar() {
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function () {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			$(".navbar").css('top', "0px");
		} else {
			$(".navbar").css('top', "-50px");
		}
		prevScrollpos = currentScrollPos;
	}
}
$(document).ready(function () {
	navbar();
	$('section').append('<br><a href=\'#top\'>back to the top</a>');
});
