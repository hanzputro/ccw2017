<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Creative City Worship</title>
    <!-- <title><?php wp_title( '|', true, 'right' ); ?></title> -->
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
    <!-- <meta name="author" content="" />
    <meta name="keywords" content="" />  -->
    <link rel="icon" type="image/png" href="<?php bloginfo('template_url'); ?>/dist/images/favicon.png">
    
    <?php wp_head(); ?>    
</head>

<body>
    
    <div class="container header">
        <div class="container1600">
            <div class="logo"><a href="<?php echo site_url(); ?>"><img src="<?php bloginfo('template_url'); ?>/dist/images/logo-ccw-black.png" alt=""></a></div>
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