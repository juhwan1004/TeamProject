
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
