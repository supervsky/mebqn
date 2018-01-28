(function(){
	//  variables declaration
	var aImgs,	// objects array of images
		imgs,	// strings array of images 
		len;		// length of the images array

	// variables initialization
	aImgs = document.getElementsByTagName('img');
	imgs = [ ];
	len = aImgs.length;
	for(var i = 0; i < len; i++) {
		imgs.push(aImgs[i].src)
	}



	// execute
	$.preload(imgs, {
		each : function (count) {
			var percentage = Math.round(count / len * 100) + '%';
			console.log(percentage);
			$('.progress-bar').html( percentage );
			$('.progress-bar').attr('style', function(){
				return 'width:' + percentage;
			});
		},
		all :  function () {
			setTimeout(function(){
				$('.box').hide();
			}, 500);
		}
	});
})();