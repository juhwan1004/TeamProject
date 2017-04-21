// signUp / signIn scripts

// variables
var input_email_sign_up,
    input_password_sign_up,
    input_confirm_password,
    button_sign_up,
    email_sign_up_message, 
    password_sign_up_message,
    confirm_sign_up_message,
    input_email_sign_in,
    input_password_sign_in,
    button_sign_in,
    email_sign_in_message, 
    password_sign_in_message;
// get ref.
// email 입력창
input_email_sign_up = document.querySelector('.input-email-sign-up');
input_email_sign_in = document.querySelector('.input-email-sign-in');
// 비밀번호 입력창
input_password_sign_up = document.querySelector('.input-password-sign-up');
input_password_sign_in = document.querySelector('.input-password-sign-in');
// 비밀번호 확인창
input_confirm_password = document.querySelector('.input-confirm-password');
// 회원가입 버튼
button_sign_up = document.querySelector('.button-sign-up');
button_sign_in = document.querySelector('.button-sign-in');
// signup error massge
email_sign_up_message = document.querySelector('.email-sign-up-message');
password_sign_up_message = document.querySelector('.password-sign-up-message');
confirm_sign_up_message = document.querySelector('.confirm-sign-up-message');
// signin error massge
email_sign_in_message = document.querySelector('.email-sign-in-message');
password_sign_in_message = document.querySelector('.password-sign-in-message');

// sign up
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

// sign in
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

