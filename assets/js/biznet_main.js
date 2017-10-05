var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        widthviewport = w.innerWidth || e.clientWidth || g.clientWidth,
        heightviewport = w.innerHeight || e.clientHeight || g.clientHeight;

// anchorscroll
// http://www.cssscript.com/demo/smooth-scroll-to-animation-with-anchor-scrolling-js-library/
document.addEventListener("DOMContentLoaded", function() {
    "use strict"

    var links = document.querySelectorAll("a.anchorscroll")
    var i = links.length
    var root = /firefox|trident/i.test(navigator.userAgent) ? document.documentElement : document.body
    var easeInOutCubic = function(t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b
    return c/2*((t-=2)*t*t + 2) + b
    }

    while (i--) 
    links.item(i).addEventListener("click", function(e) {
      var startTime
      var startPos = root.scrollTop
      var endPos = document.getElementById(/[^#]+$/.exec(this.href)[0]).getBoundingClientRect().top
      var maxScroll = root.scrollHeight - window.innerHeight
      var scrollEndValue = startPos + endPos < maxScroll ? endPos : maxScroll - startPos
      var duration = 1800 //900
      var scroll = function(timestamp) {
        startTime = startTime || timestamp
        var elapsed = timestamp - startTime
        var progress = easeInOutCubic(elapsed, startPos, scrollEndValue, duration)
        root.scrollTop = progress
        elapsed < duration && requestAnimationFrame(scroll)
      }
      requestAnimationFrame(scroll)
      e.preventDefault()
    }) 
});


$(document).ready(function(){

    // parallax
    // if (widthviewport > 1024){  
    //     // http://callmenick.com/post/advanced-parallax-scrolling-effect
    //     var parallax = document.querySelectorAll(".parallax"),
    //     speed = 0.2;

    //     window.onscroll = function(){
    //         [].slice.call(parallax).forEach(function(el,i){
    //             var windowYOffset = window.pageYOffset,
    //             elBackgrounPos = "50% " + (-(windowYOffset * speed)) + "px";
    //             el.style.backgroundPosition = elBackgrounPos;
    //         });
    //     };
    // }  


    // refresh page when change size
    var width = $(window).width();
    var screen = "";
    if(width < 600){
        screen = "small";
    } else if(width > 601){ screen = "big"; }    
    $(window).resize(function(){
        var cur_width = $(window).width();
        if(cur_width < 600 && screen == "big"){
            location.reload(); 
        } else if(cur_width > 601 && screen == "small"){
            location.reload();
        }
    });


    // input--2
    $(".input--2").click(function(e) {
        $(this).addClass("active").find("input").focus();
    });
    $('.input--2 input').focusout(function(){
        if ($(".input--2 input").val().length !== 0 ){       
            // console.log("has value");         
        }else{
            $(".input--2").removeClass("active");
            // console.log("empty");
        }
    });

    // var optionexpand = document.getElementById('select__expand').options[0].getAttribute('id');
    // console.log(optionexpand);
    // if($("option :selected").attr('id') !== 0){
    //     var optiontoid = $("option :selected").attr('id');
    //     $(".option__expand").hide();
    //     $("#"+optiontoid).show();
    // }

    // magnific popup
    // $('.popup-gallery').magnificPopup({
    //     type: 'image',
    //     tLoading: 'Loading image #%curr%...',
    //     mainClass: 'mfp-qeon',
    //     gallery: {
    //         enabled: true,
    //         navigateByImgClick: true,
    //         preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    //     }
    // });


    // $('.popup-link').magnificPopup({
    //     // Delay in milliseconds before popup is removed
    //     removalDelay: 300,

    //     // Class that is added to popup wrapper and background
    //     // make it unique to apply your CSS animations just to this exact popup
    //     mainClass: 'mfp-qeon'
    // });
    // $('.popup-modal').magnificPopup({
    //     // Delay in milliseconds before popup is removed
    //     removalDelay: 300,
    //     modal: true,
    //     // Class that is added to popup wrapper and background
    //     // make it unique to apply your CSS animations just to this exact popup
    //     mainClass: 'mfp-fade'
    // });
    // $('.popup-video').magnificPopup({
    //     disableOn: 700,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false,
    //     iframe: {
    //        patterns: {
    //            youtube: {
    //                index: 'youtube.com', 
    //                id: 'v=', 
    //                src: '//www.youtube.com/embed/%id%?rel=0&autoplay=1'
    //             }
    //        }
    //    }
    // });


    // // tvguide popup modal
    // $('.open-popup-tvguide').magnificPopup({
    //     items: {
    //         src: '.popup__tvguide',
    //         type: 'inline'
    //     },
    //     // Delay in milliseconds before popup is removed
    //     removalDelay: 300,

    //     // showCloseBtn: true,
    //     // closeBtnInside: true,

    //     // Class that is added to popup wrapper and background
    //     // make it unique to apply your CSS animations just to this exact popup
    //     mainClass: 'mfp-fade',
    //     callbacks: {
            
    //     }
    // });
    // $('.close-popup').on('click', function(){
    //     $.magnificPopup.close();
    // });

    // datepicker
    $('.airdatepicker').datepicker({
        language:"en"
    })


    // selectize
    $('.selectize').selectize({
        create: true,
        sortField: 'text'
    });


    // scrollmagic
    // init controller
    var controller = new ScrollMagic.Controller();
    if (widthviewport > 1024){          
        new ScrollMagic.Scene({triggerElement: ".news__detail-type", triggerHook: "onLeave"}).setClassToggle(".news__share", "sticky") //reverse: false
            // .addIndicators({name: "sticky"})
            .addTo(controller);
    }
    if (widthviewport < 600){          
        new ScrollMagic.Scene({triggerElement: ".footer__socmed", triggerHook: "onEnter"}).setClassToggle(".news__othertopic", "notsticky") //reverse: false
            // .addIndicators({name: "sticky"})
            .addTo(controller);
    }


// jScrollPane
    var isjscrollpane = document.getElementsByClassName('jscrollpane');   
    if (isjscrollpane.length > 0) {
        $('.jscrollpane').jScrollPane();
    }
    $('.customscroll').mCustomScrollbar({
        theme:"dark",
        axis:"y"
    });
    // swiper
    var swiper = new Swiper('.heroimages--swiper .swiper-container', {
        pagination: '.heroimages--swiper .swiper-pagination',
        nextButton: '.heroimages--swiper .swiper-button-next',
        prevButton: '.heroimages--swiper .swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        loop: true,
        autoplay: 4000,
        speed: 1500
    });
    var swiper = new Swiper('.tipstricks--swiper .swiper-container', {
        pagination: '.tipstricks--swiper .swiper-pagination',
        nextButton: '.tipstricks--swiper .swiper-button-next',
        prevButton: '.tipstricks--swiper .swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        loop: true,
        autoplay: 4000,
        speed: 1500,
        onInit: function(swiper){
            if (widthviewport > 768){
                $('.masonry').masonry({
                    itemSelector: '.mgrid'
                });
            }
        }
    });
    if (widthviewport > 980){
        var swiper = new Swiper('.promotion--swiper .swiper-container', {
            nextButton: '.promotion--swiper .swiper-button-next',
            prevButton: '.promotion--swiper .swiper-button-prev',
            effect: 'coverflow',
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 0,
                stretch: 520,
                depth: 220,
                modifier: 1,
                slideShadows : true
            },
            breakpoints: {
                1200: {
                    coverflow: {
                        rotate: 0,
                        stretch: 490,
                        depth: 220,
                        modifier: 1,
                        slideShadows : true
                    }
                }
            }
        });
    }

    // popup
    $(".popup__link").click(function(event) {
        event.preventDefault();
        var tab = $(this).attr("href");
        $(tab).addClass("active");
        $("#body").css("overflow", "hidden");
        if ($(tab).find(".mnavbar")){
            $(".mnavbar").addClass("active");
        }
        if ($(tab).find(".msearchbar")){
            $(".msearchbar").addClass("active");
        }
        else{}
    });
    $(".popup__wrapper, .ico-popupclose").not(".popup__box").click(function(e) {
        $(".popup__wrapper").removeClass("active");
        $("#body").css("overflow", "auto");
    });
        
    // tab
    var tablinkactive_toid = $(".tab__link__li.active .tab__link__a").attr("href");
    $(tablinkactive_toid).show();
    $(".tab__link .tab__link__a").click(function(e){
        e.preventDefault();
        var tablinktoid = $(this).attr("href");
        $(".tab__content").hide();
        $(".tab__link__li").removeClass("active");
        $(this).parent().addClass("active");
        $(tablinktoid).show();
    });
    // tabannouncement
    $(".tab-announcement .tablink__a").click(function(e){
        e.preventDefault();
        var tablinktoid = $(this).attr("href");
        $(".tab-announcement .tabcontent").hide();
        $(".tab-announcement .tablink__a").removeClass("active");
        $(this).addClass("active");
        $(tablinktoid).show();
    });
    // promotion__newsmore
    $(".promotion__newsmore").click(function(e){
        e.preventDefault();
        var tablinktoid = $(this).attr("href");
        $(".promotion__news").removeClass("active");
        $(".tab__link__li").removeClass("active");
        $(".promotion").addClass("loading");        
        setTimeout(function(){
            $(".promotion").removeClass("loading");
            $(this).addClass("active");
            $(tablinktoid).addClass("active");
            $('html,body').animate({scrollTop: ($(tablinktoid).offset().top)+100},1000);
        }, 500);
    });
    // $(".combo__button").click(function(e){  
    //     e.preventDefault();      
    //     if($(".combo__button").hasClass("disabled")){
    //         $(".combo__button").removeClass("disabled").text("ADD TO CART");
    //         $(this).addClass("disabled").text("ADDED TO CART");
    //     }else{
    //         $(this).addClass("disabled").text("ADDED TO CART");
    //     }
    //     $(".service__packages__content").addClass("loading");
    //     setTimeout(function(){
    //         $(".service__option").hide();
    //         $("#service__packages1").removeClass("active").addClass("done");
    //         $("#service__packages1.done .service__packages__link").addClass("anchorscroll");
    //         $("#service__packages2").addClass("active");
    //         $(".service__packages__content").removeClass("loading");
    //     }, 1500);
    // });

    // more
    $(".more-link").click(function(e){
        e.preventDefault();
        var linkmoretoid = $(this).attr("href");
        var gethlm = $(linkmoretoid).height();
        if( $(this).hasClass("active")){
            $(this).removeClass("active");
            var gethtomin = $(this).attr("dataheight");
            $(linkmoretoid).css("cssText","height:"+gethtomin+"px;");
            $(this).find("small b").text("Learn More");
            // console.log(gethtomin);
        }else{
            $(this).addClass("active").attr('dataheight', gethlm);
            $(linkmoretoid).css("cssText","height:auto;");
            $(this).find("small b").text("Hide details");
        }        
    });
    // tab packages
    var packages_toid = $(".homepackages .tab__link__li.active .tab__link__a").attr("href");
    $(packages_toid).css("cssText","opacity:1; visibility:visible; height:initial;");
    $(".internetonly__grid").addClass("animate");
    $(".homepackages .tab__link .tab__link__a").click(function(e){
        e.preventDefault();
        var packages = $(this).attr("href");
        $(".homepackages .tab__content").css("cssText","opacity:0; visibility:hidden; height:0;");
        $(".homepackages .tab__link__li").removeClass("active");
        $(this).parent().addClass("active");
        $(packages).css("cssText","opacity:1; visibility:visible; height:initial;");
        console.log(packages.length);
        if (packages.length == 13){
            if (widthviewport > 1024){
                $(".internettv__grid").removeClass("animate");
                $(".internetonly__grid").addClass("animate");
            }
        }else{
            if (widthviewport > 1024){
                $(".internetonly__grid").removeClass("animate");
                $(".internettv__grid").addClass("animate");
            }
        }
    });


    // header menu sandwitch
    $(".ico-menu--mobile").click(function(){
        if($(".ico-menu--mobile").hasClass("active")){
            $(".ico-menu--mobile, .header__right").removeClass("active");
        }else{
            $(".ico-menu--mobile, .header__right").addClass("active");
        }
    });
    if (widthviewport < 1024){  
        $(".header__li.dropdown").click(function(e){
            e.preventDefault();
            if($(".dropdown__content--mobile", this).hasClass("active")){
                $(this).removeClass("active");
                $(".dropdown__content--mobile", this).removeClass("active");
                $("> .dropdown__content--mobile", this).css("cssText","display:none !important;");
            }else{
                $(this).addClass("active");
                $(".dropdown__content--mobile", this).addClass("active");
                $("> .dropdown__content--mobile", this).css("cssText","display:block !important;");
            }
        });
    }

    // cart mobile
    $(".cart__info").click(function(event) {
        event.preventDefault();
        var carttoopen = $(this).attr("href");
        if($(this).hasClass("active")){
            $("html,body").css("cssText","overflow:initial;");
            $(this).removeClass("active");
            $(carttoopen).hide();
        }else{
            $("html,body").css("cssText","overflow:hidden;");
            $(this).addClass("active");            
            $(carttoopen).show();    
        }

        // $(tab).addClass("active");
        // $("#body").css("overflow", "hidden");
        // if ($(tab).find(".mnavbar")){
        //     $(".mnavbar").addClass("active");
        // }
        // if ($(tab).find(".msearchbar")){
        //     $(".msearchbar").addClass("active");
        // }
        // else{}
    });


    // button loading spinner
    $(".spinner").click(function(e){
        e.preventDefault();
        $(this).addClass("loading");
        $(this).append('<i class="ico-spinner"></i>');
        setTimeout(function(){            
            $(".spinner .ico-spinner").remove();
            $(".spinner").removeClass("loading");
        }, 3000);        
    });
    $('.subscribe-button').on('click', function(e){
        e.preventDefault();
        $('.subscribe-form').addClass('progress');
        $('.msg--success').text('Processing your request...');
        setTimeout(function(){            
            $('.subscribe-form').removeClass('progress').addClass('finish');
            $('.msg--success').text('Successfully subscribed.');
        }, 3000); 
    });
    /*** min max input qty ***/
    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });


    /* ##################### REGISTRATION ##################### */

    /* ========== special header for registration ========= */
    var isregistration = document.getElementsByClassName('registration');
        if (isregistration.length > 0) {
        $(".miniheader, .header").css("cssText", "display:none;");
        $(".header--registration").css("cssText", "display:block;");
        }else{}
    // if (widthviewport > 1024){        
    //     if (isregistration.length > 0) {
    //         $(".header--registration").removeClass("hide");
    //     }else{
    //         $(".miniheader, .header").removeClass("hide");
    //     }
    // }else if (widthviewport < 1025){
    //     $(".header").removeClass("hide");
    //     if (isregistration.length > 0) {
    //         $(".button__register--mobile").css("cssText", "display:none !important;");
    //     }else{}
    // }else if (widthviewport < 601){
    //     if (isregistration.length > 0) {
    //     }else{}
    // }else{}


    /* ========== Registration Step ============ */
    if($(".registration").attr("id")){
        var idtoid = $(".registration").attr("id");
        $(".registration__step__list").removeClass("active");
        $("#step--"+idtoid).addClass("active").prevAll().addClass("done");
    }else{}


    /* ========== check availability ============ */
    // check myaddrs-type
    $(".myaddrs-type").click(function(e){
        var fortoid = $(this).attr("class");
        $('#'+fortoid).show();
    });


    /* ============ package selection ============ */
    // content: order summary
    // order summary dropdown
    $(".myorder__menu__dropdown").click(function(e){
        e.preventDefault();
        var hreftoid = $(this).attr("href");
        if($(hreftoid).hasClass("active")){
            $(this).removeClass("active");
            $(hreftoid).removeClass("active").css('cssText', 'opacity:0; visibility:hidden; height:0;');
            $(".package_selection__content").show();
        }
        else{
            $(this).addClass("active");
            $(".package_selection__content").hide();
            $(hreftoid).addClass("active").css('cssText', 'opacity:1; visibility:visible; height:initial;');
        }
    });


    /* ============ order summary button ============ */
    if($("#service__packages3").hasClass("active")){
        $(".myorder__menu__button").removeClass("hide");
    }else{}


    /* ============ service option ============ */
    $("label[for='service__option1']").click(function(e){
        $("#service__option2__title, #service__option2__detail").hide();
    });
    $("label[for='service__option2']").click(function(e){
        $("#service__option2__title, #service__option2__detail").show();
    });


    /* ============ service__packages ============ */
    $(".service__packages.done .service__packages__link").click(function(e){
        e.preventDefault();
        var parent = ($(this).parent(".service__packages"));
        // console.log(parent);
        $(".service__packages__content").addClass("loading");
        setTimeout(function(){            
            $(".service__packages").removeClass("active");
            $(parent).addClass("active");
            $(".service__packages__content").removeClass("loading");
        }, 1500);
    });


    /* ============ CONTENT : all package for jakarta ============ */
    $(".combo__button").click(function(e){  
        e.preventDefault();      
        if($(".combo__button").hasClass("disabled")){
            $(".combo__button").removeClass("disabled").text("ADD TO CART");
            $(this).addClass("disabled").text("ADDED TO CART");
        }else{
            $(this).addClass("disabled").text("ADDED TO CART");
        }
        $(".service__packages__content").addClass("loading");
        setTimeout(function(){
            $(".service__option").hide();
            $("#service__packages1").removeClass("active").addClass("done");
            $("#service__packages1.done .service__packages__link").addClass("anchorscroll");
            $("#service__packages2").addClass("active");
            $(".service__packages__content").removeClass("loading");
        }, 1500);
    });
    $('.channel__link').click(function(e){
        e.preventDefault();
        var showcontent = $(this).attr("href");
        if($(showcontent).hasClass("active")){
            $(this).text("View Channels");
            $(showcontent).css('cssText', 'visibility:hidden; height:0; padding:0; margin-bottom:0;').removeClass("active");
        }
        else{
            $(this).text("Hide Channels");
            $(showcontent).css('cssText', 'visibility:visible;height:initial; padding:10px; margin-bottom:15px;').addClass("active");
            $('.jscrollpane').jScrollPane();
        }
    });


    /* ============ CONTENT : Voucher and Few Promotions for You ============ */
    $(".promo__button").click(function(e){
        e.preventDefault();      
        if($(".promo__button").hasClass("disabled")){
            $(".promo__button").removeClass("disabled").text("ADD TO CART");
            $(this).addClass("disabled").text("ADDED TO CART");
            $(".continue__equipreq").removeClass("disabled");
        }else{
            $(this).addClass("disabled").text("ADDED TO CART");
            $(".continue__equipreq").removeClass("disabled").addClass("active").attr("href","#body");           
        }
    });
    
    $(".continue__equipreq").click(function(e){ 
        e.preventDefault();
        if ($(".continue__equipreq").hasClass("active")){
            $(".service__packages__content").addClass("loading");
            setTimeout(function(){
                $("#service__packages2").removeClass("active").addClass("done");
                $("#service__packages2.done .service__packages__link").addClass("anchorscroll");
                $("#service__packages3").addClass("active");
                $(".service__packages__content").removeClass("loading");
                $(".myorder__menu__button").show();
            }, 1500);
        }else{}
    });
        

    /* ============ CONTENT : Equipment Request ============ */
    $(".tvunits__option").click(function(e){
        var fortoid = $(this).attr("for");
        $(".tvunits__desc").hide();
        $('#'+fortoid+'__desc').show();
        $(".tvunits__radio").attr('checked',false).removeClass("checked");
        $(this).prev().attr('checked',true).addClass("checked");
    });
    $(".additionalquestion__label").click(function(e){
        $(".additionalquestion__radio").attr('checked',false).removeClass("checked");
        $(this).prev().attr('checked',true).addClass("checked");
        if($(this).is("[for='addacc2']")){
            $(".additionalwireless, #cablerange").show();
        }else{
            $(".additionalwireless, #cablerange").hide();
        }
    });


    /* ============ CONTENT : Order Summary mobile ============ */
    $(".button--toordersummary").click(function(e){
        e.preventDefault();
        $(".service__packages__content").addClass("loading");
        setTimeout(function(){
            $(".service__packages__content").removeClass("loading");
            $("#service__packages3").hide();
            $("#service__packages--ordersummary").show();
        }, 1500);
    });   


    /* ============ PAYMENT SELECTION : myorder button ============ */
    var ispayselect = document.getElementById('payment_selection');    
    if ($(".registration[id=payment_selection]").length > 0) {
        $(".myorder__menu__button").attr("href","registration-order_confirmation").find('small').text("CHECKOUT");
    }else{}


    /* ============ ORDER CONFIRMATION : SMS verification code ============ */
    $(".order_summary__button--mobile").click(function(e){
        e.preventDefault();
        var linktoid = $(this).attr("href");
        $("#order_confirmation").hide();
        $(linktoid).show();
    });


    /* ============ ORDER SUMMARY : Payment Selection ============ */
    if($(".registration").attr("id")){
        var idtoid = $(".registration").attr("id");
        $(".registration__step__list").removeClass("active");
        $("#step--"+idtoid).addClass("active").prevAll().addClass("done");
    }else{}

    /* ============ ACCOUNT : voucher equipment ============== */
    $(".account .additionalquestion__label").click(function(e){
        $(".account .additionalquestion__radio").attr('checked',false).removeClass("checked");
        $(this).prev().attr('checked',true).addClass("checked");
        if($(this).is("[for='addacc_ve2']")){
            $(".account .additionalwireless, .account #cablerange").show();
        }else{
            $(".account .additionalwireless, .account #cablerange").hide();
        }
});
});



