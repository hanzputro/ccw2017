<?php
/*
Template Name: Who We Are Page
*/
?>
<?php get_header(); ?>

<!-- specific page -->
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/dist/css/whoweare.css">


	<div class="container1600" id="section1">
		<div class="container__content grid">
			<div class="span12 section__content">
	            <nav class="tablink tablink--page center">
	                <ul>
	                    <li class="active"><a><h2 class="margin0">Who We Are</h2></a></li>
	                    <li class=""><a href="<?php echo site_url(); ?>/service"><h2 class="margin0">Service</h2></a></li>
	                    <li class=""><a href="<?php echo site_url(); ?>/the-leaders"><h2 class="margin0">The Leaders</h2></a></li>
	                </ul>
	            </nav>                    
	        </div>
		</div>        
    </div>
		
    <div class="container1600" id="section2">
    	<div class="container__content grid">
    		<div class="span6">
	            <div class="thumb animate">
	                <img class="" src="<?php echo of_get_option('whoweare-img'); ?>" alt="">
	                <div class="splash"></div>
	            </div>                    
	        </div>
	        <div class="span6 section__content">
	        	<h2 class="s20 grey"><?php echo of_get_option('whoweare-minititle'); ?></h2>
	            <h1 class="linetitle s50 merriweather bold"><?php echo of_get_option('whoweare-title'); ?></h1>
	            <p class="s20"><?php echo of_get_option('whoweare-desc'); ?></p>                    
	        </div>
    	</div>        
    </div>
	
	<div class="container" id="section3" style="background-image: url('<?php echo of_get_option('whoweare-bg2'); ?>');">
		<div class="container940">
			<div class="container__content grid">
	    		<div class="span12 center">
		            <h1 class="s50 merriweather margin0"><b><?php echo of_get_option('whoweare-title2'); ?></b></h1>
		            <hr class="hr55">
		            <p class="margin0 s24 myriadpro purple"><?php echo of_get_option('whoweare-desc2'); ?></p>
		        </div>
	    	</div>        
	    	<div class="container__content grid">
		        <div class="span12 center">
		            <h1 class="s50 merriweather margin0"><b><?php echo of_get_option('whoweare-title3'); ?></b></h1>
		            <hr class="hr55">
		            <p class="margin0 s24 myriadpro purple"><?php echo of_get_option('whoweare-desc3'); ?></p>
		            <br>
		            <br>
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

</html>