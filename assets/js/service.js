var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        widthviewport = w.innerWidth || e.clientWidth || g.clientWidth,
        heightviewport = w.innerHeight || e.clientHeight || g.clientHeight;
        
$(document).ready(function(){

    // slider #section4
    $('#section3 .slide-bg').slick({
        // autoplay: true,
        // infinite: true,
        fade: true,
        dots: true,
        speed:800    
    });

});
