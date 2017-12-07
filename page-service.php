<?php
/*
Template Name: Service Page
*/
?>
<?php get_header(); ?>

<!-- specific page -->
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/dist/css/service.css">


	<div class="container1600" id="section1">
		<div class="container__content grid">
			<div class="span12 section__content">
	            <nav class="tablink tablink--page center">
	                <ul>
	                    <li class=""><a href="<?php echo site_url(); ?>/who-we-are"><h2 class="margin0">Who We Are</h2></a></li>
	                    <li class="active"><a><h2 class="margin0">Service</h2></a></li>
	                    <li class=""><a href="<?php echo site_url(); ?>/the-leaders"><h2 class="margin0">The Leaders</h2></a></li>
	                </ul>
	            </nav>                    
	        </div>
		</div>        
    </div>    
	
	<div class="container940" id="section2">
    	<div class="container__content grid">
    		<div class="span12 center">
	            <h1 class="s50 merriweather margin0"><b><?php echo of_get_option('service-title1'); ?></b></h1>
	            <hr class="hr55">
	            <p class="margin0 s30 myriadpro grey"><?php echo of_get_option('service-desc1'); ?></p>
                <br>
                <br>
            </div>
    	</div>         
	</div>

    <div class="container1600" id="section3">
        <div class="container__content grid">
            <div class="span6 section__content">
                <h1 class="linetitle s50 merriweather bold"><?php echo of_get_option('service-title2'); ?></h1>
                <h2 class="s20 light"><?php echo of_get_option('service-desc2'); ?></p>                    
            </div>
            <div class="span6">
                <div class="thumb animate">
                    <div class="slider">
                        <div class="slide-bg">
                            <!-- <img src="<?php bloginfo('template_url'); ?>/dist/images/service/section2-thumb.jpg" alt="">
                            <img src="<?php bloginfo('template_url'); ?>/dist/images/service/section2-thumb.jpg" alt="">
                            <img src="<?php bloginfo('template_url'); ?>/dist/images/service/section2-thumb.jpg" alt=""> -->
                            <?php
                                $options = of_get_option( 'service-image' ); 
                                if( ! empty( $options ) ){
                                    foreach( $options as $option ){
                                        echo '<img src="'. $option .'" alt="">';
                                    }
                                }
                            ?>                                               
                        </div>
                    </div>
                    <div class="splash"></div>
                </div>                    
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
<script src="<?php bloginfo('template_url'); ?>/dist/js/service.js"></script>

</html>
		