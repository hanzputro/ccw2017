<?php
/*
Template Name: Media Page
*/
?>
<?php get_header(); ?>

<!-- specific page -->
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/dist/css/media.css">
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/vendor/magnific-popup/dist/magnific-popup.css">


	<div class="container1600" id="section1">
		<div class="container__content grid">
			<div class="span12 section__content">
	            <nav class="tablink tablink--page center">
	                <ul>
	                    <li class="active"><a href="#notset"><h2 class="margin0">Gallery</h2></a></li>
	                    <li class=""><a href="#notset"><h2 class="margin0">Audio</h2></a></li>
	                </ul>
	            </nav>                    
	        </div>
		</div>        
    </div>

    <div class="container1600" id="section2">    	
    	<div class="container__content grid">
    		<div class="span12">
    			<form action="" class="filter">
		    		<div class="field width-initial field--select">
		    			<select name="" id="" class="">
		    				<option value="">2015</option>
		    				<option value="">2016</option>
		    				<option value="">2017</option>
		    				<option value="">2018</option>
		    			</select>
		    		</div>
		    		<div class="field field--search">
		    			<input type="text" class="" placeholder="Search here...">
		    		</div>
		    	</form>
    		</div>
    		<div class="span12">
				<ul class="gallery">
	    			<li class="gallery__list">
	    				<a href="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" class="gallery__link">
	    					<div class="gallery__image">
		    					<img src="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" alt="">
		    					<div class="gallery__frame"></div>
		    				</div>
		    				<h3 class="margin0 regular">Ret-ret 2017</h3>
							<h3 class="light grey margin0"><i>Lembang Bandung</i></h3>
	    				</a>	    				
					</li>
					<li class="gallery__list">
	    				<a href="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" class="gallery__link">
	    					<div class="gallery__image">
		    					<img src="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" alt="">
		    					<div class="gallery__frame"></div>
		    				</div>
		    				<h3 class="margin0 regular">Ret-ret 2017</h3>
							<h3 class="light grey margin0"><i>Lembang Bandung</i></h3>
	    				</a>	    				
					</li>
					<li class="gallery__list">
	    				<a href="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" class="gallery__link">
	    					<div class="gallery__image">
		    					<img src="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" alt="">
		    					<div class="gallery__frame"></div>
		    				</div>
		    				<h3 class="margin0 regular">Ret-ret 2017</h3>
							<h3 class="light grey margin0"><i>Lembang Bandung</i></h3>
	    				</a>	    				
					</li>
					<li class="gallery__list">
	    				<a href="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" class="gallery__link">
	    					<div class="gallery__image">
		    					<img src="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" alt="">
		    					<div class="gallery__frame"></div>
		    				</div>
		    				<h3 class="margin0 regular">Ret-ret 2017</h3>
							<h3 class="light grey margin0"><i>Lembang Bandung</i></h3>
	    				</a>	    				
					</li>
	    		</ul>
	        </div>    		
    	</div>        
    </div>

    <div class="footer">
        <div class="container1600 clearfix">
            <div class="copyright"><h5 class="margin0 merriweather">Copyright 2017, Creative City Worship, All Right Reserved</h5></div>
            <ul class="footer-menu">
                <li><a href=""><h5 class="margin0 merriweather">Creative Community</h5></a></li>
                <li><a href=""><h5 class="margin0 merriweather">Services</h5></a></li>
                <li><a href=""><h5 class="margin0 merriweather">Get Connected</h5></a></li>
            </ul>
        </div>
    </div>
	
</body>

<!-- JS -->
<?php wp_footer(); ?>
<script src="<?php bloginfo('template_url'); ?>/assets/vendor/magnific-popup/dist/jquery.magnific-popup.min.js"></script>
<script src="<?php bloginfo('template_url'); ?>/dist/js/media.js"></script>
</html>
		