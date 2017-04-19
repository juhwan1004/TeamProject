// window.innerHeight값에 따라 diary content와 google map의 높이 세팅 script
(function($helper){
	'use strict';
	// Variables
	var diary_contents, 
			diary_contents_height, 
			map, 
			map_height,
			header_height, 
			panel_height,
			extra_height;
	
	// get reference
	diary_contents = document.querySelector('.diary-contents');
	map = document.querySelector('#map');
	// 요소의 Height 값 가져오기
	header_height = $helper.getStyle(document.querySelector('.header'), 'height');
	panel_height = $helper.getStyle(document.querySelector('.diary-panel'), 'height');
	// 높이 계산
	extra_height = parseInt(header_height)+parseInt(panel_height);
	diary_contents_height = $helper.checkDisplayHeight()-extra_height;
	map_height = $helper.checkDisplayHeight()-header_height;
	// 요소 높이 설정
	diary_contents.setAttribute('style', 'height:'+ diary_contents_height +'px;');
	map.setAttribute('style', 'height:'+ map_height +'px;');
}(helper));
