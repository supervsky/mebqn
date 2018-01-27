(function(){
	// aImgs存放images的src属性值
	var aImgs = [];
	for(var i = 0; i < 27; i++){
		aImgs[i] = "images/pic (" + (i+1) + ").jpg";
		 // console.log(aImgs[i]);
	}
	
	// index [0, len-1]
	var index = 0, len = aImgs.length;
	$('.btn').on('click', function(){
		if($(this).data('control') === 'prev'){
			// alert('上一张');
			index = index <= 0 ? index : index-1;
		} else {
			// alert('下一张');
			index = index < len-1 ? index+1 : index;
		}
		// console.info(index);
		document.title = '相册' + (index + 1) + '/' + len;
		$('.gallery-box img').attr('src', aImgs[index]);
	});
})();