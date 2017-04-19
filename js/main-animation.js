
//album animation
	var contents = document.querySelectorAll('.contents-wrap');

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

	// for( var i in contents) {
	// 	contents[i].addEventListener('mouseover', function() {
	// 		var image = this.parentNode.children[1].firstElementChild;
	// 		this.setAttribute('style','top: -30px; transition: all 0.3s ease-in-out;');
	// 		image.setAttribute('style','transform: scale(1.15); transition: all 0.5s ease-in-out;');
	// 	});
	// 	contents[i].addEventListener('mouseout', function() {
	// 		var image = this.parentNode.children[1].firstElementChild;
	// 		this.setAttribute('style','top: 0px; transition: all 0.3s ease-in-out;');
	// 		image.setAttribute('style','transform: scale(1); transition: all 0.5s ease-in-out;');
	// 	});
	// }

var header = document.querySelector('.header');


// ScrollMagic : body

(function(global){
	'use strict';

	var ctrl = new ScrollMagic.Controller();

	// 핀제어
	// var carousel_pin = new ScrollMagic.Scene({
	// 	'triggerElement': '.video',
	// 	'triggerHook': 0,
	// });

	// var header_trans = new ScrollMagic.Scene({
	// 	'triggerElement': '.video',
	// 	'triggerHook': 0,
	// 	'offset': 10,
	// })
	// 	.setClassToggle('.header', 'trans')
	// 	.addIndicators()
	// 	.addTo(ctrl);

	var scene_list = '.intro, #albums'.split(', ');

	scene_list.forEach(function(trigger_el_selector, idx) {
		var scene = new ScrollMagic.Scene({
			'triggerElement': trigger_el_selector,
			'triggerHook': 0,
			'offset': -700,
		})
		.setClassToggle(trigger_el_selector, 'fade-in')
		.addIndicators()
		.addTo(ctrl);
	});

})(ScrollMagic);


// Scroll event : header

$(function(){
  //Keep track of last scroll
  var lastScroll = 0;
  $(window).scroll(function(event){
      //Sets the current scroll position
      var scrollTop = $(this).scrollTop();
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
