jQuery(document).ready(function($){

	var optionsframework_upload;
	var optionsframework_selector;

	function optionsframework_add_file(event, selector) {

		var upload = $(".uploaded-file"), frame;
		var $el = $(this);
		optionsframework_selector = selector;

		event.preventDefault();

		// If the media frame already exists, reopen it.
		if ( optionsframework_upload ) {
			optionsframework_upload.open();
		} else {
			// Create the media frame.
			optionsframework_upload = wp.media.frames.optionsframework_upload =  wp.media({
				// Set the title of the modal.
				title: $el.data('choose'),

				// Customize the submit button.
				button: {
					// Set the text of the button.
					text: $el.data('update'),
					// Tell the button not to close the modal, since we're
					// going to refresh the page when the image is selected.
					close: false
				},

				multiple: true //allowing for multiple image selection
			});

			// When an image is selected, run a callback.
			optionsframework_upload.on( 'select', function() {
				// Grab the selected attachment.
				var attachments = optionsframework_upload.state().get('selection').map( function( attachment ) {
	        		// optionsframework_upload.close();                    
	                attachment.toJSON();
	                return attachment;
	            });
				optionsframework_upload.close();

				// if ( attachments.attributes.type == 'image' ) {
					console.log(attachments);
					// optionsframework_selector.find('.screenshot').empty().hide().append('<img src="' + attachment.attributes.url + '"><a class="remove-image">Remove</a>').slideDown('fast');

					//loop through the array and do things with each attachment
					var i;
					for (i = 0; i < attachments.length; ++i) {

		                //sample function 1: add image preview
		                // $('.screenshot').empty().hide().after('<img src="' + attachments[i].attributes.url + '"><a class="remove-image">Remove</a>').slideDown('fast');
		                optionsframework_selector.find('.multiple-preview').append('<div class="multiple-each">'+
		                	'<img src="' + attachments[i].attributes.url + '" >'+
		                	'<input id="' + attachments[i].id + '" type="text" name="upload-multiple[]"  value="' + attachments[i].attributes.url + '">'+
		                	'<a class="remove-image">Remove</a></div>' );
		                // optionsframework_selector.find('.upload-multiple-preview').append( '' );
					}
				// }

				optionsframework_selector.find('.upload-button').unbind().addClass('remove-file').removeClass('upload-button').val(optionsframework_l10n.remove);
				optionsframework_selector.find('.of-background-properties').slideDown();
				optionsframework_selector.find('.remove-image, .remove-file').on('click', function() {
					optionsframework_remove_file( $(this).parents('.section') );
				});
			});

		}

		// Finally, open the modal.
		optionsframework_upload.open();
	}

	function optionsframework_remove_file(selector) {
		selector.find('.remove-image').hide();
		selector.find('.upload').val('');
		selector.find('.of-background-properties').hide();
		selector.find('.screenshot').slideUp();
		selector.find('.remove-file').unbind().addClass('multiple-upload').removeClass('remove-file').val(optionsframework_l10n.upload);
		// We don't display the upload button if .upload-notice is present
		// This means the user doesn't have the WordPress 3.5 Media Library Support
		if ( $('.section-upload .upload-notice').length > 0 ) {
			$('.multiple-upload').remove();
		}
		selector.find('.multiple-upload').on('click', function(event) {
			optionsframework_add_file(event, $(this).parents('.section'));
		});
	}

	$('.remove-image, .remove-file').on('click', function() {
		optionsframework_remove_file( $(this).parents('.section') );
    });

    $('.multiple-upload').click( function( event ) {
    	optionsframework_add_file(event, $(this).parents('.section'));
    });

});




/**
 * @Script: WordPress Multiple Image Selection in jQuery
 * @Version: 0.1
 * @Author: CK MacLeod
 * @Author URI: https://ckmacleod.com
 * @License: GPL3
 */

// jQuery(document).ready( function( $ ) {

//     var myplugin_media_upload;

//     $('.upload-button').click(function(e) {

//     	var upload = $(".uploaded-file"), frame;
// 		var $el = $(this);		

//         e.preventDefault();

//         // If the uploader object has already been created, reopen the dialog
//         if( myplugin_media_upload ) {

//             myplugin_media_upload.open();
//             return;

//         }

//         // Extend the wp.media object
//         myplugin_media_upload = wp.media.frames.file_frame = wp.media({

//             //button_text set by wp_localize_script()
//             // Set the title of the modal.
// 			title: $el.data('choose'),

// 			// Customize the submit button.
// 			button: {
// 				// Set the text of the button.
// 				text: $el.data('update'),
// 				// Tell the button not to close the modal, since we're
// 				// going to refresh the page when the image is selected.
// 				close: false
// 			},
//             // title: button_text.title,
//             // button: { text: button_text.button },
//             multiple: true //allowing for multiple image selection

//         });

//         /**
//          *THE KEY BUSINESS
//          *When multiple images are selected, get the multiple attachment objects
//          *and convert them into a usable array of attachments
//          */
//         myplugin_media_upload.on( 'select', function(){

//         	// Grab the selected attachment.
// 			// var attachment = optionsframework_upload.state().get('selection').first();
// 			// optionsframework_upload.close();
// 			// optionsframework_selector.find('.upload').val(attachment.attributes.url);
// 			// if ( attachment.attributes.type == 'image' ) {
// 			// 	optionsframework_selector.find('.screenshot').empty().hide().append('<img src="' + attachment.attributes.url + '"><a class="remove-image">Remove</a>').slideDown('fast');
// 			// }
// 			// optionsframework_selector.find('.upload-button').unbind().addClass('remove-file').removeClass('upload-button').val(optionsframework_l10n.remove);
// 			// optionsframework_selector.find('.of-background-properties').slideDown();
// 			// optionsframework_selector.find('.remove-image, .remove-file').on('click', function() {
// 			// 	optionsframework_remove_file( $(this).parents('.section') );
// 			// });

//             var attachments = myplugin_media_upload.state().get('selection').map(  function( attachment ) {

//             		myplugin_media_upload.close();
                    
//                     attachment.toJSON();
//                     return attachment;

//             });

//             //loop through the array and do things with each attachment

//             var i;

//             for (i = 0; i < attachments.length; ++i) {

//                 //sample function 1: add image preview
//                 $('.screenshot').after(
//                     '<div class="myplugin-image-preview"><img src="' + 
//                     attachments[i].attributes.url + '" ></div>'
//                     );

//                 //sample function 2: add hidden input for each image
//                 $('.screenshot').after( '<input id="myplugin-image-input' + attachments[i].id + '" type="hidden" name="myplugin_attachment_id_array[]"  value="' + attachments[i].id + '">' );

// 			}

//         });

//     	myplugin_media_upload.open();

//     });

// });