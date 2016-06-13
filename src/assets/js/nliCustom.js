$(document).ready(function(){

	// var nliApp = nliApp();

	// NAVIGATION for MOBILE
	// listener for off canvas toggle from foundation 6
	$('.nli-wrapper').on('opened.zf.offcanvas', function(){
		var _this = $(this);
		var _sub = _this.find('.nli-wrapper__sub');
		var params = {
			elem : _this,
			sub : _sub,
			mode : 'open'
		};

		nliApp.offCanvasTransform(params);
		
	});

	$('.nli-wrapper').on('closed.zf.offcanvas', function(){
		var _this = $(this);
		var _sub = _this.find('.nli-wrapper__sub');
		var params = {
			elem : _this,
			sub : _sub,
			mode : 'close'
		};

		nliApp.offCanvasTransform(params);
	});

	var initModule = function(){
		nliApp.initFilter();
		nliApp.initDataTables();
		nliApp.initConfirm();
	};

	initModule();

});