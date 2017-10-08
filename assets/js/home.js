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

    // var controller = new ScrollMagic.Controller();
    // if (widthviewport > 1024){          
    //     new ScrollMagic.Scene({triggerElement: ".section-page #section2", triggerHook: "onEnter", reverse: false})
    //         .setClassToggle(".section-page #section2 .thumb", "animate")
    //         .addTo(controller);
    // }

});

$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#section2').position().top ){
        $('#section2 .thumb').addClass('animate');
    }
});

// SMOOTH SCROLL
customScrollable = $("body");

var scrollTo = 0;
var scrollTop = 0;

function scrollTick() {
  requestAnimationFrame(scrollTick); 
  
  if (!touchDown) {
    scrollTop -= (scrollTop - scrollTo) / 8;
    customScrollable.scrollTop(scrollTop);
  }
}

customScrollable.on("DOMMouseWheel mousewheel", function(event) {
  event.preventDefault();
  scrollTop = customScrollable.scrollTop()
  
  var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
  scrollTo = scrollTop - (delta * 150);
});

var touchDown = false;
var scrolling = false;
var scrollDelta = 0;
customScrollable.on("touchstart touchend touchmove", function(event) {
  event.preventDefault();
  
  if (event.type == "touchstart") {
    touchDown = true;
    
    
    
    touchStart = {
      x: event.originalEvent.touches[0].clientX,
      y: event.originalEvent.touches[0].clientY
    }
  }
  if (event.type == "touchmove" && touchDown) {
    currPos = {
      x: event.originalEvent.touches[0].clientX,
      y: event.originalEvent.touches[0].clientY
    }
    if (Math.abs(currPos.y - touchStart.y) > 10 || scrolling) {
      scrolling = true;

      scrollDelta = currPos.y - touchStart.y;
      touchStart = {
        x: currPos.x,
        y: currPos.y
      }
      
      var st = customScrollable.scrollTop() - scrollDelta;

      scrollTop = st;
      scrollTo = st;
      customScrollable.scrollTop( st );
    }
  }
  if (event.type == "touchend" && event.originalEvent.touches.length == 0) {
    scrolling = false;
    touchDown = false;
   
    console.log(scrollDelta);
    scrollTo = scrollTop - scrollDelta * 10;
  }
});

scrollTick();