$(document).scroll(function() {
    if( $(body).scrollTop() > 138 ){
        var isregistration = document.getElementsByClassName('registration');
        if (widthviewport > 600){
            if (isregistration.length > 0) {
                var isscrolltop = $(body).scrollTop();
                $(".package_selection__myorder").addClass("sticky");
                // console.log(isscrolltop)
            }else{}
        }else{}
    }
    else{
        $(".package_selection__myorder").removeClass("sticky");
    }
});



$(document).on('click', '.tooltip-open', function(){
    $('.tooltip__wrap').removeClass('active');
    $(this).parents('.tooltip__wrap').addClass('active');

    if (($(this).find(".tooltip-withbutton").left() + $(this).find(".tooltip-withbutton").width()) >= $(window).width()) {
       alert("div is outside the window area");
    }
});
$(document).on('click', '.tooltip-close', function(){
    $(this).parents('.tooltip__wrap').removeClass('active');
});

$(document).on('click', '.expand-trigger', function(){
    if(!$(this).hasClass('expanded')){
        console.log('open');
        $(this).parents('.expand-parent').find('.expand-content').slideDown(400);
        $(this).addClass('expanded');
    }
    else{
        console.log('close');
        $(this).parents('.expand-parent').find('.expand-content').slideUp(400);
        $(this).removeClass('expanded');
    }
});

