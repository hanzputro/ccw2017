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
		'size' => '12px',
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

	// for repeatable
	$prefix = 'custom_';

	$options = array();


	/* ######################## */
	/* ####### HOME tab ####### */
	/* ######################## */

	// main

	$options[] = array(
		'name' => __( 'Main', 'theme-textdomain' ),
		'type' => 'heading'
	);

	$options[] = array(
		'name' => __( 'HEADER', 'theme-textdomain' ),
		'type' => 'info'
	);

	$options[] = array(
		'name' => __( 'Logo', 'theme-textdomain' ),
		'std' => $imagepath . '/logo-ccw-black.png',
		'id' => 'logo',
		'type' => 'upload'
	);

	$options[] = array(
		'name' => __( 'FOOTER', 'theme-textdomain' ),
		'type' => 'info'
	);

	$options[] = array(
		'name' => __( 'Creative Community Link', 'theme-textdomain' ),
		'id' => 'footer-cc-link',
		'std' => '<?php echo site_url(); ?>',
		'type' => 'text'
	);

	$options[] = array(
		'name' => __( 'Services Link', 'theme-textdomain' ),
		'id' => 'footer-s-link',
		'std' => '<?php echo site_url(); ?>',
		'type' => 'text'
	);

	$options[] = array(
		'name' => __( 'Get Connected Link', 'theme-textdomain' ),
		'id' => 'footer-gc-link',
		'std' => '<?php echo site_url(); ?>',
		'type' => 'text'
	);

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
		'name' => __( 'Background', 'theme-textdomain' ),
		'std' => $imagepath . '/home/bg-section1.jpg',
		'id' => 'home-sec1-bg',
		'type' => 'upload'
	);

	// section 2
	$options[] = array(
		'name' => __( 'SECTION 2', 'theme-textdomain' ),
		'type' => 'info'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id' => 'home-sec2-title',
		'std' => 'Come As You Are',
		'type' => 'text'
	);

	$options[] = array(
		'name' => __( 'Image', 'theme-textdomain' ),
		'std' => $imagepath . '/home/section2-thumb.jpg',
		'id' => 'home-sec2-img',
		'type' => 'upload'
	);

	$wp_editor_descsec2_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 3,
		'tinymce' => array( 'plugins' => 'wordpress,wplink' )
	);
	$options[] = array(
		'name' => __( 'Description', 'theme-textdomain' ),
		'id' => 'home-sec2-desc',
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
		'id' => 'home-sec3-desc1',
		'type' => 'editor',
		'std' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		'settings' => $wp_editor_descsec3_settings
	);

	$options[] = array(
		'name' => __( 'Background News 1', 'theme-textdomain' ),
		'std' => $imagepath . '/home/bg-section3.jpg',
		'id' => 'home-sec3-bg1',
		'type' => 'upload'
	);

	$wp_editor_descsec3_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 3,
		'tinymce' => array( 'plugins' => 'wordpress,wplink' )
	);
	$options[] = array(
		'name' => __( 'News 2', 'theme-textdomain' ),
		'id' => 'home-sec3-desc2',
		'type' => 'editor',
		'std' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		'settings' => $wp_editor_descsec3_settings
	);

	$options[] = array(
		'name' => __( 'Background News 2', 'theme-textdomain' ),
		'std' => $imagepath . '/home/bg-section3.jpg',
		'id' => 'home-sec3-bg2',
		'type' => 'upload'
	);

	$wp_editor_descsec3_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 3,
		'tinymce' => array( 'plugins' => 'wordpress,wplink' )
	);
	$options[] = array(
		'name' => __( 'News 3', 'theme-textdomain' ),
		'id' => 'home-sec3-desc3',
		'type' => 'editor',
		'std' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		'settings' => $wp_editor_descsec3_settings
	);

	$options[] = array(
		'name' => __( 'Background News 3', 'theme-textdomain' ),
		'std' => $imagepath . '/home/bg-section3.jpg',
		'id' => 'home-sec3-bg3',
		'type' => 'upload'
	);

	// section 4
	$options[] = array(
		'name' => __( 'SECTION 4', 'theme-textdomain' ),
		'type' => 'info'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id' => 'home-sec4-title',
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
		'id' => 'home-sec4-desc',
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
		'id' => 'home-sec5-title',
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
		'id' => 'home-sec5-desc',
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
		'name' => __( 'OUR SERVICE', 'theme-textdomain' ),
		'type' => 'info'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id' => 'service-title1',
		'std' => 'Our Services',
		'type' => 'text'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id' => 'service-desc1',
		'std' => 'Kami punya ibadah hari minggu, Ibadah anak-anak atau Creative Kids dan Creative Community',
		'type' => 'textarea'
	);

	$options[] = array(
		'name' => __( 'SUNDAY SERVICE', 'theme-textdomain' ),
		'type' => 'info'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id' => 'service-title2',
		'std' => 'Sunday Service',
		'type' => 'text'
	);

	$wp_editor_service_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 3,
		'tinymce' => array( 'plugins' => 'wordpress,wplink' )
	);
	$options[] = array(
		'name' => __( 'Description', 'theme-textdomain' ),
		'id' => 'service-desc2',
		'type' => 'editor',
		'std' => 'Pastor Walter is our lead pastor. Creative City Worship lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
		'settings' => $wp_editor_service_settings
	);

	$options[] = array(
		'name' => __( 'Image 1', 'theme-textdomain' ),
		'std' => $imagepath . '/home/section2-thumb.jpg',
		'id' => 'service-image1',
		'type' => 'upload'
	);

	$options[] = array(
		'name' => __( 'Image 2', 'theme-textdomain' ),
		'std' => $imagepath . '/home/section2-thumb.jpg',
		'id' => 'service-image2',
		'type' => 'upload'
	);

	$options[] = array(
		'name' => __( 'Image 3', 'theme-textdomain' ),
		'std' => $imagepath . '/home/section2-thumb.jpg',
		'id' => 'service-image3',
		'type' => 'upload'
	);	


	/* ############################## */
	/* ####### WHO WE ARE tab ####### */
	/* ############################## */
	$options[] = array(
		'name' => __( 'Who We Are', 'theme-textdomain' ),
		'type' => 'heading'
	);

	$options[] = array(
		'name' => __( 'WHO WE ARE', 'theme-textdomain' ),
		'type' => 'info'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id' => 'whoweare-title',
		'std' => 'Creative City Worship',
		'type' => 'text'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id' => 'whoweare-minititle',
		'std' => 'WHO WE ARE',
		'type' => 'text'
	);	

	$wp_editor_whowearedesc1_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 3,
		'tinymce' => array( 'plugins' => 'wordpress,wplink' )
	);
	$options[] = array(
		'name' => __( 'Description', 'theme-textdomain' ),
		'id' => 'whoweare-desc',
		'type' => 'editor',
		'std' => 'Pastor Walter is our lead pastor. Creative City Worship started with a bunch of people who are passionate about God and passionate to serve others. We strongly believe that our God-given talents should be used to serve the city we are in, so that people can come to know who Jesus is and can worship Him in spirit and in truth.<br><br>We started our first Creative City Worship service on November 10th, 2013 with only 12 members. Having only a small amount of volunteers meant that everyone had to multi-task, and on every Sunday one person could have up to 3 ministries! But this has caused us to grow closer to one another and Sunday service became more than just an ordinary church service - it became our extended family gathering to worship God and rejoice in His presence.<br><br>Ever since then we have had tremendous miracles in the house of God - new members were added, many volunteered to serve, and we have even been given the opportunity to dedicate 4 young children to God and to baptize our first member on Easter Sunday, 20 April 2014.',
		'settings' => $wp_editor_whowearedesc1_settings
	);

	$options[] = array(
		'name' => __( 'OUR VISION', 'theme-textdomain' ),
		'type' => 'info'
	);

	$options[] = array(
		'name' => __( 'Background', 'theme-textdomain' ),
		'std' => $imagepath . '/bg-whoweare.jpg',
		'id' => 'whoweare-bg',
		'type' => 'upload'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id' => 'whoweare-title2',
		'std' => 'Our Vision',
		'type' => 'text'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id' => 'whoweare-desc2',
		'std' => 'Discovering and Maximizing Our God-Given TALENTS to Serve The CITY We Are In, and to Bring People to WORSHIP God in Spirit and in Truth',
		'type' => 'textarea'
	);

	$options[] = array(
		'name' => __( 'OUR MISSION', 'theme-textdomain' ),
		'type' => 'info'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id' => 'whoweare-title3',
		'std' => 'Our Mission',
		'type' => 'text'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id' => 'whoweare-desc3',
		'std' => 'Love God and Love People',
		'type' => 'textarea'
	);


	/* ############################### */
	/* ####### THE LEADERS tab ####### */
	/* ############################### */
	$options[] = array(
		'name' => __( 'The Leaders', 'theme-textdomain' ),
		'type' => 'heading'
	);

	$options[] = array(
		'name' => __( 'Title', 'theme-textdomain' ),
		'id'	=> 'repeat_text',
		'std' => 'Test Multiple',
		'type' => 'repeat_text'
	);

	$options[] = array(
		'name' => __( 'Logo', 'theme-textdomain' ),
		'std' => array(
			'img' => $imagepath . '/logo-ccw-black.png',
			'img' => $imagepath . '/logo-ccw-black.png',
			'img' => $imagepath . '/logo-ccw-black.png'
		),
		'id' => 'theleader',
		'type' => 'repeat_upload'
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

	// $options[] = array(
	// 	'name' => __( 'Logo', 'theme-textdomain' ),
	// 	'std' => '',
	// 	'id' => 'logo-theleader',
	// 	'type' => 'multiple-upload'
	// );

	// $options[] = array(
	// 	'name' => __( 'Title', 'theme-textdomain' ),
	// 	'id' => 'theleaders-title',
	// 	'std' => 'The Leaders',
	// 	'type' => 'text'
	// );	

	// $wp_editor_theleader_settings = array(
	// 	'wpautop' => true, // Default
	// 	'textarea_rows' => 3,
	// 	'tinymce' => array( 'plugins' => 'wordpress,wplink' )
	// );
	// $options[] = array(
	// 	'name' => __( 'Description', 'theme-textdomain' ),
	// 	'id' => 'theleaders-desc',
	// 	'type' => 'editor',
	// 	'std' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum lorem a volutpat euismod.<br>
	// 			Vivamus blandit metus eu sem blandit, eget dictum neque commodo. Cras fermentum sollicitudin laoreet. Aliquam quis tellus ultricies, iaculis justo ut, vulputate nibh. Fusce convallis odio vitae justo volutpat dictum. Sed non ligula odio. Praesent dapibus lobortis vestibulum. Ut accumsan sem nibh, dapibus mollis nisi ultrices ut.',
	// 	'settings' => $wp_editor_theleader_settings
	// );

	// $options[] = array(
	// 	'name' => __( 'Committee', 'theme-textdomain' ),
	// 	'type' => 'info'
	// );

	// $options[] = array(
	// 	'name' => __( 'Title', 'theme-textdomain' ),
	// 	'id' => 'theleaders-committee-title',
	// 	'std' => 'Committee',
	// 	'type' => 'text'
	// );

	// $options[] = array(
	// 	'name' => __( 'Background', 'theme-textdomain' ),
	// 	'std' => $imagepath . '/leaders.jpg',
	// 	'id' => 'theleaders-committee-bg',
	// 	'type' => 'upload'
	// );

	// $options[] = array(
	// 	'name' => __( 'Head of Departments', 'theme-textdomain' ),
	// 	'type' => 'info'
	// );

	// $options[] = array(
	// 	'name' => __( 'Title', 'theme-textdomain' ),
	// 	'id' => 'theleaders-hod-title',
	// 	'std' => 'Head of Departments',
	// 	'type' => 'text'
	// );

	// $options[] = array(
	// 	'name' => __( 'Background', 'theme-textdomain' ),
	// 	'std' => $imagepath . '/leaders.jpg',
	// 	'id' => 'theleaders-hod-bg',
	// 	'type' => 'upload'
	// );

	return $options;
}