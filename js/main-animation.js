// index.html animation scripts

// variables
var contents,
		header; 
// get ref.
contents = document.querySelectorAll('.contents-wrap');
header = document.querySelector('.header');

//album animation
contents.forEach(function(content, index){
	content.addEventListener('mouseover', function() {
		var image = this.parentNode.children[1].firstElementChild;
		this.setAttribute('style','top: -30px; transition: all 0.3s ease-in-out;');
		image.setAttribute('style','transform: scale(1.15); transition: all 0.5s ease-in-out;');
	});

	content.addEventListener('mouseout', function() {
		var image = this.parentNode.children[1].firstElementChild;
		this.setAttribute('style','top: 0px; transition: all 0.3s ease-in-out;');
		image.setAttribute('style','transform: scale(1); transition: all 0.5s ease-in-out;');
	});
});

// ScrollMagic : body
(function(global){
	'use strict';
	// variables
	var ctrl, 
			scene_list,
			scene;

	ctrl = new ScrollMagic.Controller();
	scene_list = '.intro, #albums'.split(', ');

	scene_list.forEach(function(trigger_el_selector, idx) {
			scene = new ScrollMagic.Scene({
			'triggerElement': trigger_el_selector,
			'triggerHook': 0,
			'offset': -700,
		})
		.setClassToggle(trigger_el_selector, 'fade-in')
		.addTo(ctrl);
	});
})(ScrollMagic);

// Scroll event : header
$(function(){
	// variables
	var lastScroll,
			scrollTop;
  //Keep track of last scroll
  lastScroll = 0;
  $(window).scroll(function(event){
      //Sets the current scroll position
      scrollTop = $(this).scrollTop();
      //Determines up-or-down scrolling
      if (scrollTop > lastScroll){
        $('.header').css("transform","translateY(-60px)");
      }
      else {
         //Replace this with your function call for upward-scrolling
        $('.header').css("transform","translateY(0px)");
      }
      //Updates scroll position
      lastScroll = scrollTop;
  });
});
