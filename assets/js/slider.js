$(document).ready(function(){
    // swiper
    $('.heroimages--swiper .swiper-button-next, .heroimages--swiper .swiper-button-prev, .heroimages--swiper .swiper-pagination').hide();
    if ($('.heroimages--swiper .swiper-container .swiper-slide').length > 1) {
        $('.heroimages--swiper .swiper-button-next, .heroimages--swiper .swiper-button-prev, .heroimages--swiper .swiper-pagination').show();
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
    }

    if (widthviewport >= 768){
        var swiper = new Swiper('.tipstricks--swiper .swiper-container', {
            pagination: '.tipstricks--swiper .swiper-pagination',
            nextButton: '.tipstricks--swiper .swiper-button-next',
            prevButton: '.tipstricks--swiper .swiper-button-prev',
            slidesPerView: 1,
            paginationClickable: true,
            loop: true,
            autoplay: 4000,
            autoplayDisableOnInteraction:false,
            speed: 1500,
            onInit: function(swiper){
                if (widthviewport >= 768){
                    $('.masonry').masonry({
                        itemSelector: '.mgrid'
                    });
                }
            }
        });
    }else{
        var swiper = new Swiper('.tipstricks-mobile--swiper .swiper-container', {
            pagination: '.tipstricks-mobile--swiper .swiper-pagination',
            nextButton: '.tipstricks-mobile--swiper .swiper-button-next',
            prevButton: '.tipstricks-mobile--swiper .swiper-button-prev',
            slidesPerView: 1,
            paginationClickable: true,
            loop: true,
            autoplay: 4000,
            autoplayDisableOnInteraction:false,
            speed: 1500
        });
    }

    if (widthviewport > 980){
        if ($('.promotion--swiper .swiper-container .swiper-slide').length > 2) {
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
            swiper.on('onSlideNextStart', function () {
                $(".swiper-slide-prev, .swiper-slide-next").removeClass("hovered");
                $(".swiper-slide-next").addClass("hovered");
            });
            swiper.on('onSlidePrevStart', function () {
                $(".swiper-slide-prev, .swiper-slide-next").removeClass("hovered");
                $(".swiper-slide-prev").addClass("hovered");
            });
        }else{
            var swiper = new Swiper('.promotion--swiper .swiper-container', {
                nextButton: '.promotion--swiper .swiper-button-next',
                prevButton: '.promotion--swiper .swiper-button-prev',
                effect: 'coverflow',
                // loop: true,
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

        $(".swiper-button-prev").hover(function(){
            $(".swiper-slide-prev").removeClass("hovered");
            $(".swiper-slide-prev").addClass("hovered");
        },function(){
            $(".swiper-slide-prev, .swiper-slide-next").removeClass("hovered");
        });
        $(".swiper-button-next").hover(function(){
            $(".swiper-slide-next").removeClass("hovered");
            $(".swiper-slide-next").addClass("hovered");
        },function(){
            $(".swiper-slide-prev, .swiper-slide-next").removeClass("hovered");
        });
    }

    if (widthviewport <= 1024){
        // swiper
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
    }

});
