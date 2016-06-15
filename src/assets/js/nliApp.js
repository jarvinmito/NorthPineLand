var nliApp = (function(){

	var initDataTables = function(special){
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

		if( !special ){
			if( $('.yondu-table').length ){
				$('.yondu-table').each(function(){
					var curr = $(this);
					
					if( curr.data('has-scroll') ){
						options.scrollX = true;
					}

					$(this).dataTable(options);
				});
			}
		}else{
			$(special).dataTable(options);
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

		var renderList = function(data){
			var mhtml = modal.find('.yondu-modal__data');
			var filtercontainer = mhtml.find('.filter');
			var tablecontainer = mhtml.find('.table');
			var container = $('<div class="yondu-container row" />');
			
			var table = $("<table class=\"yondu-table available-lots\" />");

			var columns = data.project.lots.columns;
			var records = data.project.lots.records;
			
			var tablehtml = "<thead>";
			tablehtml += "<tr>";
			for( var column in columns){
				tablehtml += "<th>"+columns[column]+"</th>";
			}
			tablehtml += "<tr>";
			tablehtml += "</tr>";
			tablehtml += "</thead>";
			tablehtml += "<tbody>";
			for( var record in records ){
				tablehtml += "<tr>";
					var rcols = columns;
					var item = records[record];
					for( var rcol in rcols){
						tablehtml += "<td>"+item[rcols[rcol]]+"</td>";
					}
				tablehtml += "</tr>";
			}
			tablehtml += "</tbody>";
			tablehtml += "</table>";


			table.html(tablehtml);
			container.html(table);
			tablecontainer.html(container);

			$('.yondu-table.available-lots').dataTable();
		};



		$(document).on('click', '.yondu-table__buttons [data-is-lot]', function(e){
			e.preventDefault();
			var url = "/available-lots.json";
			$.ajax({
				url : url,
				beforeSend : function(xhr){
					initLoader().show();
				},
				success : function(res){
					// Fill the modal with data
					console.log(res);
					renderList(res);
					initLoader().hide();
					modal.foundation('open');
				}
			})
		});
	};


	var initCalculatorForm = function(){
		var theForm = $('.yondu-calculator__form');

		if( theForm.length ){
			theForm.each(function(){
				var currForm = $(this);
				var downpayment = currForm.find('#nli-downpayment');
				var totalprice = currForm.find('#nli-total-contract-price');
				var promodiscount = currForm.find('#nli-promo-discount');
				var paytermpromo = currForm.find('#nli-payterm-promo');
				var prefferedterm = currForm.find('#nli-preffered-term');
				var bankrate = currForm.find('#nli-bank-rate');

				var calcBalance = function(){
					var toFill = $('#nli-balance');
					var data = parseFloat(downpayment.val());
					var balance = (data <= 100) ? 100 - data : 0;
					toFill.text(balance+"%");
					// add values to hidden input fields also
					toFill.next('input[type="hidden"]').val(balance);
				};

				var calcNetListPrice = function(){
					var netlistprice = $('#nli-net-list-price');
					var netcontractprice = $('#nli-net-contract-price');
					var pd = parseFloat(promodiscount.val()) || 0;
					var tp = parseFloat(totalprice.val()) || 0;
					var computed = tp - pd;
					netlistprice.text(computed.formatMoney(2,'.',','));
					netcontractprice.text(computed.formatMoney(2,'.',','));
					// add values to hidden input fields also
					netlistprice.next('input[type="hidden"]').val(computed);
					netcontractprice.next('input[type="hidden"]').val(computed);
				};

				var calcTotalDiscounts = function(){
					var totaldiscount = $('#nli-total-discount');
					var netdiscount = $('#nli-net-discount');
					var pd = parseFloat(promodiscount.val()) || 0;
					var pt = parseFloat(paytermpromo.val()) || 0;
					var computed = pd + pt;
					totaldiscount.text(computed.formatMoney(2,'.',','));
					netdiscount.text(computed.formatMoney(2,'.',','));
					// add values to hidden input fields also
					totaldiscount.next('input[type="hidden"]').val(computed);
					netdiscount.next('input[type="hidden"]').val(computed);
				};

				var calcNetContractPrice = function(){
					var netprice = $('#nli-net-contract-price');
					var pd = parseFloat(promodiscount.val()) || 0;
					var tp = parseFloat(totalprice.val()) || 0;
					var nlp = parseFloat() || 0;
					// var computed = pd + nlp;
					var computed = parseFloat($('#nli-net-list-price').val()) || 0;

					netprice.text(computed.formatMoney(2,'.',','));
					// add values to hidden input fields also
					netprice.next('input[type="hidden"]').val(computed);
				};

				var calcListPriceAllDiscount = function(){
					var listnetdiscount = $('#nli-list-net-discount');
					var totalsellingprice = $('#nli-total-selling-price');
					var pd = parseFloat(promodiscount.val()) || 0;
					var pt = parseFloat(paytermpromo.val()) || 0;
					var computed = pd + pt;
					var lpad = parseFloat(totalprice.val()) - computed;

					listnetdiscount.text(lpad.formatMoney(2,'.',','));
					totalsellingprice.text(lpad.formatMoney(2,'.',','));

					// add values to hidden input fields also
					listnetdiscount.next('input[type="hidden"]').val(lpad);
					totalsellingprice.next('input[type="hidden"]').val(lpad);
				};

				var pmt = function(rate_per_period, number_of_payments, present_value, future_value, type){
			    if(rate_per_period != 0.0){
			        // Interest rate exists
			        var q = Math.pow(1 + rate_per_period, number_of_payments);
			        return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));

			    } else if(number_of_payments != 0.0){
			        // No interest rate, but number of payments exists
			        return -(future_value + present_value) / number_of_payments;
			    }

			    return 0;
				};

				var calcAmortization = function(){
					var pt = parseFloat(prefferedterm.val()) || 0;
					var pd = parseFloat(promodiscount.val()) || 0;
					var br = parseFloat(bankrate.val()) || 0;
					var total = parseFloat(totalprice.val()) || 0;
					var tsellprice = ( total - ( pd + pt ));
					var ptdp = parseFloat(downpayment.val()) || 0;
					var rbal = tsellprice * ( ptdp / 100 );

					// rbal/((1/br)-(1/(br(1+br)^pt)))
 					// Formula
 					// Converts bank rate percent to decimal e.g. 15% --> 0.15
 					// bank rate is divided by the number of months in a year
 					// payment term -- in years -- is divided by the number of months in a year
					var monthly_amortization = -pmt(((br / 100) / 12),(pt * 12),rbal,0,0);// pt /(( br / 12 ) * (rbal));

					// var obj = {
					// 	payterm : pt,
					// 	promodiscount : pd,
					// 	bankrate : br,
					// 	totalprice : total,
					// 	totalsellingprice : tsellprice,
					// 	ptdownpayment : ptdp,
					// 	requiredbal : rbal,
					// 	monthlyamor : monthly_amortization
					// };

					// console.log( obj );

					var amort = $('#nli-monthly-amortization');
					amort.text(monthly_amortization.formatMoney(2,'.',','));

					// add values to hidden input fields also
					amort.next('input[type="hidden"]').val(monthly_amortization);
				};

				var clearForm = function(){
					currForm.find('input').val('');
					$('.yondu-forms__data#nli-balance').text('100%');
					$('.yondu-forms__data.currency').text(parseInt(0).formatMoney(2,'.',','));
				};

				currForm.on('keyup', 'input', function(e){
					calcBalance();
					calcNetListPrice();
					calcTotalDiscounts();
					calcListPriceAllDiscount();
					calcAmortization();
				});

				currForm.on('change', 'select', function(e){
					calcBalance();
					calcNetListPrice();
					calcTotalDiscounts();
					calcListPriceAllDiscount();
					calcAmortization();
				});

				currForm.on('click', '[data-button-type]' , function(e){
					e.preventDefault();
					var currBtn = $(this);
					var types = {
						"reset" : function(){
							clearForm();
						},
						"action" : function(){
							$('.yondu-calculator__form').submit();
						}
					};

					console.log(types, currBtn, currBtn.data('button-type'));

					types[currBtn.data('button-type')]();
				})

				// downpayment.on('keyup', function(e){
				// 	calcBalance();
				// 	calcBalance();
				// });

				// totalprice.on('keyup', function(e){
				// 	console.log('minasdf!');
				// });

				// promodiscount.on('keyup', function(e){
				// 	console.log('fudge!!');
				// });

				// paytermpromo.on('keyup', function(e){
				// 	console.log('minasdf!');
				// });

				// prefferedterm.on('keyup', function(e){
				// 	console.log('fudge!!');
				// });

				// bankrate.on('keyup', function(e){
				// 	console.log('minasdf!');
				// });

			});
		}
	};

	var initLoader = function(){
		var loader = $('.yondu-loader');

		var show = function(){
			loader.fadeIn(150);
		};

		var hide = function(){
			loader.fadeOut(150);
		};

		return {
			show : show,
			hide : hide
		};
	};


	return {
		offCanvasTransform : offCanvasTransform,
		initFilter : initFilter,
		initDataTables : initDataTables,
		initConfirm : initConfirm,
		initLotModal : initLotModal,
		initMapModal : initMapModal,
		initLoader : initLoader,
		initCalculatorForm : initCalculatorForm
	};

}());