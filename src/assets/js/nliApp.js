var nliApp = (function(){

	var offCanvasTransform = function(params){
		var _this = params.elem;
		var _sub = params.sub;
		var _wwidth = $(window).width();
		var _micon = $('[data-hamburger]').outerWidth();
		var _xpos = _wwidth - _micon;
		var _button = _this.find('.nli-hamburger-menu__button');

		var mode = params.mode || 'close';

		var css = {
			'-ms-transform' : 'none',
			'-webkit-transform' : 'none',
			'transform' : 'none'
		};

		if( mode !== 'close'){
			css = {
				'-ms-transform' : 'translateX(-'+_xpos+'px)',
				'-webkit-transform' : 'translateX(-'+_xpos+'px)',
				'transform' : 'translateX(-'+_xpos+'px)'
			};
		}

		_sub.css(css);
		_button.toggleClass('open');

	};

	return {
		offCanvasTransform : offCanvasTransform
	};

}());