<?php get_header(); ?>

<!-- specific page -->
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/dist/css/home.css">

<!-- hijacking: on/off - animation: none/scaleDown/rotate/gallery/catch/opacity/fixed/parallax -->
<?php    
    $node = new SimpleXMLElement('<body/>');
    $node->addAttribute("data-hijacking", 'on');
    $node->addAttribute("data-animation", 'catch');
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
                <div class="section container1600 center" id="section-cover1">
                    <h1 class="light white">CREATIVE CITY WORSHIP</h1>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="830px" height="460px" viewBox="0 0 830 460" enable-background="new 0 0 830 460" xml:space="preserve">
                        <rect x="404" y="10" fill="none" width="444" height="234.424"></rect>
                        <text transform="matrix(1 0 0 1 123.251 156.5786)" fill="#FFFFFF" fill-opacity="0" stroke="#FFFFFF" stroke-width="1.5" font-family="'LemonTuesday'" font-size="159.93">Heart</text>
                        <text transform="matrix(1 0 0 1 575.8027 146.5786)" fill="#FFFFFF" fill-opacity="0" stroke="#FFFFFF" stroke-width="1.5" font-family="'LemonTuesday'" font-size="159.93"> Of</text>
                        <text transform="matrix(1 0 0 1 -6.6396 385)" fill="#FFFFFF" fill-opacity="0" stroke="#FFFFFF" stroke-width="1.5" font-family="'LemonTuesday'" font-size="245">Worship</text>
                    </svg>                
                </div>
                <div class="ico-scrolldown"></div>        
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
                                <li class=""><a href="#notset"><h1 class="margin0">About Us</h1></a></li>
                                <li class=""><a href="#notset"><h1 class="margin0">Music</h1></a></li>
                                <li class=""><a href="#notset"><h1 class="margin0">Vision</h1></a></li>
                            </ul>
                        </nav>                    
                    </div>
                </div>
            </div>
        </section>

        <section class="cd-section" id="section3">
            <div class="section-cover">
                <div class="slider">
                    <div class="slide-bg">
                        <!-- <div data-slide="0" data-link="link_aaa" class="slide" style="background-image: url(<?php bloginfo('template_url'); ?>/dist/images/home/bg-section3.jpg);"></div>
                        <div data-slide="1" data-link="link_bbb" class="slide" style="background-image: url(<?php bloginfo('template_url'); ?>/dist/images/home/bg-section3.jpg);"></div>
                        <div data-slide="2" data-link="link_ccc" class="slide" style="background-image: url(<?php bloginfo('template_url'); ?>/dist/images/home/bg-section3.jpg);"></div> -->
                        <?php
                            $options = of_get_option( 'home-sec3-newsslider' );
                            $field = $options;
                            $i = 0;
                            if( ! empty( $options ) ){
                                foreach( $options['input'] as $option ){
                                    echo '<div data-slide="'.$i.'" data-link="" class="slide" style="background-image: url('. $field['image'][$i] .');"></div>';

                                    $i++;
                                }
                            }
                        ?>
                    </div>
                    <div class="slide-caption">
                        <!-- <div class="slide">
                            <h1 class="s38 merriweather bold linetitle">Sunday Service</h1>
                            <p class="margin0 s24">Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod tempor incididunt ut labore et dolore magna alia. Ut enim ad minim veniam, quis nostrud.</p>
                        </div>
                        <div class="slide">
                            <h1 class="s38 merriweather bold linetitle">Creative Kids</h1>
                            <p class="margin0 s24">Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod tempor incididunt ut labore et dolore magna alia. Ut enim ad minim veniam, quis nostrud.</p>
                        </div>
                        <div class="slide">
                            <h1 class="s38 merriweather bold linetitle">Creative Community</h1>
                            <p class="margin0 s24">Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod tempor incididunt ut labore et dolore magna alia. Ut enim ad minim veniam, quis nostrud.</p>
                        </div> -->
                        <?php
                            $options = of_get_option( 'home-sec3-newsslider' );
                            $field = $options;
                            $i = 0;
                            if( ! empty( $options ) ){
                                foreach( $options['input'] as $option ){
                                    echo '<div class="slide">';
                                    echo '    <h1 class="s38 merriweather bold linetitle">'. $field['input'][$i] .'</h1>';
                                    echo '    <p class="margin0 s24">'. $field['textarea'][$i] .'</p>';
                                    echo '</div>';

                                    $i++;
                                }
                            }
                        ?>
                    </div>
                    <nav class="clearfix slide__nav">
                        <div class="read-more">
                            <a href="" class="clearfix read-more__link">
                                <div class="ico-plus">+</div>
                                <h1 class="s24 merriweather italic">READ MORE</h1>
                            </a>
                        </div>
                        <ul>
                            <!-- <li class="slick-current"><a href="javascript:void(0);" data-slide="0" class="s16 merriweather customPaging">SUNDAY SERVICE</a></li>
                            <li class=""><a href="javascript:void(0);" data-slide="1" class="s16 merriweather customPaging">CREATIVE KIDS</a></li>
                            <li class=""><a href="javascript:void(0);" data-slide="2" class="s16 merriweather customPaging">CREATIVE COMMUNITY</a></li> -->
                            <?php
                            $options = of_get_option( 'home-sec3-newsslider' );
                            $field = $options;
                            $i = 0;
                            if( ! empty( $options ) ){
                                foreach( $options['input'] as $option ){
                                    echo '<li class=""><a href="javascript:void(0);" data-slide="'. $i .'" class="s16 merriweather customPaging">'. $field['input'][$i] .'</a></li>';

                                    $i++;
                                }
                            }
                        ?>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section class="cd-section" id="section4">
            <div class="section-cover">
                <div class="section">
                    <h1 class="s50 merriweather bold linetitle"><?php echo of_get_option('home-sec4-title'); ?></h1>
                    <p class="margin0 s24"><?php echo of_get_option('home-sec4-desc'); ?></p>
                    <ul class="news">
                        <!-- <li class="news__list">
                            <div class="splash2"></div>
                            <a href="">
                                <img src="<?php bloginfo('template_url'); ?>/dist/images/home/section4-thumb1.jpg" alt="" class="thumb">
                                <div class="caption">
                                    <span class="s28 merriweather bold date"><span class="s60">12</span><br>AUG</span>
                                    <span class="s20 light title light">MEN'S MEETING</span>
                                </div>
                            </a>
                        </li>
                        <li class="news__list">
                            <a href="">
                                <img src="<?php bloginfo('template_url'); ?>/dist/images/home/section4-thumb2.jpg" alt="" class="thumb">
                                <div class="caption">
                                    <span class="s28 merriweather bold date"><span class="s60">12</span><br>NOV</span>
                                    <span class="s20 light title light">CCW'S ANNIVERSARY</span>
                                </div>
                            </a>
                        </li>
                        <li class="news__list">
                            <div class="splash3"></div>
                            <a href="">
                                <img src="<?php bloginfo('template_url'); ?>/dist/images/home/section4-thumb3.jpg" alt="" class="thumb">
                                <div class="caption">
                                    <span class="s28 merriweather bold date"><span class="s60">12</span><br>NOV</span>
                                    <span class="s20 light title light">COFFEE WORKSHOP</span>
                                </div>
                            </a>
                        </li> -->
                        <?php
                            $options = of_get_option( 'home-sec4-news' );
                            $field = $options;
                            $i = 0;
                            if( ! empty( $options ) ){
                                foreach( $options['input'] as $option ){
                                    echo '<li class="news__list">';
                                    if ($i == 0){
                                        echo '<div class="splash2"></div>';
                                    }
                                    else if ($i == 2){
                                        echo '<div class="splash3"></div>';
                                    }
                                    echo     '<a href="">';
                                    echo         '<img src="'. $field['image'][$i] .'" alt="" class="thumb">';
                                    echo         '<div class="caption">';
                                    echo             '<span class="s28 merriweather bold date"><span class="s60">12</span><br>NOV</span>';
                                    echo             '<span class="s20 light title light">'. $field['input'][$i] .'</span>';
                                    echo         '</div>';
                                    echo     '</a>';
                                    echo '</li>';

                                    $i++;
                                }
                            }
                        ?>
                    </ul>
                </div>
            </div>
        </section>

        <section class="cd-section" id="section5">
            <div class="section-cover">
                <div class="section grid">
                    <div class="span6 contact__caption">
                        <h1 class="s50 merriweather bold linetitle"><?php echo of_get_option('home-sec5-title'); ?></h1>
                        <p class="margin0 s24 myriadpro"><?php echo of_get_option('home-sec5-desc'); ?></p>
                        <!-- <br>
                        <ul>
                            <li><a href="" class="s18 italic"><i class="ico-email"></i>creativecityworship@gmail.com</a></li>
                            <li><a href="" class="s18 italic"><i class="ico-instagram"></i>@creativecityworship</a></li>
                        </ul> -->
                    </div>
                    <div class="span6 contact__map">
                        <iframe class="map" id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.564300037044!2d106.82254131535889!3d-6.189010995519481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f425cc5f2945%3A0x7bb495c84a711172!2sARTOTEL+THAMRIN-JAKARTA!5e0!3m2!1sen!2sid!4v1507702707895" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
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
            </div>            
        </section>
    </div>

</body>

<!-- JS -->
<?php wp_footer(); ?>
<script src="<?php bloginfo('template_url'); ?>/dist/js/home.js"></script>

</html>