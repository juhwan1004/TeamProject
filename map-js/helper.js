// helper function script
var helper = (function(global){
	'use strict';	
	var document;
	document = global.document;
	// [Private]
	/**
	 * [화면 높이를 계산해주는 헬퍼 함수]
	 * @return {Number} [계산된 화면 높이 반환]
	 */
	function checkDisplayHeight() {
		return global.innerHeight;
	}
	
	/**
	 * [element의 스타일을 반환해주는 헬퍼 함수]
	 * @param  {HTMLElement} el     [스타일을 알고자 하는 요소의 참조]
	 * @param  {CSS Attribute} prop [스타일 속성이름]
	 * @return {String}             [스타일에 지정된 값]
	 */
	function getStyle(el, prop) {
		// IE
		if (el.currentStyle) {
			return el.currentStyle[prop];
		// other browsers
		} else if (document.defaultView && document.defaultView.getComputedStyle) {
			return document.defaultView.getComputedStyle(el, null).getPropertyValue(prop);
		// fallback
		} else {
			return null;
		}
	}
	
	/**
	 * [스크롤 위치 계산 헬퍼 함수]
	 * @param  {HTMLElement} [스크롤이 동작하는 요소]
	 * @return {number}    	 [현재 스크롤 위치 값]
	 */
	function getScrollPos(el) {
		return Math.round(el.scrollTop/(el.scrollHeight-el.clientHeight) *100);
	}
	
	/**
	 * [Modal Window를 화면 중앙에 위치하도록 해주는 헬퍼 함수]
	 * @param {HTMLElement} el [중앙에 위치하고자 하는 요소의 참조]
	 */
	function setModalCenter(el) {
		// 인자로 받아온 element의 높이를 가져온 후
		var el_height = parseInt(getStyle(el,"height"));
		var el_width  = parseInt(getStyle(el,"width"));
	
		var align_height_center = (innerHeight/2) - (el_height/2);
		var align_width_center = (innerWidth/2) - (el_width/2);
		
		el.setAttribute('style','top:'+align_height_center+'px; left:'+align_width_center+'px; display: block;');
	}
	
	/**
	 * [In Diary를 만들어주는 헬퍼 함수]
	 * @param  {String} title [인다이어리 이름]
	 * @param  {String} date  [날짜]
	 */
	function createInDiary(title, start_date) {
		// create in_diary 
		var in_diary,
				in_diary_title,
				in_diary_wrapper,
				date;
		// create elements
		in_diary_wrapper = document.querySelector('.in-diary-wrapper');
		in_diary = document.createElement('div');
		in_diary_title = document.createElement('h1');
		date = document.createElement('p');
		// set Attributes
		in_diary_title.setAttribute('class','in_diary_title');
		in_diary.setAttribute('class', 'in_diary');
		// set text
		in_diary_title.textContent = title;
		date.textContent = "Date: " + start_date;
		// append elements
		in_diary.appendChild(in_diary_title);
		in_diary.appendChild(date);
		in_diary_wrapper.appendChild(in_diary); 
	}	
	// [Public]: 전역에서 사용할 수 있도록 공개
	return {
		'checkDisplayHeight': checkDisplayHeight,
		'getStyle': getStyle,
		'getScrollPos': getScrollPos
	}
}(window));
