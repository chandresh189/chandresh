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

$(document).ready(function(){
	$('.menu-btn').click(function() {
		$("nav .menu").toggleClass("active");
	})
});


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