var c = 0;
document.querySelector(".menu-btn").onclick = function () {
	// if(document.querySelector("nav .menu").style.top === "0") {
	// 	console.log("run if");
	// 	document.querySelector("nav .menu").toggleClass
	// }
	// else if (document.querySelector("nav .menu").style.top === "-100%") {
	// 	console.log("run else if");
	// 	document.querySelector("nav .menu").style.top = "0";
	// }
	console.log(c)
	if((c++) %2 != 0) {
		document.querySelector("nav .menu").classList.add('active')
	}
	else {
		document.querySelector("nav .menu").classList.remove('active')
	}
}

// $(document).ready(function(){
// 	$('.menu-btn').click(function() {
// 		$('nav .menu').toggleClass("active");
// 	})
// });
