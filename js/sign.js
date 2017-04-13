// 회원가입

// email 입력창
var input_email_sign_up = document.querySelector('.input-email-sign-up');

// 비밀번호 입력창
var input_password_sign_up = document.querySelector('.input-password-sign-up');

// 비밀번호 확인창
var input_confirm_password = document.querySelector('.input-confirm-password');

// 회원가입 버튼
var button_sign_up = document.querySelector('.button-sign-up');

// error massge
var email_sign_up_message = document.querySelector('.email-sign-up-message');
var password_sign_up_message = document.querySelector('.password-sign-up-message');
var confirm_sign_up_message = document.querySelector('.confirm-sign-up-message');

// 내용 작성 검증
button_sign_up.onclick = function() {
  // console.log('click');
  if ( input_email_sign_up.value.trim() === "" ) {
    // window.alert('아이디를 입력하여 주세요.');
    email_sign_up_message.style.display = "block";
  } else if ( input_password_sign_up.value.trim() === "" ) {
    // window.alert('비밀번호를 입력하여 주세요.');
    password_sign_up_message.style.display = "block";
  } else if ( input_confirm_password.value !==        input_password_sign_up.value ) {
    // window.alert('비밀번호를 확인하여 주세요.');
    confirm_sign_up_message.style.display = "block";
  }
};

input_email_sign_up.onclick = function() {
  email_sign_up_message.style.display = "none";
};

input_password_sign_up.onclick = function() {
  password_sign_up_message.style.display = "none";
};

input_confirm_password.onclick = function() {
  confirm_sign_up_message.style.display = "none";
};
//
// // 이메일 검증
// if ( input_email_sign_up === )
//
//
//
// // 비밀번호 검증
// if (  => input_password_sign_up.length  )


// 입력값 가져오기



﻿

// 값이 온다.
// var user_info = {
//     email: 'email@email.com',
//     pass: '@#$!$Rklsjdlkfsdfs'
// };
// ​
// axios.post('/rest-auth/login/', user_info)
//      .then(function(response){
//          // 사용자 key 값이 온다.
//      })





// ---------
// 로그인

// email 입력창
var input_email_sign_in = document.querySelector('.input-email-sign-in');

// 비밀번호 입력창
var input_password_sign_in = document.querySelector('.input-password-sign-in');

// 로그인 버튼
var button_sign_in = document.querySelector('.button-sign-in');

// error massge
var email_sign_in_message = document.querySelector('.email-sign-in-message');
var password_sign_in_message = document.querySelector('.password-sign-in-message');

// 내용 작성 검증
button_sign_in.onclick = function() {
  // console.log('click');
  if ( input_email_sign_in.value === "" ) {
    // window.alert('아이디를 입력하여 주세요.');
    email_sign_in_message.style.display = "block";
  } else if ( input_password_sign_in.value === "" ) {
    // window.alert('비밀번호를 입력하여 주세요.');
    password_sign_in_message.style.display = "block";
  }
};

input_email_sign_in.onclick = function() {
  email_sign_in_message.style.display = "none";
};

input_password_sign_in.onclick = function() {
  password_sign_in_message.style.display = "none";
};

// input_email_sign_in.addEventListener('click','focus', function() {
// 	email_sign_in_message.style.display = "none";
// });


// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test('yamoo9')
// false
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test('yamoo9@naver.com')
// true
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test('yamoo9@naver')
// false
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test('yamoo9@naver.com')
// email regexp
