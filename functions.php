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
	wp_enqueue_style( 'style-name', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'theme_setup' );

function js_setup() {
	wp_register_script( 'jquery','','');
	wp_register_script('jquery2', get_template_directory_uri().'/assets/vendor/jquery/jquery-1.11.3.min.js', '', '') ;
	wp_register_script('plugins', get_template_directory_uri().'/dist/js/plugins.js', '', '') ;

	wp_enqueue_script( array('jquery', 'jquery2', 'plugins', 'scripts'));   
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
// $themename = "CCW 2017";
$shortname = "shortname";
$categories = get_categories('hide_empty=0&orderby=name');
$all_cats = array();
foreach ($categories as $category_item ) {
$all_cats[$category_item->cat_ID] = $category_item->cat_name;
}
array_unshift($all_cats, "Select a category");
/* ---------------------------------------------------------
Declare options
----------------------------------------------------------- */
$theme_options = array (
  array( "name" => $themename." Options",
  "type" => "title"),

  /* ---------------------------------------------------------
  Home section
  ----------------------------------------------------------- */
  array( 
    "name" => "Homepage",
    "type" => "section"),
  array( 
    "type" => "open"),
  array( 
    "name" => "Quote",
    "desc" => "",
    "id" => $shortname."_quote",
    "type" => "textarea",
    "options" => $all_cats,
    "std" => "Discovering and Maximizing Our God-Given TALENTS to Serve The CITY We Are In, and to Bring People to WORSHIP God in Spirit and in Truth"),
  array( 
    "type" => "close"),
);



/*---------------------------------------------------
Theme Panel Output
----------------------------------------------------*/
function theme_settings_page() {
  global $themename,$theme_options;
  $i=0;
  $message=''; 
  if ( 'save' == $_REQUEST['action'] ) {
   
    foreach ($theme_options as $value) {
      update_option( $value['id'], $_REQUEST[ $value['id'] ] ); }
   
    foreach ($theme_options as $value) {
      if( isset( $_REQUEST[ $value['id'] ] ) ) { update_option( $value['id'], $_REQUEST[ $value['id'] ]  ); } else { delete_option( $value['id'] ); } }
    $message='saved';
  }
  else if( 'reset' == $_REQUEST['action'] ) {
     
    foreach ($theme_options as $value) {
      delete_option( $value['id'] ); }
    $message='reset';      
  }
 
  ?>
  <div class="wrap options_wrap">
    <div id="icon-options-general"></div>
    <h2><?php _e( ' Page Settings' ) //your admin panel title ?></h2>
    <?php
    if ( $message=='saved' ) 
      echo '<div class="updated settings-error" id="setting-error-settings_updated"><p>'.$themename.' settings saved.</strong></p></div>';
    if ( $message=='reset' ) 
      echo '<div class="updated settings-error" id="setting-error-settings_updated"><p>'.$themename.' settings reset.</strong></p></div>';
    ?>
    <!-- <ul>
      <li>View Documentation |</li>
      <li>Visit Support |</li>
      <li>Theme version 1.0 </li>
    </ul> -->
    <div class="content_options">
      <form method="post">
 
      <?php foreach ($theme_options as $value) {     
        switch ( $value['type'] ) {       
          case "open": ?>
            <?php break;
         
          case "close": ?>
            </div>
            </div><br />
            <?php break;
         
          case "title": ?>
            <div class="message">
              <!-- <p>To easily use the <?php echo $themename;?> theme options, you can use the options below.</p> -->
            </div>
            <?php break;
         
          case 'text': ?>
            <div class="option_input option_text">
                <label for="<?php echo $value['id']; ?>"><?php echo $value['name']; ?></label>
                <input id="" type="<?php echo $value['type']; ?>" name="<?php echo $value['id']; ?>" value="<?php if ( get_settings( $value['id'] ) != "") { echo stripslashes(get_settings( $value['id'])  ); } else { echo $value['std']; } ?>" />
                <small><?php echo $value['desc']; ?></small>
                <div class="clearfix"></div>
            </div>
            <?php break;
         
          case 'textarea': ?>
            <div class="option_input option_textarea">
            <label for="<?php echo $value['id']; ?>"><?php echo $value['name']; ?></label>
            <textarea name="<?php echo $value['id']; ?>" rows="" cols=""><?php if ( get_settings( $value['id'] ) != "") { echo stripslashes(get_settings( $value['id']) ); } else { echo $value['std']; } ?></textarea>
            <small><?php echo $value['desc']; ?></small>
            <div class="clearfix"></div>
            </div>
            <?php break;
         
          case 'select': ?>
            <div class="option_input option_select">
            <label for="<?php echo $value['id']; ?>"><?php echo $value['name']; ?></label>
            <select name="<?php echo $value['id']; ?>" id="<?php echo $value['id']; ?>">
            <?php foreach ($value['options'] as $option) { ?>
                <option <?php if (get_settings( $value['id'] ) == $option) { echo 'selected="selected"'; } ?>><?php echo $option; ?></option>
            <?php } ?>
            </select>
            <small><?php echo $value['desc']; ?></small>
            <div class="clearfix"></div>
            </div>
            <?php break;
         
          case "checkbox": ?>
            <div class="option_input option_checkbox">
            <label for="<?php echo $value['id']; ?>"><?php echo $value['name']; ?></label>
            
            <input id="<?php echo $value['id']; ?>" type="checkbox" name="<?php echo $value['id']; ?>" value="true" <?php echo $checked; ?> /> 
            <small><?php echo $value['desc']; ?></small>
            <div class="clearfix"></div>
            </div>
            <?php break;
         
          case "section": 
            $i++; ?>
              <div class="input_section">
              <div class="input_title">
              
              <h3><img src="<?php echo get_template_directory_uri();?>/assets/images/options.png" alt="">&nbsp;<?php echo $value['name']; ?></h3>
              <span class="submit"><input name="save<?php echo $i; ?>" type="submit" class="button-primary" value="Save changes" /></span>
              <div class="clearfix"></div>
            </div>
            <div class="all_options">
            <?php break;
          
        }
      }?>
      <input type="hidden" name="action" value="save" />
      </form>
      <form method="post">
        <p class="submit">
        <input name="reset" type="submit" value="Reset" />
        <input type="hidden" name="action" value="reset" />
        </p>
      </form>
    </div>
    <div class="footer-credit">
      <center>
        <!-- <p>This theme was made by <a title="" href="" target="_blank" >Hanzputro</a>.</p> -->
      </center>
    </div>
  </div>
  <?php
}



/*********************************************************/
/*                 menu navigation setup               */
/*********************************************************/
function menu_setup() {
  register_nav_menu('header-menu',__( 'Header Menu' ));
}
add_action( 'init', 'menu_setup' );

function set_option_menu() {
  register_nav_menus(
    array(
      'header-menu' => __( 'Header Menu' )
      // 'another-menu' => __( 'Another Menu' ),
      // 'an-extra-menu' => __( 'An Extra Menu' )
    )
  );
}
add_action( 'init', 'set_option_menu' );
