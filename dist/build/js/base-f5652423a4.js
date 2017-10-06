var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        widthviewport = w.innerWidth || e.clientWidth || g.clientWidth,
        heightviewport = w.innerHeight || e.clientHeight || g.clientHeight;
        
$(document).ready(function(){

    // refresh page when change size
    // var width = $(window).width();
    // var screen = "";
    // if(width < 600){
    //     screen = "small";
    // } else if(width > 601){ screen = "big"; }    
    // $(window).resize(function(){
    //     var cur_width = $(window).width();
    //     if(cur_width < 600 && screen == "big"){
    //         location.reload(); 
    //     } else if(cur_width > 601 && screen == "small"){
    //         location.reload();
    //     }
    // });

    var heightfa = heightviewport;
    if (widthviewport < 678){
        heightfa = (heightfa - 77);
    }
    $('.favideo, .fabanner').css('height', heightfa);

    function setHeightImg(){
        // $("img").load(function(){
            var heightimg = $(".heroimages--swiper img").height();
            if (heightimg > heightfa){
                $(".heroimages--swiper img").css('cssText','height:100%;');
            }else{}
        // });
    }
    setHeightImg();
    

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


    // bg responsive
    // if (widthviewport > 768){
    //     $(".bg-responsive").each(function(){
    //         var getbg_d = $(this).attr("bg-d");
    //         $(this).css("cssText","background-image:url("+getbg_d+")");
    //     });
    // }else{
    //     $(".bg-responsive").each(function(){
    //         var getbg_m = $(this).attr("bg-m");
    //         $(this).css("cssText","background-image:url("+getbg_m+")");
    //     });
    // }


    // miniheader li active
    $(".miniheader .dropdown").click(function(e){
        if ($(this).hasClass("active") ){
            $(this).removeClass("active");       
        }else{
            $(".miniheader .dropdown").removeClass("active");
            $(this).addClass("active");
        }
    });
    $(".miniheader .dropdown, .dropdown__content").click(function(e){
        e.stopPropagation();
    });
    $("body").click(function(e){
        $(".miniheader .dropdown").removeClass("active");
    });

    // parallax
    var ishomepackages = document.getElementsByClassName('homepackages');   
    if (ishomepackages.length > 0) {
        var scene = (document).getElementById('scene');
        var parallax = new Parallax(scene);
        Parallax.prototype.enable = function() {
            if (!this.enabled) {
                this.enabled = true;
                if (this.orientationSupport) {
                    this.portrait = null;
                    window.addEventListener('deviceorientation', this.onDeviceOrientation);
                    setTimeout(this.onOrientationTimer, this.supportDelay);
                } else {
                    this.cx = 0;
                    this.cy = 0;
                    this.portrait = false;
                    document.getElementById('areascene').addEventListener('mousemove', this.onMouseMove);
                }
                window.addEventListener('resize', this.onWindowResize);
                this.raf = requestAnimationFrame(this.onAnimationFrame);
            }
        };
    }

    
    // magnific popup
    $('.popup-gallery').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-qeon',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        }
    });


    $('.popup-link').magnificPopup({
        // Delay in milliseconds before popup is removed
        removalDelay: 300,

        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-qeon'
    });
    $('.popup-modal').magnificPopup({
        // Delay in milliseconds before popup is removed
        removalDelay: 300,
        modal: true,
        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
    });
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
           patterns: {
               youtube: {
                   index: 'youtube.com', 
                   id: 'v=', 
                   src: '//www.youtube.com/embed/%id%?rel=0&autoplay=1'
                }
           }
       }
    });


    // tvguide popup modal
    $('.open-popup-tvguide').magnificPopup({
        items: {
            src: '.popup__tvguide',
            type: 'inline'
        },
        // Delay in milliseconds before popup is removed
        removalDelay: 300,

        // showCloseBtn: true,
        // closeBtnInside: true,

        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade',
        callbacks: {
            
        }
    });
    
    $('.close-popup').on('click', function(){
        $.magnificPopup.close();
    });

    // airdatepicker    
    $('.airdatepicker').datepicker({
        language:"en",
        dateFormat: "dd-MM-yyyy",
        onSelect: function onSelect(fd, date) {
            var title = '', content = ''
            // If date with event is selected, show it
            $("#datepickers-container").addClass("active");
            $(".airdatepicker").parent().removeClass("input--error, input--error2");
            if ($("#datepickers-container .datepicker").hasClass("active")) {
                $("#datepickers-container .datepicker").removeClass("active");

            }
        }
    })

    $('body').on('click', function(e){
        if ($("#datepickers-container .datepicker").hasClass("active")) {
            $("#datepickers-container .datepicker").removeClass("active");
        }
    });
    $('.airdatepicker, .datepicker--nav, .datepicker--content').on('click', function(e){
        e.stopPropagation();
    });


    // selectize
    var $select = $('.selectize').selectize({
        create: true
    });
    if($select.length)
    {
        var selectize = $select[0].selectize;
        selectize.on('focus', function(){
            $('.selectize-control').find("input").attr('readonly',1);
        })    
    }
    $('.roadshow-calendar-selectize').selectize({
        create: true,
    }).on('change', function(){
        var id = $(this).val();
        console.log(id);
        $('#content-' + id).fadeIn(300);
        $('.m-roadshow-calendar--content').not($('#content-' + id)).hide();
    });;

    // chosen
    $(".chosen-search").chosen({
        width:"100%"
    });
    $(".chosen").chosen({
        disable_search: true,
        width:"100%"
    });
    $(".roadshow-calendar-chosen").chosen({
        disable_search: true,
        width:"100%",

    }).change(function(){
        var id = $(this).val();
        $('#content-' + id).fadeIn(300);
        $('.m-roadshow-calendar--content').not($('#content-' + id)).hide();
    });


    // jScrollPane
    var isjscrollpane = document.getElementsByClassName('jscrollpane');   
    if (isjscrollpane.length > 0) {
        $('.jscrollpane').jScrollPane();
    }
    var iscustomscroll = document.getElementsByClassName('customscroll');   
    if (iscustomscroll.length > 0) {
        $('.customscroll').mCustomScrollbar({
            theme:"dark",
            axis:"y"
        });
    }

    $('.slimscroll').slimScroll({
        railVisible: false,
        alwaysVisible: true,
        railOpacity: 1,
        railColor: '#EAEAEA'
    });


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
            $('html,body').animate({scrollTop: ($(tablinktoid).offset().top)},1000);
        }, 500);
    });


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
        // console.log(packages.length);
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
    // if (widthviewport <= 1024){  
        $(".header__li.dropdown .dropdown__span").click(function(e){
            e.preventDefault();
            // var parent = $(this).parent(".dropdown");
            if($(".header__right").hasClass("active")){
                if($(this).next().hasClass("active")){
                    $(this).parent().removeClass("active");
                    $(this).next().removeClass("active").css("cssText","display:none !important;");
                }
                else{
                    $(this).parent().addClass("active");
                    $(this).next().addClass("active").css("cssText","display:block !important;");
                }
            }else{}            
        });
    // }

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
        }, 2000);        
    });
    // $('.subscribe-button').on('click', function(e){
    //     e.preventDefault();
    //     $('.subscribe-form').addClass('progress');
    //     $('.msg--success').text('Processing your request...');
    //     setTimeout(function(){            
    //         $('.subscribe-form').removeClass('progress').addClass('finish');
    //         $('.msg--success').text('Successfully subscribed.');
    //     }, 3000); 
    // });


    /*** min max input qty ***/
    var emptyqty = $(".qty").val() || 0;
    if(emptyqty){
        $('.qty').css("cssText","color:#c5c5c5;");
    }

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
            $('input[name='+fieldName+']').val(currentVal + 1).css("cssText","color:#3b3b3b");
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0)
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
            $('input[name='+fieldName+']').val(currentVal - 1).css("cssText","color:#3b3b3b");
            // if value is 0 color change
            if(currentVal <= 1){
                $('.qty').css("cssText","color:#c5c5c5;");
            }
        }else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0)
        }        
    });

});



