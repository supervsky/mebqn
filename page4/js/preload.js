(function(){
	
	//  variables declaration
	var aImgs,	// images array
		index,	// index of the current image
		len;		// length of the images array

	// variables initialization
	aImgs = [ ];
	for(var i = 0; i < 10; i++){ //init aImgs
		aImgs[i] = "images/pic (" + (i+1) + ").jpg";
	}
	index = 0, 
	len = aImgs.length;

	// execute
	$.preload(aImgs, {
		each : function (count) {
			$('.progress').html(Math.round(count / len * 100) + '%');
		},
		all :  function () {
			$('.loading').hide();
			document.title = '相册 1/'+len;
		}
	});
	// 点击切换按钮
	$('.btn').on('click', function(){
		if($(this).data('control') === 'prev'){
			index = index <= 0 ? index : index-1;
		} else {
			index = index < len-1 ? index+1 : index;
		}
		document.title = '相册' + (index + 1) + '/' + len;
		$('.gallery-box img').attr('src', aImgs[index]);
	});

})();