var nliApp = (function(){

	var initDataTables = function(){
		if( $('.yondu-table').length ){
			$('.yondu-table').each(function(){
				var curr = $(this);
				var options = {
					"oLanguage" : {
						"oPaginate" : {
							"sNext" : "&gt;",
							"sLast" : "&gt;&gt;",
							"sFirst" : "&lt;&lt;",
							"sPrevious" : "&lt;"
						},
						"paging" : false
					}
				};
				
				if( curr.data('has-scroll') ){
					options.scrollX = true;
				}

				$(this).dataTable(options);
			});
		}
	};


	var initFilter = function(){
		var filter = $('.yondu-filter');
		if( filter.length ){
			filter.each(function(){
				var sfilter = $(this);
				var cat = sfilter.find('.yondu-filter__category');
				var entries = sfilter.find('.yondu-filter__entries');
				var search = sfilter.find('.yondu-filter__btn--search');
				var showbtn = sfilter.find('.yondu-filter__btn--show');
				var hidebtn = sfilter.find('.yondu-filter__btn--hide');
				// var clear = sfilter.find('.yondu-filter__btn--clear');

				sfilter.find('.yondu-filter__type:not([data-filter-type="none"])').hide();

				var clearform = function(){
					var all = sfilter.find('select, input').not('.yondu-filter__category, .yondu-filter__entries');
					all.val('');
					all.removeClass('has-error');
				};

				cat.on('change', function(e){
					var selected = $(this).val();
					// Reset all values
					clearform();
					sfilter.find('.yondu-filter__type').not('.yondu-filter__type[data-filter-type="'+selected+'"]').hide();
					sfilter.find('.yondu-filter__type[data-filter-type="'+selected+'"]').show();
					// console.log(sfilter.find('.yondu-filter__type[data-filter-type="'+selected+'"]'));
				});

				entries.on('change', function(e){
					var selected = $(this).val();

					if( $(this).data('target') ){
						var target = $(this).data('target');
						var actual_target = $(target).parents('.dataTables_wrapper').find('.dataTables_length select');

						actual_target.val(selected);
						actual_target.trigger('change');
					}



				});

				search.on('click', function(e){
					e.preventDefault();

					var curr = $(this);
					var currParent = curr.parents('.yondu-filter');
					var cat = currParent.find('.yondu-filter__category');
					var visible = currParent.find('select:visible, input:visible').not('.yondu-filter__category, .yondu-filter__entries');

					if( currParent.length ){
						
						if( cat.val().toLowerCase() == "none" ){
							cat.addClass('has-error');
						}else{
							cat.removeClass('has-error');
						}


						// currParent.find('select, input').not('.yondu-filter__category, .yondu-filter__entries')
					}

					total_checked = 0;
					if( visible.length ){

						visible.each(function(index){
							if( $(this).val() == "" ){
								$(this).addClass('has-error');
							}else{
								total_checked++;
								$(this).removeClass('has-error');
							}
						});
					}

					var currCallback = curr.data('callback');
					if( currCallback ){
						// convert string to function;
						var callback = window[currCallback];

						if( total_checked == visible.length && total_checked != 0 ){
							if( typeof callback == 'function'){
								callback();
							}
						}
					}

				});
				
				var toggleVisibility = function( mode ){
					var sfCenter = sfilter.find('.yondu-filter--center');
					var sfRight = sfilter.find('.yondu-filter--right');

					var showElement = function(){
						sfCenter.show();
						sfRight.show();
					};

					var hideElement = function(){
						sfCenter.hide();
						sfRight.hide();
					};

					var funcs = {
						show : showElement,
						hide : hideElement
					};

					// Execute given mode
					funcs[mode]();
				};

				showbtn.on('click', function(e){
					e.preventDefault();

					// Hide the elements
					toggleVisibility('hide');
				});

				hidebtn.on('click', function(e){
					e.preventDefault();
					// Hide the elements
					toggleVisibility('show');
				});
				// clear.on('click', function(e){
				// 	clearform();
				// });

			});
		}
	};

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


	var initConfirm = function(){
		var elements = $('[data-confirm]');
		var modal = $('#confirmModal');

		$(document).on('click', '[data-confirm]', function(e){
			e.preventDefault();
			modal.foundation('open');
		});

		modal.on('closeme.zf.reveal', function(){
			console.log('open sesame');
		});
	};

	var initMapModal = function(){
		var modal = $('#mapModal');
		$(document).on('click', '[data-is-map]', function(e){
			e.preventDefault();

			var url = $(this).data('url');
			console.log(url);
			modal.find('img.yondu-modal__image').attr('src', url);
			modal.foundation('open');
		});
	};

	var initLotModal = function(){
		var modal = $('#lotsModal');
		$(document).on('click', '[data-is-lot]', function(e){
			e.preventDefault();
			modal.foundation('open');
		});
	};


	return {
		offCanvasTransform : offCanvasTransform,
		initFilter : initFilter,
		initDataTables : initDataTables,
		initConfirm : initConfirm,
		initLotModal : initLotModal,
		initMapModal : initMapModal
	};

}());