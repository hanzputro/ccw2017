<?php get_header(); ?>

<!-- specific page -->
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/dist/css/home.css">

<!-- hijacking: on/off - animation: none/scaleDown/rotate/gallery/catch/opacity/fixed/parallax -->
<?php    
    $node = new SimpleXMLElement('<body/>');
    $node->addAttribute("data-hijacking", 'off');
    $node->addAttribute("data-animation", 'none');
    echo $node->asXML();
?>
    <div class="section-page" id="section_page">        
        <section class="cd-section visible" id="section1">                        
            <div class="section-cover">                
                <style>
                    #section1 .section-cover{
                        background-image: url('<?php echo of_get_option('home-sec1-bg'); ?>');
                    }
                </style>
                <!-- section1:header -->
                <div class="container header white">
                    <div class="container1600">
                        <div class="logo"><a href="<?php echo site_url(); ?>"><img src="<?php bloginfo('template_url'); ?>/dist/images/logo-ccw.png" alt=""></a></div>
                        <div class="navbar">
                            <ul class="medium">
                                <li><a href="<?php echo site_url(); ?>/who-we-are" class="">ABOUT US</a></li>
                                <li><a href="#notset" class="">CONNECT</a></li>
                                <li>
                                    <div class="ico-menu">
                                        <div class="ico-menu__line ico-menu__line1"></div>
                                        <div class="ico-menu__line ico-menu__line2"></div>
                                        <div class="ico-menu__line ico-menu__line3"></div>
                                    </div>
                                    <div class="ico-menu__content">
                                        <ul>
                                            <li class="active">
                                                <a class="">ABOUT US</a>
                                                <ul class="ico-menu__submenu">
                                                    <li><a href="<?php echo site_url(); ?>/who-we-are">Who We Are</a></li>
                                                    <li><a href="<?php echo site_url(); ?>/service">Services</a></li>
                                                    <li><a href="<?php echo site_url(); ?>/The-leaders">Our Leaders</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="<?php echo site_url(); ?>/ministry" class="">MINISTRY</a></li>
                                            <li><a href="<?php echo site_url(); ?>/media" class="">MEDIA</a></li>
                                            <li><a href="<?php echo site_url(); ?>/contact" class="">CONTACT</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cd-section" id="section2">
            <div class="section-cover">
                <div class="section grid" id="section-cover2">
                    <div class="span6">
                        <div class="thumb">
                            <img class="" src="<?php echo of_get_option('home-sec2-img'); ?>" alt="">
                            <div class="splash"></div>
                        </div>                    
                    </div>
                    <div class="span6 section__content">
                        <h1 class="linetitle s50 merriweather bold"><?php echo of_get_option('home-sec2-title'); ?></h1>
                        <p class="s30"><?php echo of_get_option('home-sec2-desc'); ?></p>
                        <nav class="tablink">
                            <ul>
                                <li class=""><a href="<?php echo site_url(); ?>/who-we-are"><h1 class="margin0">About Us</h1></a></li>
                                <li class=""><a href="<?php echo site_url(); ?>/media"><h1 class="margin0">Music</h1></a></li>
                                <li class=""><a href="<?php echo site_url(); ?>/who-we-are"><h1 class="margin0">Vision</h1></a></li>
                            </ul>
                        </nav>                    
                    </div>
                </div>
            </div>
        </section>

    </div>

</body>

<!-- JS -->
<?php wp_footer(); ?>
<script src="<?php bloginfo('template_url'); ?>/dist/js/home.js"></script>

</html>