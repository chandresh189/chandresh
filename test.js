// let sw = screen.width;
// let sh = document.body.scrollHeight;

// let CircleH = $(".ell-3").css("height");
// let CircleW = $(".ell-3").css("width");

// console.log('screen width is', sw)
// console.log('screen height is', sh)

// console.log(CircleH)
// console.log(CircleW)

// CircleH = Number(CircleH.slice(0,-2));
// CircleW = Number(CircleW.slice(0,-2));

// // Agar Circle Screen se bada h to 
// console.log(CircleW, sw);
// if(CircleW >= sw) {
//     document.querySelector('.ell-3').style.width = (sw - 100).toString()+'px';
//     CircleW = sw - 100;
//     // document.querySelector('.ell-3').style.height = (sw - 50).toString()+'px';
// }

// // console.log(CircleH)
// console.log(CircleW)

// // CircleH = sw - 150;

// let CircleLeft = Math.floor(Math.random()*sw);
// let CircleTop = Math.floor(Math.random()*sh);
// CircleLeft -= CircleW;
// CircleTop -= CircleH;

// document.querySelector('.ell-3').style.top = (CircleTop).toString() + 'px';
// document.querySelector('.ell-3').style.left = (CircleLeft).toString() + 'px';







let sw = screen.width;
let sh = document.body.scrollHeight;

var AllClasses = document.querySelectorAll(".ell");
function DisplayGrad (NameOfClass) {

    let CircleH = $(NameOfClass).css("height");
    let CircleW = $(NameOfClass).css("width");
    CircleH = Number(CircleH.slice(0,-2));
    CircleW = Number(CircleW.slice(0,-2));
    if(CircleW >= sw) {
        document.querySelector(NameOfClass).style.width = (sw - 100).toString()+'px';
        CircleW = sw - 100;
    }

    let CircleLeft = Math.floor(Math.random()*sw);
    let CircleTop = Math.floor(Math.random()*sh);
    CircleLeft -= CircleW;
    CircleTop -= CircleH;

    NameOfClass.style.top = (CircleTop).toString() + 'px';
    NameOfClass.style.left = (CircleLeft).toString() + 'px';

};

var i;
for (i = 0; i < AllClasses.length; i++) {
    console.log(AllClasses[i])
    DisplayGrad(AllClasses[i])
}





VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});