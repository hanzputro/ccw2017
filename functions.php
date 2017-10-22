<?php 
/**
 * Sets up the content width value based on the theme's design and stylesheet.
 */

/*********************************************************/
/*                fix backslashes Annoyed                */
/*********************************************************/
$_POST = array_map( 'stripslashes_deep', $_POST );
$_GET = array_map( 'stripslashes_deep', $_GET );
$_COOKIE = array_map( 'stripslashes_deep', $_COOKIE );
$_REQUEST = array_map( 'stripslashes_deep', $_REQUEST );


/*********************************************************/
/*                      theme setup                      */
/*********************************************************/
function theme_setup() {
  wp_enqueue_style( 'core', get_stylesheet_directory_uri().'/style.css', '', '');
}
add_action( 'wp_enqueue_scripts', 'theme_setup' );

function js_setup() {
  wp_register_script( 'jquery','','');
  wp_register_script('jquery2', get_template_directory_uri().'/assets/vendor/jquery/jquery-1.11.3.min.js', '', '') ;
  wp_register_script('venobox', get_template_directory_uri().'/dist/js/plugins.js', '', '') ;

  wp_enqueue_script( array('jquery', 'jquery2', 'venobox', 'scripts'));   
}  
add_action('wp_enqueue_scripts', 'js_setup');


/*********************************************************/
/*                 Option theme setup                    */
/*********************************************************/
function theme_settings_init(){
register_setting( 'theme_settings', 'theme_settings' );
wp_enqueue_style("panel_style", get_template_directory_uri()."/panel.css", false, "1.0", "all");
}
/*---------------------------------------------------
add settings page to menu
----------------------------------------------------*/
function add_settings_page() {
add_menu_page( __( 'Page Settings' .'' ), __( 'Page Settings' .'' ), 'manage_options', 'settings', 'theme_settings_page');
}

/*---------------------------------------------------
add actions
----------------------------------------------------*/
add_action( 'admin_init', 'theme_settings_init' );
add_action( 'admin_menu', 'add_settings_page' );
/* ----------------------------------------------------------
Declare vars
------------------------------------------------------------- */
// $themename = "Theme Name";
$themename = "";
$shortname = "shortname";
$categories = get_categories('hide_empty=0&orderby=name');
$all_cats = array();
foreach ($categories as $category_item ) {
$all_cats[$category_item->cat_ID] = $category_item->cat_name;
}
array_unshift($all_cats, "Select a category");
