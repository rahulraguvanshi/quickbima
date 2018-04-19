
(function($){
	$.fn.extend({
		sliding_menu_js: function(opciones){

			var config = {
				header_title: false,
				header_logo: false,
				toggle_button: true,
				transitionSpeed: 0.5,
				easing: 'ease'
			}
			if (opciones) {
				jQuery.extend(config, opciones);
			};

			$('body').append('<div id="sliding_menu_js_btn"></div>  <div id="sliding_menu_js" class="cerrado"><ul></ul></div>');
			$('body').append('<div id="sliding_menu_js_over"></div>');

			$('#sliding_menu_js ul').append($(this).html());

			if (config.header_logo) {
				$('#sliding_menu_js .header').prepend("<img src='"+config.header_logo+"' />");
			};

			$('#sliding_menu_js').css('transition','left ' + config.transitionSpeed + 's '+ config.easing);


			$('#sliding_menu_js_btn').click(function(){
				toggle();
			});

			$('#sliding_menu_js_over').click(function(){
				ocultar();
			});

			$('#sliding_menu_js ul li a').click(function(){
				ocultar();
			});

			toggle = function(){
				if ( $('#sliding_menu_js').hasClass('open') ) {
					ocultar();
				}else{
					mostrar();
				}
			}

		    mostrar = function(){
		    	if ( $('#sliding_menu_js').hasClass('cerrado') ) {
		    		$('#sliding_menu_js').css('left','0px');
		    		
		    		$('#sliding_menu_js').removeClass('cerrado');
					$('#sliding_menu_js').addClass('open');

					$('#sliding_menu_js_over').show();
		    	};
		    }

		    ocultar = function(){
		    	if ( $('#sliding_menu_js').hasClass('open') ) {

		    		$('#sliding_menu_js').css('left','-300px');
		    		
		    		$('#sliding_menu_js').removeClass('open')
					$('#sliding_menu_js').addClass('cerrado')

					$('#sliding_menu_js_over').hide();
		    	};
		    }
			
		}
	})
})(jQuery)