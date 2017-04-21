// index.html scripts

// variables
var modal_sign_in,
    btn_sign_in,
    sign_in_wrap,
    button_create_account,
    modal_sign_up,
    btn_sign_up,
    sign_up_wrap,
    btn_closed,
    target,
    video_main, 
    video_control;
// get ref. 
// sign-in-modal
modal_sign_in = document.querySelector(".sign-in-modal");
btn_sign_in = document.querySelector(".sign-in");
sign_in_wrap = document.querySelector(".sign-in-wrap");
button_create_account = document.querySelector(".button-create-account");
// sign-up-modal
modal_sign_up = document.querySelector(".sign-up-modal");
btn_sign_up = document.querySelector(".sign-up");
sign_up_wrap = document.querySelector(".sign-up-wrap");
// closed button
btn_closed = document.querySelectorAll(".button-closed");
// vidoe control
video_main = document.querySelector(".video-main");
video_control = document.querySelector(".control");

//  open button
btn_sign_in.onclick = function() {
    openModal(modal_sign_in);
}

btn_sign_up.onclick = function() {
  openModal(modal_sign_up);
}

// 모달창 클릭 이벤트 전파 차단
sign_in_wrap.onclick = function(e) {
  e.stopPropagation();
}

sign_up_wrap.onclick = function(e) {
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

function openModal(target) {
  target.style.display = 'block';
}

function closeModal() {
  this.style.display = 'none';
}

btn_closed.forEach(function(item) {
  target = item.parentNode.parentNode.parentNode.parentNode;
  target.onclick = item.onclick = closeModal.bind(target);
});

video_main.addEventListener('click', playControl);
document.addEventListener('keyup', stopVideo);

function stopVideo(e) {
  if(e.keyCode === 27) {
    video_main.pause();
  }
}

function playControl() {
  video_main[ video_main.paused ? 'play' : 'pause' ]();
}

////////////
// jQuery //
////////////
///
// video icon
$('.video-main').on('click', function() {
  $('.control').toggleClass('pause play');
});

$('.video-main').on('click', function() {
  $('.play-btn').toggleClass('stop paly');
});
