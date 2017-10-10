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

// document.getElementById("section_page").addEventListener("mousewheel", MouseWheelHandler, false);
// $(document).on('keydown', function(event){
//     if( $('#section1').hasClass('visible') ){
//         $('#section2 .thumb').addClass('animate');
//     }
// });
function MouseWheelHandler() {
    var id1H = $('#section1').height();
    var id2H = $('#section2').height();
    var id3H = $('#section3').height();
    var id4H = $('#section4').height();
    var id5H = $('#section5').height();

    // in area section 4
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            // downscroll code
        } else {
            // upscroll code
        }
        lastScrollTop = st;
    });
    // if( $('#section2').hasClass('visible') ){
    //     if( $('#section2 .thumb').hasClass('animate') ){}
    //     else{
    //         $('#section2 .thumb').addClass('animate');
    //     }
    // }
}

$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        console.log('Scroll up');
    }
    else {
        console.log('Scroll down');
    }
});