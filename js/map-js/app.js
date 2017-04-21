// Shared Data
var shared_data = {
	// js 파일에서 공유할 json 데이터
	'pins': [
		{ 'id': 1,  'title': 'Fast Campus',       'lat': 37.515916,  'lng': 127.021407  , 'src': '../images/photos/countryside.jpg' },
		{ 'id': 2,  'title': 'Home',              'lat': 37.515594,  'lng': 127.020237  , 'src': '../images/photos/japanese-cherry-trees.jpg' },
		{ 'id': 3,  'title': 'Mcdonald',          'lat': 37.518260,  'lng': 127.021764  , 'src': '../images/photos/house.jpg' },
		{ 'id': 4,  'title': 'Fast Campus2',      'lat': 37.516500,  'lng': 127.017854  , 'src': '../images/photos/blue-pillow.jpg' },
		{ 'id': 5,  'title': 'Hakdong Park',      'lat': 37.515517,  'lng': 127.025333  , 'src': '../images/photos/bulldozer.jpg' },
		{ 'id': 6,  'title': 'Subway Station',    'lat': 37.511252,  'lng': 127.021722  , 'src': '../images/photos/kaiser-wilhelm.jpg' },
		{ 'id': 7,  'title': 'Lotte World Tower', 'lat': 37.5126191, 'lng': 127.1026677 , 'src': '../images/photos/mountain.jpg' },
		{ 'id': 8,  'title': 'Lotte World',       'lat': 37.5111158, 'lng': 127.098167  , 'src': '../images/photos/sunset.jpg' },
		{ 'id': 9,  'title': '석촌호수',          'lat': 37.5079608, 'lng': 127.1006814 , 'src': '../images/photos/italy.jpg' },
		{ 'id': 10, 'title': '평화의 공원',       'lat': 37.5623116, 'lng': 126.8951046 , 'src': '../images/photos/burj-khalifa.jpg' },
		{ 'id': 11, 'title': '서울월드컵경기장',  'lat': 37.5682588, 'lng': 126.8972774 , 'src': '../images/photos/san-francisco.jpg' },
		{ 'id': 12, 'title': '월드컵공원',        'lat': 37.5652,    'lng': 126.8851286 , 'src': '../images/photos/man.jpg' },
		{ 'id': 13, 'title': '노을공원',          'lat': 37.5735877, 'lng': 126.8752571 , 'src': '../images/photos/tianjin.jpg' }
	]
};

for ( var i=0; i<shared_data.pins.length; i++) {
	helper.createInDiary(i);
}