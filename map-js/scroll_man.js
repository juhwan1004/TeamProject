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
		if ( scroll > 0 && scroll < 33 ) {
			diary_panel.setAttribute('style', 'background-image: url("images/steps-day-bg.png"); background-size: 100% 80px; background-repeat: no-repeat;');
		}	else if ( scroll >= 33 && scroll < 66 ) {
			diary_panel.setAttribute('style', 'background-image: url("images/steps-evening-bg.png"); background-size: 100% 80px; background-repeat: no-repeat;');
		} else if ( scroll >= 66 && scroll < 100 ) {
			diary_panel.setAttribute('style', 'background-image: url("images/steps-night-bg.png"); background-size: 100% 80px; background-repeat: no-repeat;');
		}
		// steps images
		frame.setAttribute('style', 'animation: frame-animation 0.5s steps(7) infinite');
	});	
}(window, helper));


