// 图片预加载
(function($){ 
	// imgs must be a string value or an array consists of strings
	function Preload(imgs, options){
		this.imgs = typeof imgs === 'string' ? [ imgs ] : imgs;
		this.opts = $.extend ({ }, Preload.DEFAULTS, options);
		this._unordered();
	}

	Preload.DEFAULTS = {
		each : null,  // execute after each img loaded
		 all : null	// execute after each img loaded
	};

	Preload.prototype._unordered = function () {
		var imgs = this.imgs;
		var opts = this.opts;
		var len = imgs.length;
		var count = 0;
		$.each(imgs, function(i, src){
			if (typeof src != 'string') return;  
			var oImg = new Image();
			$(oImg).on('load error', function(){
				count++;
				opts.each && opts.each(count);
				if(count >= len){
					opts.all && opts.all();
				}
			});
			oImg.src = src;
		});
	};

	$.extend({
		preload: function(imgs, opts){
			return new Preload(imgs, opts);
		}
	});
})(jQuery);