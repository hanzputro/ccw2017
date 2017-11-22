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
	            <nav class="tablink center">
	                <ul>
	                    <li class=""><a href="#notset"><h2 class="margin0">Who We Are</h2></a></li>
	                    <li class="active"><a href="#notset"><h2 class="margin0">Service</h2></a></li>
	                    <li class=""><a href="#notset"><h2 class="margin0">The Leaders</h2></a></li>
	                </ul>
	            </nav>                    
	        </div>
		</div>        
    </div>    
	
	<div class="container940" id="section2">
    	<div class="container__content grid">
    		<div class="span12 center">
	            <h1 class="s50 merriweather bold margin0">Our Services</h1>
	            <hr class="hr55">
	            <p class="margin0 s30 myriadpro purple">Kami punya ibadah hari minggu, Ibadah anak-anak atau Creative Kids dan Creative Community</p>
                <br>
                <br>
            </div>
    	</div>         
	</div>

    <div class="container1600" id="section3">
        <div class="container__content grid">            
            <div class="span6 section__content">                
                <h1 class="linetitle s50 merriweather bold">Sunday Service</h1>
                <h2 class="s20 grey">Artotel-Thamrin<br>Every Sunday at 10AM</h2>
                <p class="s20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non augue ligula. Nulla elit ligula, cursus aliquet sagittis ut, pharetra a mi. Donec dignissim nibh nulla, non laoreet ante laoreet id. Donec sed lacinia risus.
, auctor egestas dolor. Aliquam ipsum ex, aliquam ac nisl at, congue venenatis lacus. Aliquam id lectus sit amet nisi pharetra scelerisque non eget ipsum. Fusce quis justo vel erat hendrerit posuere sit amet et augue.</p>                    
            </div>
            <div class="span6">
                <div class="thumb animate">
                    <div class="slider">
                        <div class="slide-bg">
                            <div data-slide="0" data-link="link_aaa" class="slide" style="background-image: url(<?php bloginfo('template_url'); ?>/dist/images/home/section2-thumb.jpg);"></div>
                            <div data-slide="1" data-link="link_bbb" class="slide" style="background-image: url(<?php bloginfo('template_url'); ?>/dist/images/home/section2-thumb.jpg);"></div>
                            <div data-slide="2" data-link="link_ccc" class="slide" style="background-image: url(<?php bloginfo('template_url'); ?>/dist/images/home/section2-thumb.jpg);"></div>                    
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
                <li><a href=""><h5 class="margin0 merriweather">Creative Community</h5></a></li>
                <li><a href=""><h5 class="margin0 merriweather">Services</h5></a></li>
                <li><a href=""><h5 class="margin0 merriweather">Get Connected</h5></a></li>
            </ul>
        </div>
    </div>
	
</body>

<!-- JS -->
<?php wp_footer(); ?>

</html>
		