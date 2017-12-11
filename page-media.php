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
	                    <li class="active"><a><h2 class="margin0">Gallery</h2></a></li>
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
		    			<select name="" id="searchYearMedia" class="">
		    				<option value="0">All</option>
		    				<!-- <option value="2018">2015</option>
		    				<option value="2017">2014</option> -->
		    				<?php
								$options = of_get_option( 'media-gallery' );
								$field = $options;
								$i = 0;
								if( ! empty( $options ) ){
									$min = min($field['input3']);
									$max = max($field['input3']);
								    for ($max; $max >= $min; $max--) {
							    		echo '<option value="'. $max .'">'. $max .'</option>';
			                        }
			                    }
		                    ?>		    				
		    			</select>
		    		</div>
		    		<div class="field field--search">
		    			<input id="searchMedia" type="text" class="" placeholder="Search here...">
		    		</div>
		    	</form>
    		</div>
    		<div class="span12">
				<ul class="gallery" id="galleryMedia">
	    			<!-- <li class="gallery__list">
	    				<a href="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" class="gallery__link image">
	    					<div class="gallery__image">
		    					<img src="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" alt="">
		    					<div class="gallery__frame"></div>
		    				</div>
		    				<h3 class="margin0 regular title">Ret-ret 2017</h3>
							<h3 class="light grey margin0 desc"><i>Lembang Bandung</i></h3>
	    				</a>	    				
					</li>
					<li class="gallery__list">
	    				<a href="https://www.youtube.com/watch?v=whITMl1Vzu8" class="gallery__link video">
	    					<div class="gallery__image">
		    					<img src="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" alt="">
		    					<div class="gallery__frame"></div>
		    				</div>
		    				<h3 class="margin0 regular title">Ret-ret 2017</h3>
							<h3 class="light grey margin0 desc"><i>Lembang Bandung</i></h3>
	    				</a>	    				
					</li>
					<li class="gallery__list">
	    				<a href="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" class="gallery__link image">
	    					<div class="gallery__image">
		    					<img src="<?php bloginfo('template_url'); ?>/dist/images/leaders.jpg" alt="">
		    					<div class="gallery__frame"></div>
		    				</div>
		    				<h3 class="margin0 regular title">Ret-ret 2017</h3>
							<h3 class="light grey margin0 desc"><i>Lembang Bandung</i></h3>
	    				</a>	    				
					</li> -->
					<?php
						$options = of_get_option( 'media-gallery' );
						$field = $options;
						$i = 0;
						if( ! empty( $options ) ){
						    foreach( $options['input'] as $option ){
						        echo '<li class="gallery__list" year="'. $field['input3'][$i] .'">';
						        if($field['input2'][$i] == '' ){
									echo '<a href="'. $field['image'][$i] .'" class="gallery__link" title="'. $field['input'][$i] .'">';
								}else{
									echo '<a href="'. $field['input2'][$i] .'" class="gallery__link" title="'. $field['input'][$i] .'">';
								}
								echo 		'<div class="gallery__image">';
					    		echo 			'<img src="'. $field['image'][$i] .'" alt="">';
					    		echo 			'<div class="gallery__frame"></div>';
					    		echo 		'</div>';
					    		echo 		'<h3 class="margin0 regular title">'. $field['input'][$i] .'</h3>';
								echo 		'<h3 class="light grey margin0 desc"><i>'. $field['textarea'][$i] .'</i></h3>';
								echo 	'</a>';
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
<script src="<?php bloginfo('template_url'); ?>/assets/vendor/magnific-popup/dist/jquery.magnific-popup.js"></script>
<script src="<?php bloginfo('template_url'); ?>/dist/js/media.js"></script>
</html>
		