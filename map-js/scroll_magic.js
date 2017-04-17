// scrollmagic 관련 scirpt 파일
// (function(global){
	// 'use strict';
	// variables
	var controller,
			scene;

	controller = new ScrollMagic.Controller();
	// 해당 offset에서 얼만큼의 duration동안 어떻게 보여줄지 결정하는 scene
	scene = new ScrollMagic.Scene({
		triggerElement: '', // starting scene, when reaching this element
		offset:,
		duration: 400 // pin the element for a total of 400px

		// Add Scene to ScrollMagic Controller
		controller.addScene(scene);
	});

// }(window));