$(document).on('click', '.link-trigger', function(){
    var id = $(this).attr('id');
    $('#'+ id + '-content').fadeIn(700);
    $('.link-trigger').removeClass('active');
    $(this).addClass('active');
    $('.link-trigger-content').not($('#'+ id + '-content')).hide();
});

if($('.link-trigger').hasClass('active')){
    $('#'+ $('.link-trigger.active').attr('id') + '-content').show();
}else{}


var iscontactus = document.getElementsByClassName('contact-us');   
if (iscontactus.length > 0) {
    if (widthviewport > 768){
        $(document).ready(function() {
            masonry();
        });
        $(document).on('click', '.link-trigger', function(){
            masonry();
        });
        $(document).on('click', '.expand-trigger', function(){
            masonry(600);

            if($(this).hasClass('expanded')){
                $(this).find('small').text('Hide Address')
            }
            else{
                $(this).find('small').text('Show Address')   
            }
        });
    }
}

function masonry(delay)
{
  if(delay==0) {
    $('.masonry').masonry({
      "itemSelector": ".mgrid"
    });
  }
  else {
    setTimeout(function() {
      $('.masonry').masonry({
        "itemSelector": ".mgrid"
      });
    }, delay);
  }
}

if (widthviewport < 1025){
    $(document).ready(function() {
        // swiper
        var swiperInternettv = new Swiper('.homepackage--slider--internettv .swiper-container', {
            pagination: '.homepackage--slider--internettv .swiper-pagination',
            paginationClickable: true,
            slidesPerView: 'auto',
            loop: false,
            breakpoints: {
                600: {
                    centeredSlides: true
                }
            }
        });
        var swiperInternetonly = new Swiper('.homepackage--slider--internetonly .swiper-container', {
            pagination: '.homepackage--slider--internetonly .swiper-pagination',
            paginationClickable: true,
            slidesPerView: 'auto',
            loop: false,
            breakpoints: {
                600: {
                    centeredSlides: true,
                    initialSlide:1
                }
            }
        });        

        $('.homepackages .tablink__a').on('click', function(){
            var tabID = $(this).attr("href");
            if($('#tab--internetonly').parent().hasClass('active')){
                console.log('internetonly');
                swiperInternettv.update();
            }
            else if($('#tab--internettv').parent().hasClass('active')){
                console.log('internettv');
                swiperInternetonly.update();
            }

        });



        $('.dropdown__fortabcontent').change(function(){
            console.log('change');
            $('#' + $(this).val() + '-content').fadeIn(400);
            $('.link-trigger-content').not($('#'+ $(this).val() + '-content')).hide();
        });
    });
}


