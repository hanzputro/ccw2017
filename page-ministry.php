<?php
/*
Template Name: Ministry Page
*/
?>
<?php get_header(); ?>

<!-- specific page -->
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/dist/css/ministry.css">
	
	<div class="container940" id="section1">
    	<div class="container__content grid">
    		<div class="span12 center">
	            <h1 class="s50 merriweather bold margin0"><?php echo of_get_option('ministry-gi-title'); ?></h1>
	            <hr class="hr55">
	            <p class="margin0 s24 myriadpro grey"><?php echo of_get_option('ministry-gi-desc'); ?></p>
	        </div>    		
    	</div>        
    </div>

    <div class="container1600" id="section2">
    	<div class="container__content">
    		<div class="container940 grid">
    			<div class="span12">
		            <h1 class="s50 linetitle merriweather bold"><?php echo of_get_option('ministry-v-title'); ?></h1>
					<p class="margin0 s24 myriadpro grey"><?php echo of_get_option('ministry-v-desc'); ?></p>
					<div class="frame__banner">
						<img src="<?php echo of_get_option('ministry-v-bg'); ?>" alt="">
						<div class="splash2"></div>
					</div>
		        </div> 
    		</div>    		   		
    	</div>        
    </div>
	
	<div class="container1600" id="section3">
    	<div class="container__content grid">
    		<div class="span12">
	            <h1 class="s50 linetitle merriweather bold">Other Ministries</h1>
				<ul class="gallery">
	    			<!-- <li class="gallery__list">
	    				<div class="gallery__image">
	    					<img src="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" alt="">
	    					<div class="gallery__frame"></div>
	    				</div>
	    				<h3 class="margin0 regular">Creative Community Cares</h3>
						<h3 class="light grey margin0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada eleifend mi.</h3>
					</li> -->
					<?php
	                    $options = of_get_option( 'ministry-gallery' );
	                    $field = $options;
	                    $i = 0;
	                    if( ! empty( $options ) ){
	                        foreach( $options['input'] as $option ){
	                            echo '<li class="gallery__list">';
				    			echo	'<div class="gallery__image">';
				    			echo		'<img src="'. $field['image'][$i] .'" alt="">';
				    			echo		'<div class="gallery__frame"></div>';
				    			echo	'</div>';
				    			echo	'<h3 class="margin0 regular">'. $field['input'][$i] .'</h3>';
								echo	'<h3 class="light grey margin0">'. $field['textarea'][$i] .'</h3>';
								echo '</li>';

								$i++;
	                        }
	                    }
                    ?>
	    		</ul>
	        </div>    		
    	</div>        
    </div>

    <div class="footer">
        <div class="container1600 clearfix">
            <div class="copyright"><h5 class="margin0 merriweather">Copyright 2017, Creative City Worship, All Right Reserved</h5></div>
            <ul class="footer-menu">
                <li><a href="<?php echo of_get_option('footer-cc-link'); ?>"><h5 class="margin0 merriweather">Creative Community</h5></a></li>
                <li><a href="<?php echo of_get_option('footer-s-link'); ?>"><h5 class="margin0 merriweather">Services</h5></a></li>
                <li><a href="<?php echo of_get_option('footer-gc-link'); ?>"><h5 class="margin0 merriweather">Get Connected</h5></a></li>
            </ul>
        </div>
    </div>
	
</body>

<!-- JS -->
<?php wp_footer(); ?>

</html>
		