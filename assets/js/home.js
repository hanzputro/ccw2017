var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        widthviewport = w.innerWidth || e.clientWidth || g.clientWidth,
        heightviewport = w.innerHeight || e.clientHeight || g.clientHeight;
        
$(document).ready(function(){
    
    console.log($(window).height());

    if (widthviewport > 1024){
        $('.cd-section').each(function(){
            var gethSC = $('.section-cover', this).height();
            var gethS = $('.section', this).height();
            var setmidS = (gethSC - gethS)/2;
            $('.section', this).css("cssText","margin-top:"+setmidS+"px;");
        });

        $('#section3 .slide-bg').slick({
            arrows: false,
            swipe: false,
            fade: true,
            speed:500       
        });
        $('#section3 .slide-caption').slick({
            arrows: false,
            swipe: false,
            speed:500 
        });
        $('#section3 .slide__nav ul').slick({
            asNavFor: '#section3 .slide-bg, #section3 .slide-caption',
            slidesToShow: 3,
            centerMode: true,
            focusOnSelect: true
        });
    }
});


var a=0;
var b=0;
$(window).bind('mousewheel', function(event) {
    var pageNumber = ($('.cd-section.visible').id).substr(-1);
    if (event.originalEvent.wheelDelta >= 0) {
        a=a+1;
        console.log('Scroll up: '+a);
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
                $('#section4 .news').addClass('animate');
            }
            else if( pageNumber == 5 ){
                $('#section5 .section-cover').addClass('animate');
            }
        }
    }
});