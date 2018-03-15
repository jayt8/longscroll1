



//initialize - set-up variables
var counter = document.getElementById('counter');
var fromTop = window.pageYOffset;



counter.innerHTML = "counter text";

//psuedocode - when user is scrolling update variable fromTop and make decisions to change stuff on the page
//window.scroll <- boolean (yes/no)
window.onscroll = function(){
//when the user scrolls do all of this...

fromTop = window.pageYOffset;
//test if it works
console.log(fromTop);

counter.style.top = 100 + fromTop + "px";

if(fromTop > 1000){
  counter.innerHTML = "more than 1000 leagues";
} else {
  counter.innerHTML ="counter text"}

}

AOS.init({
  duration: 1200,
})



AOS.init();



$(window).scroll(function() {
if ($(this).scrollTop()> 100) {
$('.scrolltop').fadeIn();
} else {
$('.scrolltop').fadeOut();
}
});
