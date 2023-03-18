$(function () {
	setInterval(function () {
		date = new Date();
		console.log(date.getSeconds());
		$('.date').text(date.getHours() + ' : ' + date.getMinutes());
	}, 100);
	$('.back-btn').click(function () {
		location.href = 'index.html';
	});
	$('.app').click(function () {
		location.href = 'app1.html'
	});
});
function selectCalculate() {
	$('.hide').show();
	$('.dialog-box').hide();
}
