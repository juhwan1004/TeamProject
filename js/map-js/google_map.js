// google map script
	'use strict';
	// Variables
	var document,
			map, 
			markers, 
			image,
			spots,
			spotPath,
			shared_data;
	
	// -------------------------------------- Google Map
	markers = [];
	image = {
		url: '../images/marker-icon.png'
	};
	spots = shared_data.pins;
	// Map initialize
	function initMap() {	
		// Map Settings	
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 37.515594, lng: 127.020237},
			mapTypeId: 'roadmap',
			scrollwheel: false,
			zoom: 12,
			// Map Control Settings
			mapTypeControl: false,
			streetViewControl: false,
			zoomControl: true,
			zoomControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position: google.maps.ControlPosition.TOP_LEFT,
			},
		});	
		// Polylines
		spotPath = new google.maps.Polyline({
			map: map,
			path: spots,
			geodesic: true,
			strokeColor: '#e91e63',
			strokeWeight: 3
		});
		createMarker();
	}
	// Create Markers
	function createMarker() {
		for (var i = 0; i < spots.length; i++) {
			setMarkers(spots[i]);
		}
	}
	// Set Markers
	function setMarkers(spot) {
		// var spot = spots;
		markers.push(new google.maps.Marker({
			position: {lat: spot.lat, lng: spot.lng},
			map: map,
			icon: {
				url: image.url,
				labelOrigin: new google.maps.Point(30,5)
			},
			label: {
				text: spot.id.toString(),
				fontWeight: 'bold'
			},	
			title: spot.title,
		}));
	}
	// -------------------------------------- //Google Map