// infinite scroll
$(document).ready(function(){
    // getdatagrid();
    scrollalert();
    // new AnimOnScroll( document.getElementById( 'grid' ), {
    //     minDuration : 0.4,
    //     maxDuration : 0.7,
    //     viewportFactor : 0.2
    // }); 
    // just check data url
    /*$("button").click(function(){
        console.log("test");
        $.get("/js/tips_tricks-newslist.html", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    }); */
    // var controller = new ScrollMagic.Controller();  
    // var scene = new ScrollMagic.Scene({triggerElement: ".footer__menu", triggerHook: "onEnter"})
    //     .addTo(controller)
    //     .on("enter", function (e) {
    //         if (!$("#loader").hasClass("active")) {
    //             $("#loader").addClass("active");
    //             if (console){
    //                 console.log("loading new items");
    //             }
    //             // simulate ajax call to add content using the function below
    //             setTimeout(getdatagrid, 0, 5);                
    //         }
    //     });
}); 

function updatestatus(){
    //Show number of loaded items
    var totalItems=$('#grid .tipstricks__grid').length;
    // $('#loader').text('Loaded '+totalItems+' Items');
    $('#loader').text('Scroll to load more');
}

function getdatagrid(){
    var istipstricks = document.getElementsByClassName('tipstricks');   
    if (istipstricks.length > 0) {
        $.get('/js/tips_tricks-newslist.html', '', function(newitems){
            $('#grid').append(newitems);
            $('.tipstricks__grid').addClass('animate');
            new AnimOnScroll( document.getElementById( 'grid' ),{
              minDuration : 0.4,
              maxDuration : 0.7,
              viewportFactor : 0.5
            });
        });
    }
}

