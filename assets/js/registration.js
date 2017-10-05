$(document).ready(function(){

    // zE.hide();
    /* ##################### REGISTRATION ##################### */
    var DEFAULT_HIDE_CHANNEL_INTERNAL = "Hide Channels";
    var DEFAULT_SHOW_CHANNEL_INTERNAL = "View Channels";
    
    if (typeof DEFAULT_HIDE_CHANNEL !== 'undefined')
    {
        DEFAULT_HIDE_CHANNEL_INTERNAL = DEFAULT_HIDE_CHANNEL;
    }

    if (typeof DEFAULT_SHOW_CHANNEL !== 'undefined')
    {
        DEFAULT_SHOW_CHANNEL_INTERNAL = DEFAULT_SHOW_CHANNEL;
    }


    var isregistration = document.getElementsByClassName('registration');
    if (isregistration.length > 0) {
        // special header for registration
        $(".miniheader, .header").css("cssText", "display:none;");        
        $(".header--registration").css("cssText", "display:block;");

        // input error validation
        $('input, textarea').focusout(function(){
            if ($(this).val() == '' ){
                var attr = $(this).parent().attr('data-text');
                if (typeof attr !== typeof undefined && attr !== false) {
                    if( $(this).parent().hasClass("input--2") ){
                        /* vouchercode */
                    }else{
                        $(this).parent().addClass('input--error2');
                    }
                }else{ 
                    $(this).parent().addClass('input--error'); 
                }            
            }
        });
    }else{
        $(".header .container1330").append("<a href='/registration-check_availability' class='button--1 button__register--mobile'>REGISTER</a>");
    }

    /* ========== special header for registration ========= */
    // var isregistration = document.getElementsByClassName('registration');
    // if (isregistration.length > 0) {
        
    // }else{}
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
    $(".service__packages .service__packages__link").click(function(e){
        e.preventDefault();
        var anchoranimate = $(this).attr("data");
        var parent = $(this).parent(".service__packages");
        if($(this).parent().hasClass("done")){
            // console.log(anchoranimate);
            $(".service__packages__content").addClass("loading");
            setTimeout(function(){
                $(window).scrollTop(0);
                $(".service__packages").removeClass("active");
                $(parent).addClass("active");
                $(".service__packages__content").removeClass("loading");
                $('html,body').animate({scrollTop: ($("#"+anchoranimate).offset().top)-60},1500);
            }, 1500);
        }else{}
    });


    /* ============ CONTENT : all package for jakarta ============ */
    $(".combo__button").click(function(e){
        e.preventDefault();
        var anchoranimate = $(this).attr("href");
        if($(".combo__button").hasClass("disabled")){
            $(".combo__button").removeClass("disabled").text("ADD TO CART");
            $(this).addClass("disabled").text("ADDED TO CART");
        }else{
            $(this).addClass("disabled").text("ADDED TO CART");
        }
        $(".service__packages__content").addClass("loading");
        setTimeout(function(){
            $(window).scrollTop(0);
            $(".service__option").hide();
            $("#service__packages1").removeClass("active").addClass("done");
            $(".done").trigger("click");
            $("#service__packages2").removeClass("disabled").addClass("active");
            $(".service__packages__content").removeClass("loading");
            $('html,body').animate({scrollTop: ($(anchoranimate).offset().top)-60},1500);
        }, 1500);
    });

    $('.channel__link').click(function(e){
        e.preventDefault();
        var showcontent = $(this).attr("href");
        if($(showcontent).hasClass("active")){
            $(this).text(DEFAULT_SHOW_CHANNEL_INTERNAL);
            $(showcontent).css('cssText', 'visibility:hidden; height:0; padding:0; margin-bottom:0;').removeClass("active");
        }
        else{
            $(this).text(DEFAULT_HIDE_CHANNEL_INTERNAL);
            $(showcontent).css('cssText', 'visibility:visible;height:initial; padding:10px; margin-bottom:15px;').addClass("active");
            $('.jscrollpane').jScrollPane();
        }
    });


    /* ============ CONTENT : Voucher and Few Promotions for You ============ */
    $(".promo__button").click(function(e){
        e.preventDefault();
        $(this).addClass("hide");
        $(this).next(".removepromo__button").removeClass("hide");
        $(".continue__equipreq").removeClass("disabled").addClass("active");
    });

    $(".removepromo__button").click(function(e){
        e.preventDefault();
        var anchoranimate = $(this).attr("href");
        $(".service__packages__content").addClass("loading");
        $(".combo__button").removeClass("disabled");
        setTimeout(function(){
            $(window).scrollTop(0);
            $(".service__option").hide();
            $("#service__packages1").removeClass("done").addClass("active");
            $(".done").trigger("click");
            $("#service__packages2").removeClass("active").addClass("done");
            $(".service__packages__content").removeClass("loading");
            $('html,body').animate({scrollTop: ($(anchoranimate).offset().top)-60},1500);
            $(".promo__button").removeClass("hide");
            $(".removepromo__button").removeClass("hide").addClass("hide");
            $(".continue__equipreq").removeClass("active").addClass("disabled");
        }, 1500);
    });

    $(".continue__equipreq").click(function(e){
        e.preventDefault();
        var anchoranimate = $(this).attr("href");
        if ($(".continue__equipreq").hasClass("active")){
            $(".service__packages__content").addClass("loading");
            setTimeout(function(){
                $(window).scrollTop(0);
                $("#service__packages2").removeClass("active").addClass("done");
                $("#service__packages3").removeClass("disabled").addClass("active");
                $(".service__packages__content").removeClass("loading");
                $(".myorder__menu__button").css('cssText','display:inherit;');
                $('html,body').animate({scrollTop: ($(anchoranimate).offset().top)-60},1500);
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


    /* ============ PAYMENT SELECTION ============ */
    var ispayselect = document.getElementById('payment_selection');
    if ($(".registration[id=payment_selection]").length > 0) {
        $(".myorder__menu__button").attr("href","registration-order_confirmation").find('small').text("CHECKOUT");
    }else{}


    /* ============ ORDER CONFIRMATION ============ */
    $("input[type='checkbox']").on("change", function() {
        if($("input[name='ideclare']").is(":checked")){
            $(".confirmcheck__button").removeClass("disabled");
        }else{ $(".confirmcheck__button").addClass("disabled"); }
    });
    
    $(".confirmcheck__button").click(function(e){
        e.preventDefault();
        $(this).addClass("loading");
        setTimeout(function(){
            $(".confirmcheck__button").hide();
            $(".verifycode").removeClass("hide");
        }, 1500);
    });

    $(".confirmcheck__button--mobile").click(function(e){
        e.preventDefault();
        var linktoid = $(this).attr("href");
        $(this).addClass("loading");
        setTimeout(function(){
            $(".confirmcheck__button--mobile").hide();
            $("#order_confirmation").hide();
            $(linktoid).show();
        }, 1500);        
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