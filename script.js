$(document).ready(function(){
	$("main").click(function() {
		console.log('out clicked');
		document.querySelector("nav .menu").classList.remove('active');
	})

	window.onscroll = function(){
		document.querySelector("nav .menu").classList.remove('active');
	};

	$(window).scroll(function() {
		if(this.scrollY > 50) {
			$('.navbar').addClass("sticky");
		}
		else {
			$('.navbar').removeClass("sticky");
		}
	})
});

// var body = $('#pop-up-id');
// body.addClass('pop-up');
// setTimeout(function() {
//     body.removeClass('pop-up');
// 	body.addClass('show-pop');
// }, 4000);

$(document).ready(function(){
	$('.menu-btn').click(function() {
		$("nav .menu").toggleClass("active");
	})
});

if(localStorage.getItem('show') === null) {
	console.log('pahli bar');
	localStorage.setItem('show', 1);
	console.log('pahli baar dikhna chahiye');
	var body = $('#pop-up-id');
	body.addClass('pop-up');
	setTimeout(function() {
    body.removeClass('pop-up');
	body.addClass('show-pop');
	}, 4000);
}
else {
	console.log('har bar');
	var body = $('#pop-up-id');
	body.addClass('show-pop');
}



$(document).ready(function(){
	$('#btn-1').click(function() {
		$(".p-content1").toggleClass("active");
		$(".fa-arrow-down").toggleClass("open");
	})

	$('#btn-2').click(function() {
		$(".p-content2").toggleClass("active");
		$(".fa-arrow-down").toggleClass("open");
	})

	$('#btn-3').click(function() {
		$(".p-content3").toggleClass("active");
		$(".fa-arrow-down").toggleClass("open");
	})
});
