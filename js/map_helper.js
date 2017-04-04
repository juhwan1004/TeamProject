/**
 * 화면 높이를 계산해주는 헬퍼 함수
 * @return {Number} [계산된 화면 높이 반환]
 */
function checkDisplayHeight() {
	return window.innerHeight;
}

/**
 * element의 스타일을 반환해주는 헬퍼 함수
 * @param  {HTMLElement} el   [스타일을 알고자 하는 요소]
 * @param  {CSS Attribute} prop [스타일 속성이름]
 * @return {String}      [스타일에 지정된 값]
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