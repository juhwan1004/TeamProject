// diary contents의 scroll man script
(function(global, $helper){
	'use strict';
	// variables
	var document,
			diary_panel,
			diary_contents,
		  scroll_man,
		  frame,
			scroll,
			progress;
	// get reference
	document = global.document;
	diary_panel = document.querySelector('.diary-panel');
	diary_contents = document.querySelector('.diary-contents');
	scroll_man = document.querySelector('.scroll-man');
	frame = document.querySelector('#frame');
	progress = document.querySelector('.progress');

	diary_contents.addEventListener('scroll', function () {
		scroll = $helper.getScrollPos(diary_contents);
		if (scroll < 95) {
			scroll_man.setAttribute('style', 'left:'+ scroll +'%;');
		}
		// progress 설정
		progress.setAttribute('style', 'width:'+ scroll +'%;');
		// 스크롤맨 배경 설정
		if ( scroll >= 0 && scroll < 33 ) {
			diary_panel.classList.remove('parallax-evening');
			diary_panel.classList.remove('parallax-night');
			diary_panel.classList.add('parallax-day');
		}	else if ( scroll >= 33 && scroll < 66 ) {
			diary_panel.classList.remove('parallax-day');
			diary_panel.classList.remove('parallax-night');
			diary_panel.classList.add('parallax-evening');
		} else if ( scroll >= 66 && scroll < 100 ) {
			diary_panel.classList.remove('parallax-day');
			diary_panel.classList.remove('parallax-evening');
			diary_panel.classList.add('parallax-night');
		}
		// steps images
		frame.setAttribute('style', 'animation: scroll-man-animation 0.5s steps(7) infinite');
	});	
}(window, helper));


