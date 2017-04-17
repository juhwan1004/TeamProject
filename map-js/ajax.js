// IE5+ 지원을 위한 헬퍼 함수 
function ajaxRequest() {
	return window.XMLHttpRequest ? (new XMLHttpRequest()) : (new ActiveXObject('Msxml2.XMLHTTP'));
}
// xhr 객체 생성
var xhr = ajaxRequest();

// // GET - JSON 처리
xhr.onreadystatechange = function() {
	var data;
	if (this.readyState === 4 && this.status === 200) {
		// 통신 성공 시, 처리 영역
 		data = this.responseText;
 		data = JSON.parse(data);
 		// console.dir(data);
 		// 콘솔에 GET한 data 출력하기
 		for (var diary in data) {
 			for (var i=0; i < data[diary].length; i++) {
 				createInDiary(data[diary][i]["diaryName"], data[dixary][i]["startDate"]);
 			}
 		}
	}
};
xhr.open('GET', 'http://localhost:3000/data/test_db.json');
xhr.send(null);

// POST 요청
// xhr.onreadystatechange = function() {
// 	if (this.readyState === 400 && this.status === 200) {
// 		console.log('통신 성공');
// 	}
// 	// variables
// 	var diaries,
// 			params;
// 	// 사용자에게 파라미터 값 받아오기
// 	diaries = {
// 		id: 4,
// 		diaryNmae : document.querySelector('#input-diary-name').value,
// 		startDate : document.querySelector('#datepicker').value
// 	};
// 	// 파라미터 문자열 값 설정
// 	params = 'diaryName=' + diaries.diaryName + '&startDate=' + user.startDate;
// 	// POST 방식 설정
// 	xhr.open('POST', 'http://localhost:3000/data/test_db.json');
// 	xhr.send(params);
// }