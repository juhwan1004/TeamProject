
// sign-in-modal
var modal_sign_in = document.querySelector(".sign-in-modal");
var btn_sign_in = document.querySelector(".sign-in");
var sign_in_wrap = document.querySelector(".sign-in-wrap");
var button_create_account = document.querySelector(".button-create-account");


// sign-up-modal
var modal_sign_up = document.querySelector(".sign-up-modal");
var btn_sign_up = document.querySelector(".sign-up");
var sign_up_wrap = document.querySelector(".sign-up-wrap");

//  open button
btn_sign_in.onclick = function() {
    // modal_sign_in.style.display = "block";
    openModal(modal_sign_in);
}

btn_sign_up.onclick = function() {
  // modal_sign_up.style.display = "block";
  openModal(modal_sign_up);
}

// 모달창 클릭 이벤트 전파 차단
sign_in_wrap.onclick = function(e) {
  // console.log('clicked signWrap');
  e.stopPropagation();
}

sign_up_wrap.onclick = function(e) {
  // console.log('clicked signWrap');
  e.stopPropagation();
}

// 로그인 모달에서 회원가입 모달로 이동하는 버튼
button_create_account.onclick = function() {
  changeAccountMode();
}

function changeAccountMode() {
  closeModal.call(modal_sign_in);
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



// video control

var video_main = document.querySelector(".video-main");
// console.log('video_main:',video_main);

// video_main.onclick = function() {
//   play(video_main);
// }

  // window.onclick  = video_main.pause;
  // window.onclick  = video_main.play;

// function video_main() {
//     video_main.play(onclick);
// }
//
// function video_main() {
//     video_main.pause(onclick);
// }

video_main.addEventListener('click', playControl);

document.addEventListener('keyup', stopVideo);

function stopVideo(e) {
  if(e.keyCode === 27) {
    video_main.pause();
  }
}

function playControl() {
  video_main[ video_main.paused ? 'play' : 'pause' ]();
  // if ( !video_main.paused ) {
  //     video_main.pause();
  // } else {
  //     video_main.play();
  // }
}
