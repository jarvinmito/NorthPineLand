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
		nliApp.initLotModal();
		nliApp.initMapModal();
		nliApp.initLoader();
		nliApp.initCalculatorForm();
		nliApp.initDatePicker();
	};

	initModule();

});




Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };