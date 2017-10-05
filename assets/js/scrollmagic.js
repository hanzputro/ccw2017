    // scrollmagic
    // init controller
    var controller = new ScrollMagic.Controller();
    if (widthviewport > 1024){          
        new ScrollMagic.Scene({triggerElement: ".shareposition", triggerHook: "onLeave", duration: "100%"}).setClassToggle(".news__share", "sticky") //reverse: false
            // .addIndicators({name: "sticky"})
            .addTo(controller);
    }
    if (widthviewport < 600){          
        new ScrollMagic.Scene({triggerElement: ".footer__socmed", triggerHook: "onEnter"}).setClassToggle(".news__othertopic", "notsticky") //reverse: false
            // .addIndicators({name: "sticky"})
            .addTo(controller);
    }

