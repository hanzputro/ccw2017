<?php
/**
 * A unique identifier is defined to store the options in the database and reference them from the theme.
 */
function optionsframework_option_name() {
	// Change this to use your theme slug
	return 'options-framework-theme';
}

/**
 * Defines an array of options that will be used to generate the settings page and be saved in the database.
 * When creating the 'id' fields, make sure to use all lowercase and no spaces.
 *
 * If you are making your theme translatable, you should replace 'theme-textdomain'
 * with the actual text domain for your theme.  Read more:
 * http://codex.wordpress.org/Function_Reference/load_theme_textdomain
 */

function optionsframework_options() {

	// Test data
	$test_array = array(
		'one' => __( 'One', 'theme-textdomain' ),
		'two' => __( 'Two', 'theme-textdomain' ),
		'three' => __( 'Three', 'theme-textdomain' ),
		'four' => __( 'Four', 'theme-textdomain' ),
		'five' => __( 'Five', 'theme-textdomain' )
	);

	// Multicheck Array
	$multicheck_array = array(
		'one' => __( 'French Toast', 'theme-textdomain' ),
		'two' => __( 'Pancake', 'theme-textdomain' ),
		'three' => __( 'Omelette', 'theme-textdomain' ),
		'four' => __( 'Crepe', 'theme-textdomain' ),
		'five' => __( 'Waffle', 'theme-textdomain' )
	);

	// Multicheck Defaults
	$multicheck_defaults = array(
		'one' => '1',
		'five' => '1'
	);

	// Background Defaults
	$background_defaults = array(
		'color' => '',
		'image' => '',
		'repeat' => 'repeat',
		'position' => 'top center',
		'attachment'=>'scroll' );

	// Typography Defaults
	$typography_defaults = array(
		'size' => '15px',
		'face' => 'georgia',
		'style' => 'bold',
		'color' => '#bada55' );

	// Typography Options
	$typography_options = array(
		'sizes' => array( '6','12','14','16','20' ),
		'faces' => array( 'Helvetica Neue' => 'Helvetica Neue','Arial' => 'Arial' ),
		'styles' => array( 'normal' => 'Normal','bold' => 'Bold' ),
		'color' => false
	);

	// Pull all the categories into an array
	$options_categories = array();
	$options_categories_obj = get_categories();
	foreach ($options_categories_obj as $category) {
		$options_categories[$category->cat_ID] = $category->cat_name;
	}

	// Pull all tags into an array
	$options_tags = array();
	$options_tags_obj = get_tags();
	foreach ( $options_tags_obj as $tag ) {
		$options_tags[$tag->term_id] = $tag->name;
	}


	// Pull all the pages into an array
	$options_pages = array();
	$options_pages_obj = get_pages( 'sort_column=post_parent,menu_order' );
	$options_pages[''] = 'Select a page:';
	foreach ($options_pages_obj as $page) {
		$options_pages[$page->ID] = $page->post_title;
	}

	// If using image radio buttons, define a directory path
	$imagepath =  get_template_directory_uri() . '/dist/images';

	$options = array();


	/* ######################## */
	/* ####### HOME tab ####### */
	/* ######################## */

	// section 1	

	$options[] = array(
		'name' => __( 'Home', 'theme-textdomain' ),
		'type' => 'heading'
	);

	$options[] = array(
		'name' => __( 'SECTION 1', 'theme-textdomain' ),
		'type' => 'info'
	);

	$options[] = array(
		'name' => __( 'Logo', 'theme-textdomain' ),
		'std' => $imagepath . '/logo-ccw-black.png',
		'id' => 'logo',
		'type' => 'upload'
	);

	$options[] = array(
		'name' => __( 'Background', 'theme-textdomain' ),
		'std' => $imagepath . '/home/bg-section1.jpg',
		'id' => 'bg-section1',
		'type' => 'upload'
	);

	// section 2
	$options[] = array(
		'name' => __( 'SECTION 2', 'theme-textdomain' ),
		'type' => 'info'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id' => 'title-section2',
		'std' => 'Come As You Are',
		'type' => 'text'
	);

	$wp_editor_descsec2_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 3,
		'tinymce' => array( 'plugins' => 'wordpress,wplink' )
	);
	$options[] = array(
		'name' => __( 'Description', 'theme-textdomain' ),
		'id' => 'desc-section2',
		'type' => 'editor',
		'std' => 'Pastor Walter is our lead pastor. Creative City Worship lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
		'settings' => $wp_editor_descsec2_settings
	);

	// section 3
	$options[] = array(
		'name' => __( 'SECTION 3', 'theme-textdomain' ),
		'type' => 'info'
	);

	$wp_editor_descsec3_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 3,
		'tinymce' => array( 'plugins' => 'wordpress,wplink' )
	);
	$options[] = array(
		'name' => __( 'News 1', 'theme-textdomain' ),
		'id' => 'desc-section3-news1',
		'type' => 'editor',
		'std' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		'settings' => $wp_editor_descsec3_settings
	);

	$options[] = array(
		'name' => __( 'Background News 1', 'theme-textdomain' ),
		'std' => $imagepath . '/home/bg-section3.jpg',
		'id' => 'bg-section3-news1',
		'type' => 'upload'
	);

	$wp_editor_descsec3_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 3,
		'tinymce' => array( 'plugins' => 'wordpress,wplink' )
	);
	$options[] = array(
		'name' => __( 'News 2', 'theme-textdomain' ),
		'id' => 'desc-section3-news2',
		'type' => 'editor',
		'std' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		'settings' => $wp_editor_descsec3_settings
	);

	$options[] = array(
		'name' => __( 'Background News 2', 'theme-textdomain' ),
		'std' => $imagepath . '/home/bg-section3.jpg',
		'id' => 'bg-section3-news2',
		'type' => 'upload'
	);

	$wp_editor_descsec3_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 3,
		'tinymce' => array( 'plugins' => 'wordpress,wplink' )
	);
	$options[] = array(
		'name' => __( 'News 3', 'theme-textdomain' ),
		'id' => 'desc-section3-news3',
		'type' => 'editor',
		'std' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		'settings' => $wp_editor_descsec3_settings
	);

	$options[] = array(
		'name' => __( 'Background News 3', 'theme-textdomain' ),
		'std' => $imagepath . '/home/bg-section3.jpg',
		'id' => 'bg-section3-news3',
		'type' => 'upload'
	);

	// section 4
	$options[] = array(
		'name' => __( 'SECTION 4', 'theme-textdomain' ),
		'type' => 'info'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id' => 'title-section4',
		'std' => 'Upcoming Events',
		'type' => 'text'
	);

	$wp_editor_descsec4_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 3,
		'tinymce' => array( 'plugins' => 'wordpress,wplink' )
	);
	$options[] = array(
		'name' => __( 'Description', 'theme-textdomain' ),
		'id' => 'desc-section4',
		'type' => 'editor',
		'std' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		'settings' => $wp_editor_descsec4_settings
	);

	// section 5
	$options[] = array(
		'name' => __( 'SECTION 5', 'theme-textdomain' ),
		'type' => 'info'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id' => 'title-section5',
		'std' => 'Upcoming Events',
		'type' => 'text'
	);

	$wp_editor_descsec5_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 7,
		'tinymce' => array( 'plugins' => 'wordpress,wplink' )
	);
	$options[] = array(
		'name' => __( 'Description', 'theme-textdomain' ),
		'id' => 'desc-section5',
		'type' => 'editor',
		'std' => 'ARTOTEL - Thamrin
JL. Sunda No.3,
Jakarta Pusat

creativecityworship@gmail.com
@creativecityworship")',
		'settings' => $wp_editor_descsec5_settings
	);


	/* ########################### */
	/* ####### SERVICE tab ####### */
	/* ########################### */
	$options[] = array(
		'name' => __( 'Service', 'theme-textdomain' ),
		'type' => 'heading'
	);

	$options[] = array(
		'name' => __( 'Check to Show a Hidden Text Input', 'theme-textdomain' ),
		'desc' => __( 'Click here and see what happens.', 'theme-textdomain' ),
		'id' => 'example_showhidden',
		'type' => 'checkbox'
	);

	$options[] = array(
		'name' => __( 'Hidden Text Input', 'theme-textdomain' ),
		'desc' => __( 'This option is hidden unless activated by a checkbox click.', 'theme-textdomain' ),
		'id' => 'example_text_hidden',
		'std' => 'Hello',
		'class' => 'hidden',
		'type' => 'text'
	);

	$options[] = array(
		'name' => __( 'Uploader Test', 'theme-textdomain' ),
		'desc' => __( 'This creates a full size uploader that previews the image.', 'theme-textdomain' ),
		'id' => 'example_uploader',
		'type' => 'upload'
	);

	$options[] = array(
		'name' => "Example Image Selector",
		'desc' => "Images for layout.",
		'id' => "example_images",
		'std' => "2c-l-fixed",
		'type' => "images",
		'options' => array(
			'1col-fixed' => $imagepath . '/1col.png',
			'2c-l-fixed' => $imagepath . '/2cl.png',
			'2c-r-fixed' => $imagepath . '/2cr.png'
		)
	);

	$options[] = array(
		'name' =>  __( 'Example Background', 'theme-textdomain' ),
		'desc' => __( 'Change the background CSS.', 'theme-textdomain' ),
		'id' => 'example_background',
		'std' => $background_defaults,
		'type' => 'background'
	);

	$options[] = array(
		'name' => __( 'Multicheck', 'theme-textdomain' ),
		'desc' => __( 'Multicheck description.', 'theme-textdomain' ),
		'id' => 'example_multicheck',
		'std' => $multicheck_defaults, // These items get checked by default
		'type' => 'multicheck',
		'options' => $multicheck_array
	);

	$options[] = array(
		'name' => __( 'Colorpicker', 'theme-textdomain' ),
		'desc' => __( 'No color selected by default.', 'theme-textdomain' ),
		'id' => 'example_colorpicker',
		'std' => '',
		'type' => 'color'
	);

	$options[] = array( 'name' => __( 'Typography', 'theme-textdomain' ),
		'desc' => __( 'Example typography.', 'theme-textdomain' ),
		'id' => "example_typography",
		'std' => $typography_defaults,
		'type' => 'typography'
	);

	$options[] = array(
		'name' => __( 'Custom Typography', 'theme-textdomain' ),
		'desc' => __( 'Custom typography options.', 'theme-textdomain' ),
		'id' => "custom_typography",
		'std' => $typography_defaults,
		'type' => 'typography',
		'options' => $typography_options
	);

	$options[] = array(
		'name' => __( 'Text Editor', 'theme-textdomain' ),
		'type' => 'heading'
	);

	/**
	 * For $settings options see:
	 * http://codex.wordpress.org/Function_Reference/wp_editor
	 *
	 * 'media_buttons' are not supported as there is no post to attach items to
	 * 'textarea_name' is set by the 'id' you choose
	 */

	$wp_editor_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 5,
		'tinymce' => array( 'plugins' => 'wordpress,wplink' )
	);

	$options[] = array(
		'name' => __( 'Default Text Editor', 'theme-textdomain' ),
		'desc' => sprintf( __( 'You can also pass settings to the editor.  Read more about wp_editor in <a href="%1$s" target="_blank">the WordPress codex</a>', 'theme-textdomain' ), 'http://codex.wordpress.org/Function_Reference/wp_editor' ),
		'id' => 'example_editor',
		'type' => 'editor',
		'settings' => $wp_editor_settings
	);

	return $options;
}