// sign-in, sign-up
var modal = document.querySelector(".modal");

// sign-in-modal
var modal_sign_in = document.querySelector(".sign-in-modal");
var btn_sign_in = document.querySelector(".sign-in");

// sign-up-modal
var modal_sign_up = document.querySelector(".sign-up-modal");
var btn_sign_up = document.querySelector(".sign-up");

//  open button
btn_sign_in.onclick = function() {
    // modal_sign_in.style.display = "block";
    openModal(modal_sign_in);
}

btn_sign_up.onclick = function() {
  // modal_sign_up.style.display = "block";
  openModal(modal_sign_up);
}

// closed button
var btn_closed = document.querySelectorAll(".button-closed");

function openModal(target) {
  target.style.display = 'block';
}

function closeModal() {
  this.style.display = 'none';
}


btn_closed.forEach(function(item) {
  var target = item.parentNode.parentNode.parentNode.parentNode;
  target.onclick = item.onclick = closeModal.bind(target);
});


// jQuery
//
// (function(global, $) {
//   'use strict';
//   // sign-in, sign-up
//   var modal = $(".modal");
//   // sign-in-modal
//   var modal_sign_in = $(".sign-in-modal");
//   var btn_sign_in = $(".sign-in");
//   // sign-up-modal
//   var modal_sign_up = $(".sign-up-modal");
//   var btn_sign_up = $(".sign-up");
//   //  open button
//   btn_sign_in.on('click',function() {
//       // modal_sign_in.style.display = "block";
//       openModal(modal_sign_in);
//   });
//
//   btn_sign_up.on('click',function() {
//     // modal_sign_up.style.display = "block";
//     openModal(modal_sign_up);
//   });
//
//   // closed button
//   var btn_closed = $(".button-closed");
//
//
//   function openModal(target) {
//     target.style.display = 'block';
//   }
//
//   function closeModal() {
//     this.style.display = 'none';
//   }
//
//
//   btn_closed.each(function(index, item) {
//     var $item = $(item);
//     var $target = $item.parent().parent().parent().parent();
//     $target.on('click', $.proxy(closeModal, target));
//     $item.on('click', $.proxy(closeModal, target));
//   });
//
// }(window, window.jQuery));
