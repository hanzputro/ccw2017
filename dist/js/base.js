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

});
//# sourceMappingURL=base.js.map
