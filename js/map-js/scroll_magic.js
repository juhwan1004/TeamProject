// scrollmagic 관련 scirpt 파일
(function(){
	'use strict';
	// variables
	var controller,
			photos,
			photo,
			class_name,
			data_index,
			info,
			prev_info,
			scene,
			counter;
	// get reference
	controller = new ScrollMagic.Controller();
	photos  = document.querySelectorAll('[class^="photo-"]'); 
	counter = document.querySelector('.statistics-photos-value');
	counter.textContent = photos.length;

	for ( var i=0; i<photos.length; i++ ) {
		photo = photos[i];

		scene = new ScrollMagic.Scene({
			'triggerElement': photo,
			'triggerHook': 0.6,
			'duration': 420
		})
			.on('start', function() {
				// panTo()
				class_name = document.querySelector('.card').classList.value;
				data_index = class_name.replace(/[a-z,-]/gi,"");

				map.panTo({'lat': spots[parseInt(data_index,10)-1].lat, 'lng': spots[parseInt(data_index,10)-1].lng});
				map.setZoom(15);
				// Info Window
				info = new google.maps.InfoWindow({
				  content: spots[parseInt(data_index,10)-1].title
				});
				// Remove prev info window
				if ( prev_info ) {
					prev_info.close();
				}
				prev_info = info;
    		info.open(map, markers[parseInt(data_index,10)-1]);
			})
			.addTo(controller)
			// .addIndicators({
			// 	'name': 'PanTo',
			// 	'indent': 700,
			// 	'colorTrigger': '#fe4940',
			// 	'colorStart': '#34c0ff',
			// 	'colorEnd': '#7eff28'
			// })
			.setClassToggle(photo, 'card');
	}
}());