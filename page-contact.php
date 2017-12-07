<?php
/*
Template Name: Contact Page
*/
?>
<?php get_header(); ?>

<!-- specific page -->
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/dist/css/contact.css">


	<div class="containerfull" id="section1">
		<iframe class="map" id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.564300037044!2d106.82254131535889!3d-6.189010995519481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f425cc5f2945%3A0x7bb495c84a711172!2sARTOTEL+THAMRIN-JAKARTA!5e0!3m2!1sen!2sid!4v1507702707895" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>    
	
    <div class="container1600" id="section2">
        <div class="container__content grid">
            <div class="span6 section__content">
                <h1 class="linetitle s40 merriweather bold"><?php echo of_get_option('contact-title'); ?></h1>
                <h2 class="s20 light"><i><?php echo of_get_option('contact-desc'); ?></i></h2>                    
            </div>
            <div class="span6" id="respond">                
                <form action="<?php the_permalink(); ?>" id="emailform" method="post">
                	<div class="container480" cellpadding="5">
                        <?php echo $response; ?>
                		<div class="field">
                			<span width="50" class="title">Name</span>
                			<span align="center" width="50" class="separator">:</span>
                			<input type="text" name="message_name" value="<?php echo esc_attr($_POST['message_name']); ?>">
                		</div>
                		<div class="field">
                			<span width="50" class="title">Email</span>
                			<span align="center" width="50" class="separator">:</span>
                			<input type="text" name="message_email" value="<?php echo esc_attr($_POST['message_email']); ?>">
                		</div>
                		<div class="field">
                			<span width="50" class="title">Phone</span>
                			<span align="center" width="50" class="separator">:</span>
                			<input type="text" name="phone" value="<?php echo esc_attr($_POST['phone']); ?>">
                		</div>
                		<div class="field">
                			<span width="50" class="title">Message</span>
                			<span align="center" width="50" class="separator">:</span>
                			<textarea type="text" rows="4" name="message_text"><?php echo esc_textarea($_POST['message_text']); ?></textarea>
                		</div>
                        <div class="field" style="padding-left:85px;">
                            <!-- google capthca -->
                            <div id="recaptcha" class="g-recaptcha" data-sitekey="6LcJBTwUAAAAADCC5gDvAplHmwKMnUxsNS_Gnm1l"></div>
                        </div>
                		<div class="field" style="padding:10px 0 0 85px;">
                            <input type="submit" class="button button--purple send--button" name="send--button" value="SUBMIT">
                            <!-- <a class="button button--purple send--button" name="send--button">SUBMIT</a> -->
                		</div>
                	</div>
                </form>

                <script src='https://www.google.com/recaptcha/api.js'></script>
                <script type="text/javascript">
                    $( '.send--button' ).click(function(){
                        var $captcha = $( '#recaptcha' ),
                        response = grecaptcha.getResponse();
                        if (response.length === 0) {
                            console.log('Recaptcha Error');
                            // $captcha.attr('verify','0');
                            document.cookie = "cookieName=0";
                        } else {
                            console.log('Recaptcha Success');
                            // $captcha.attr('verify','1');
                            document.cookie = "cookieName=1";
                        }
                    })
                </script>

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


<script src="<?php bloginfo('template_url'); ?>/dist/js/contact.js"></script>
</html>
		