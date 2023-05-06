// $(function () {
// 	$('.box1').css({
// 		'background-color': '#0000ff',
// 		'height': '100px'
// 	});
// });

// $(function () {
// 	$('.box1').slideDown();
// });
// $(function () {
// 	$('.box1').slideUp();
// });

// $(function () {
// 	$('.box1').show();
// 	$('.box1').css({ 'background-color': '#0000ff' });
// });
// $(function () {
// 	$('.box1').hide();
// });

// $(function (){
// 	$('.box1').slideDown(function (){
// 		$('.box1').css({
// 		'background-color': '#0000ff',
// 		'width': '200px',
// 		'height': '100px'
// 		}).slideUp();
// 	});
// });

// $(function () {
// 	$('.box1').mouseover(function () {
// 		$('.box1').css({ 'background-color': '#0000ff' });
// 	})
// 	$('.box1').mouseout(function () {
// 		$('.box1').css({ 'background-color': '#ff0000' });
// 	});
// });

$(function () {
	$('.box1').on('click', function () {
		$('.box1').addClass('box1-ext');
	})
	$('.box1').mouseout(function () {
		$('.box1').removeClass('box1-ext');
	});
});