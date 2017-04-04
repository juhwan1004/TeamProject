// sign-in, sign-up

// sign-in-modal
var modal_sign_in = document.querySelector(".sign-in-modal");
var btn_sign_in = document.querySelector(".sign-in");

btn_sign_in.onclick = function() {
    modal_sign_in.style.display = "block";
}

// sign-up-modal
var modal_sign_up = document.querySelector(".sign-up-modal");
var btn_sign_up = document.querySelector(".sign-up");

btn_sign_up.onclick = function() {
  modal_sign_up.style.display = "block";
}

// closed button

var btn_closed = document.querySelectorAll(".button-closed");
for (var i=0; i<=btn_closed.length; i=i+1){
  // console.log(btn_closed[i]);
  // onclick = false {
}

// var button_sign_in_closed = document.getElementById("button-sign-in-closed");
//
// button_sign_in_closed.onclick = function() {
//   modal_sign_in.style.display = "none";
// }
//
// var button_sign_up_closed = document.getElementById("button-sign-up-closed");
//
// button_sign_up_closed.onclick = function() {
//   modal_sign_up.style.display = "none";
// }

// closed window
// var modal_in_bg = document.querySelector(".sign-in-view");
//
// modal_in_bg.onclick = function() {
//   modal_sign_in.style.display = "none";
// }
//
// window.onclick = function(event) {
//   if (event.target === modal_sign_in) {
//     modal_sign_in.style.display = "none";
//   }
// }
//
// window.onclick = function(event) {
//   if (event.target === modal_sign_up) {
//     sign_up_modal.style.display = "none";
//   }
// }
