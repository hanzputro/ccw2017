<?php
/*
Template Name: The Leaders Page
*/
?>
<?php get_header(); ?>

<!-- specific page -->
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/dist/css/theleaders.css">


	<div class="container1600" id="section1">
		<div class="container__content grid">
			<div class="span12 section__content">
	            <nav class="tablink tablink--page center">
	                <ul>
	                    <li class=""><a href="<?php echo site_url(); ?>/who-we-are"><h2 class="margin0">Who We Are</h2></a></li>
	                    <li class=""><a href="<?php echo site_url(); ?>/service"><h2 class="margin0">Service</h2></a></li>
	                    <li class="active"><a><h2 class="margin0">The Leaders</h2></a></li>
	                </ul>
	            </nav>                    
	        </div>
		</div>        
    </div>
	
	<div class="container940" id="section2">
    	<div class="container__content grid">
    		<div class="span12 center">
	            <h1 class="s50 merriweather margin0"><b><?php echo of_get_option('theleaders-title'); ?></b></h1>
	            <hr class="hr55">
	            <p class="margin0 s24 myriadpro grey"><?php echo of_get_option('theleaders-desc'); ?></p>
	            <br>
	            <br>
	        </div>    		
    	</div>        
    </div>

    <div class="container1600" id="section3">
    	<div class="container__content grid">
    		<div class="span12">
	            <h1 class="s50 linetitle merriweather bold">Committee</h1>
				<ul class="gallery">
	    			<!-- <li class="gallery__list">
	    				<div class="gallery__image">
	    					<img src="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" alt="">
	    					<div class="gallery__frame"></div>
	    				</div>
	    				<h3 class="margin0 regular">Lorem ipsum</h3>
						<h3 class="light grey margin0"><i>Committee</i></h3>
					</li> -->
					<?php
	                    $options = of_get_option( 'service-gallery-commitee' );
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
	
	<div class="container1600" id="section4">
    	<div class="container__content grid">
    		<div class="span12">
	            <h1 class="s50 linetitle merriweather bold">Head of Departments</h1>
				<ul class="gallery">
	    			<!-- <li class="gallery__list">
	    				<div class="gallery__image">
	    					<img src="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" alt="">
	    					<div class="gallery__frame"></div>
	    				</div>
	    				<h3 class="margin0 regular">Lorem ipsum</h3>
						<h3 class="light grey margin0"><i>Committee</i></h3>
					</li> -->
					<?php
	                    $options = of_get_option( 'service-gallery-hod' );
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
		