/**
 * Custom scripts needed for the colorpicker, image button selectors,
 * and navigation tabs.
 */

jQuery(document).ready(function($) {

	// Loads the color pickers
	$('.of-color').wpColorPicker();

	// Image Options
	$('.of-radio-img-img').click(function(){
		$(this).parent().parent().find('.of-radio-img-img').removeClass('of-radio-img-selected');
		$(this).addClass('of-radio-img-selected');
	});

	$('.of-radio-img-label').hide();
	$('.of-radio-img-img').show();
	$('.of-radio-img-radio').hide();

	// Loads tabbed sections if they exist
	if ( $('.nav-tab-wrapper').length > 0 ) {
		options_framework_tabs();
	}

	function options_framework_tabs() {

		var $group = $('.group'),
			$navtabs = $('.nav-tab-wrapper a'),
			active_tab = '';

		// Hides all the .group sections to start
		$group.hide();

		// Find if a selected tab is saved in localStorage
		if ( typeof(localStorage) != 'undefined' ) {
			active_tab = localStorage.getItem('active_tab');
		}

		// If active tab is saved and exists, load it's .group
		if ( active_tab != '' && $(active_tab).length ) {
			$(active_tab).fadeIn();
			$(active_tab + '-tab').addClass('nav-tab-active');
		} else {
			$('.group:first').fadeIn();
			$('.nav-tab-wrapper a:first').addClass('nav-tab-active');
		}

		// Bind tabs clicks
		$navtabs.click(function(e) {

			e.preventDefault();

			// Remove active class from all tabs
			$navtabs.removeClass('nav-tab-active');

			$(this).addClass('nav-tab-active').blur();

			if (typeof(localStorage) != 'undefined' ) {
				localStorage.setItem('active_tab', $(this).attr('href') );
			}

			var selected = $(this).attr('href');

			$group.hide();
			$(selected).fadeIn();

		});
	}


	// repeat field
	jQuery(function($){
        $(".docopy").on("click", function(e){

            // the loop object
            $loop = $(this).parent();

            // the group to copy
            $group = $loop.find('.to-copy').clone().insertBefore($(this)).removeClass('to-copy');

            // the new input
            $input = $group.find('input');            
            count = $loop.children('.of-repeat-group').not('.to-copy').length;

        	input_name = $input.attr('data-rel');
        	$input.attr('name', input_name + '[' + ( count - 1 ) + ']');

        });

        $(".controls").on("click", ".dodelete", function(e){
            $(this).parent('.of-repeat-group').remove();
        });
    });

    // repeat gallery
	jQuery(function($){
        $(".gallery-add").on("click", function(e){

            // the loop object
            $loop = $(this).parent();

            // the group to copy
            $group = $loop.find('.to-copy').clone().insertBefore($(this)).removeClass('to-copy');

            // the new input
            $input = $group.find('.fieldinput');
            $textarea = $group.find('.fieldtextarea');
            $input2 = $group.find('.fieldinput2');

            count = $loop.children('.gallery-each').not('.to-copy').length;

        	input_name = $input.attr('data-rel');
        	textarea_name = $textarea.attr('data-rel');
        	input2_name = $input2.attr('data-rel');

        	$input.attr('name', input_name + '[' + ( count - 1 ) + ']');
        	$textarea.attr('name', textarea_name + '[' + ( count - 1 ) + ']');
        	$input2.attr('name', input2_name + '[' + ( count - 1 ) + ']');

        });

        $(".controls").on("click", ".gallery-remove", function(e){

            var toCopy = $(this).parents().find('.to-copy');
        	var input_name = toCopy.find('.fieldinput').attr('data-rel');
        	var textarea_name = toCopy.find('.fieldtextarea').attr('data-rel');
        	var input2_name = toCopy.find('.fieldinput2').attr('data-rel');

            var notCopy = $(this).parents().find('.gallery-each').not('.to-copy');            

            var eachwrapper = $(this).parents();
            var toeach = $(this).parent().attr('class');

        	var count = $(this).parents().find('.gallery-each').not('.to-copy, .is-delete').length-1;
        	$(this).parent().addClass('is-delete').find('.fieldinput').attr('name', input_name + '[' +count+ ']');

        	var i=0;
            $(this).parents().find('.gallery-each').not('.to-copy, .is-delete').each(function(){
            		$(this).find('.fieldinput').attr('name', input_name + '[' + i + ']');
            		$(this).find('.fieldtextarea').attr('name', textarea_name + '[' + i + ']');
            		$(this).find('.fieldinput2').attr('name', input2_name + '[' + i + ']');
            		// console.log(this);
            		// console.log(i);
            	i++
            });			

           	if( count > 2 ){
           	 	$(this).parent('.gallery-each').remove();
        		$('.gallery-remove').remove();
           	}else{
           		$(this).parent('.gallery-each').remove();
           	}

        });
    });


});