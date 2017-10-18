var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        widthviewport = w.innerWidth || e.clientWidth || g.clientWidth,
        heightviewport = w.innerHeight || e.clientHeight || g.clientHeight;
        
$(document).ready(function(){

    if (widthviewport > 1024){
        $('.cd-section').each(function(){
            var gethSC = $('.section-cover', this).height();
            var gethS = $('.section', this).height();
            var setmidS = (gethSC - gethS)/2;
            $('.section', this).css("cssText","margin-top:"+setmidS+"px;");
        });

        $('#section3 .slide-bg').slick({
            autoplay: true,
            infinite: true,
            autoplaySpeed: 5000,
            arrows: false,
            swipe: false,
            fade: true,
            speed:2000    
        });
        $('#section3 .slide-caption').slick({
            autoplay: true,
            infinite: true,
            autoplaySpeed: 5000,
            arrows: false,
            swipe: false,
            speed:2000 
        });
        $('#section3 .slide-bg').on('beforeChange', function(){
            var currentSlide = $('#section3 .slide-bg .slick-current').attr('data-slide');
            console.log(currentSlide);
            $('.slide__nav li').removeClass('slick-current');
            $('.slide__nav a').attr('data-slide', currentSlide).parent().addClass('slick-current');
        });
        $('#section3 .slide-bg').on('afterChange', function(){
            if( $('.slide__nav ul').hasClass('disabled') ){
                $('.slide__nav ul').removeClass('disabled');
            }
        });        
        $('.slide__nav a').click(function(e) {
            e.preventDefault();
            $('.slide__nav ul').addClass('disabled');
            var dataSlide = $(this).attr('data-slide');
            $('#section3 .slide-bg, #section3 .slide-caption').slick('slickGoTo', dataSlide);        
        });
    }
});


var a=0;
var b=0;
$(window).bind('mousewheel', function(event) {
    var pageNumber = (document.querySelector('.cd-section.visible').id).substr(-1);
        pageNumber = parseInt(pageNumber);
    if (event.originalEvent.wheelDelta >= 0) {
        a=a+1;
        console.log('Scroll up: '+a);
        console.log('Section: '+pageNumber);
        if( a >= 3 ){
            a = 0;
            pageNumber = pageNumber - 1;
            if( pageNumber == 2 ){
                $('#section2 .thumb').addClass('animate');
            }
            else if( pageNumber == 4 ){
                $('#section4 .section-cover').addClass('animate');
            }
            else if( pageNumber == 5 ){
                $('#section5 .section-cover').addClass('animate');
            }
        }
    }
    else {
        b=b+1;
        console.log('Scroll down: '+b);
        console.log('Section: '+pageNumber);
        if( b >= 3 ){
            b = 0;
            pageNumber = pageNumber + 1;
            if( pageNumber == 2 ){
                $('#section2 .thumb').addClass('animate');
            }
            else if( pageNumber == 4 ){
                $('#section4 .section-cover').addClass('animate');
            }
            else if( pageNumber == 5 ){
                $('#section5 .section-cover').addClass('animate');
            }
        }
    }
});