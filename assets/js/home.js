var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        widthviewport = w.innerWidth || e.clientWidth || g.clientWidth,
        heightviewport = w.innerHeight || e.clientHeight || g.clientHeight;
        
$(document).ready(function(){

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

});

document.getElementById("section_page").addEventListener("mousewheel", MouseWheelHandler, false);
$(document).on('keydown', function(event){
    if( $('#section1').hasClass('visible') ){
        $('#section2 .thumb').addClass('animate');
    }
});

function MouseWheelHandler() {
    if( $('#section2').hasClass('visible') ){
        if( $('#section2 .thumb').hasClass('animate') ){}
        else{
            $('#section2 .thumb').addClass('animate');
        }
    }
}