function scrollalert(){
    // first time load
    var lengthdata = 8;
    for (i = 0; i < lengthdata; i++) {
        getdatagrid();
    }
    // after scroll got bottom
    $(window).scroll(function() {
        var getfooterh = $(".footer__socmed").height()+$(".footer__menu").height()+$(".footer__copyright").height();
        var getscrollbottom = $(window).scrollTop() + $(window).height() == $(document).height();
        if($(window).scrollTop() + ($(window).height()+getfooterh) >= $(document).height()) {
            // ajax call get data from server and append to the div
            // fetch new items            
            console.log(($(window).height()+getfooterh)+"x"+$(document).height());
            $('#loader').text('Loading more news...');

            var counter = 0;
            var i = setInterval(function(){
                getdatagrid();
                counter++;
                if(counter === 3) {
                    clearInterval(i);
                    setTimeout(updatestatus, 1000);
                }
            }, 600);
        }else{}
    });
}

var istvguide = document.getElementsByClassName('tvguide');   
if (istvguide.length > 0) {

    ;(function($) {

        $.fn.tvguideFilter = function(options) {
            var settings = $.extend({
            }, options || {});

            var menu = this;

            menu.addClass('tv-menu');

            function openMenu() {
                $('.tv-menu').removeClass('open');
                menu.addClass('open');
                menu.children().show();
                $(document).on('click.tv-menu', closeMenu);
                $(document).on('keydown.tv-menu', function(event) {
                    switch (event.keyCode) {
                        case 27:
                        return closeMenu();
                        case 38:
                        focusSiblingLink(-1);
                        return false;
                        case 40:
                        focusSiblingLink(1);
                        return false;
                    }
                });
                menu.trigger('tvmenu:open');
            }

            function focusSiblingLink(indexIncrement) {
                var activeElement = $(document.activeElement);
                if (activeElement.is(menu.find('a'))) {
                    var menuItems = menu.find('li'),
                    index = menuItems.index(activeElement.parent());
                    menuItems.eq(index + indexIncrement).find('a').focus();
                }
            }

            function closeMenu() {
                menu.removeClass('open');
                $(document).off('.tv-menu');
                return false;
            }

            menu.find('a').click(function() {
                if (menu.hasClass('open')) {
                    closeMenu();
                    return true;
                } else {
                    openMenu();
                    return false;
                }
            });

            // var widestItem = _.max(this.find('li'), function(item) {
            //     return $(item).width();
            // });
            return menu;
        };

    })(jQuery);


    var timetable = new Timetable();
    timetable.setScope(0,23)
    // timetable.addLocations('Rotterdam2','srcroterdam2','srcdescription2');
    var renderer = new Timetable.Renderer(timetable);
    renderer.draw('.timetable');

    
    $('#filter-cat').tvguideFilter();
}