

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// image-slider

// document.addEventListener('DOMContentLoaded', function () {
//   new Splide('#home1-slider', {
//     perPage: 3,
//     type: 'loop',
//     arrows: true,


//     breakpoints: {
//       '640': {

//         perPage: 1,
//         perMove: 1,

//         rewind: true,

//       },
//       '480': {
//         perPage: 1,
//         perMove: 1,


//       },
//     }
//   }).mount();
// });






















                            // image slider
// var slider=document.querySelectorAll(".slider");
// var prebtn=document.querySelector(".left-arrow");
// var nxtbtn=document.querySelector(".right-arrow");

// slider.forEach((item,i)=>{
// var sliderdimention=item.getBoundingClientRect();
// var sliderwidth=sliderdimention.width;

// prebtn[i].addEventListener("click",()=>{
//     item.scrollLeft += sliderwidth;
// });
// nxtbtn[i].addEventListener("click",()=>{
//     item.scrollLeft -= sliderwidth;
// });
// });