$(document).on('click', '.tooltip-open', function(){
    $('.tooltip__wrap').removeClass('active');
    $(this).parents('.tooltip__wrap').addClass('active');

    // if (($(this).find(".tooltip-withbutton").left() + $(this).find(".tooltip-withbutton").width()) >= $(window).width()) {
    //    alert("div is outside the window area");
    // }
});

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
var d = $(document).scrollTop();

$(".tooltip-withbutton").each(function(){
    p = $(this).position();
    //vertical
    // if (p.top > h + d || p.top > h - d){
    //     console.log($(this))
    // }
    //horizontal
    if (p.left < 0 - $(this).width() || p.left > w){
        console.log(p)
    }
});

// var $element = $('.tooltip-withbutton');
// $(window).load(function() {
//     var scroll = $(window).scrollLeft() + $(window).width();
//     var offset = $element.offset().left + $element.width();
    
//     if (scroll > offset) {
//         console.log('blue');
//     } else {
//         console.log('red');
//     }
// });

$(document).on('click', '.tooltip-close', function(){
    $(this).parents('.tooltip__wrap').removeClass('active');
});

$(document).on('click', '.expand-trigger', function(){
    if(!$(this).hasClass('expanded')){
        $(this).parents('.expand-parent').find('.expand-content').slideDown(400);
        $(this).addClass('expanded');
    }
    else{
        $(this).parents('.expand-parent').find('.expand-content').slideUp(400);
        $(this).removeClass('expanded');
    }
});

$(document).on('click', '.link-trigger', function(){
    var id = $(this).attr('id');
    $('.link-trigger').removeClass('active');
    $(this).addClass('active');
    if(!$(this).hasClass('all')){
        $('#'+ id + '-content').fadeIn(700);
        $('.link-trigger-content').not($('#'+ id + '-content')).hide();
    }
    else{
        $('.link-trigger-content').fadeIn(700);   
    }
});

if(!$('.link-trigger').hasClass('all')){
    if($('.link-trigger').hasClass('active')){
        $('#'+ $('.link-trigger.active').attr('id') + '-content').show();
    }else{}
}
else{
    $('.link-trigger-content').show();
}


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
                $(this).find('small').text(DEFAULT_HIDE_ADDRESS)
            }
            else{
                $(this).find('small').text(DEFAULT_SHOW_ADDRESS)   
            }
        });
    }
}

function masonry(delay){
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

$('.dropdown__fortabcontent').change(function(){
    console.log('change');
    $('#' + $(this).val() + '-content').fadeIn(400);
    $('.link-trigger-content').not($('#'+ $(this).val() + '-content')).hide();
});

if (widthviewport < 1024){       

    // $('.homepackages .tablink__a').on('click', function(){
    //     var tabID = $(this).attr("href");
    //     if($('#tab--internetonly').parent().hasClass('active')){
    //         console.log('internetonly');
    //         swiperInternettv.update();
    //     }
    //     else if($('#tab--internettv').parent().hasClass('active')){
    //         console.log('internettv');
    //         swiperInternetonly.update();
    //     }
    // });

    

}
//# sourceMappingURL=base.js.map
