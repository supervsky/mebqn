(function(){
	// aImgs存放images的src属性值
	var aImgs = [];
	for(var i = 0; i < 27; i++){
		aImgs[i] = "images/pic (" + (i+1) + ").jpg";
		 // console.log(aImgs[i]);
	}
	
	// index [0, len-1]
	var index = 0, len = aImgs.length;

	// 点击切换按钮
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

	//预加载
	var count = 0;
	$.each(aImgs, function(i, src){
		var oImg = new Image();
		$(oImg).on('load', function(){
			count++;
			$('.progress').html(Math.round(count / len * 100) + '%');
			if(count >= len){
				$('.loading').hide();
				document.title = '1/'+len;
			}
		});
		oImg.src = src;
	});

})();