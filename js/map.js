// Variables
var map, markers, image, spots;

markers = [];
image = {
	url: 'images/marker-icon.png'
};
spots =[
	{'day': 1, 'title': 'Fast Campus', 'lat': 37.515916, 'lng': 127.021407},
	{'day': 2, 'title': 'Home', 'lat': 37.515594, 'lng': 127.020237},
	{'day': 3, 'title': 'Mcdonald', 'lat': 37.518260, 'lng': 127.021764},
	{'day': 4, 'title': 'Fast Campus2', 'lat': 37.516500, 'lng': 127.017854},
	{'day': 5, 'title': 'Hakdong Park', 'lat': 37.515517, 'lng': 127.025333},
	{'day': 6, 'title': 'Subway Station', 'lat': 37.511252, 'lng': 127.021722}
];

// Map initialize
function initMap() {	
	// Map Settings	
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 37.515594, lng: 127.020237},
		mapTypeId: 'roadmap',
		scrollwheel: false,
		zoom: 15,
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
	var spotPath = new google.maps.Polyline({
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
	window.setTimeout(function () {
		// var spot = spots;
		markers.push(new google.maps.Marker({
			position: {lat: spot.lat, lng: spot.lng},
			map: map,
			icon: {
				url: image.url,
				labelOrigin: new google.maps.Point(30,5)
			},
			label: {
				text: spot.day.toString(),
				fontWeight: 'bold'
			},	
			title: spot.title
		}));
	});
}




