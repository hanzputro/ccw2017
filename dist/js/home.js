var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName("body")[0],widthviewport=w.innerWidth||e.clientWidth||g.clientWidth,heightviewport=w.innerHeight||e.clientHeight||g.clientHeight;$(document).ready(function(){widthviewport>1024&&($(".cd-section").each(function(){var e=$(".section-cover",this).height(),i=$(".section",this).height(),t=(e-i)/2;$(".section",this).css("cssText","margin-top:"+t+"px;")}),$("#section3 .slide-bg").slick({autoplay:!0,infinite:!0,autoplaySpeed:5e3,arrows:!1,swipe:!1,fade:!0,speed:2e3}),$("#section3 .slide-caption").slick({autoplay:!0,infinite:!0,autoplaySpeed:5e3,arrows:!1,swipe:!1,speed:2e3}),$("#section3 .slide-bg").on("beforeChange",function(){var e=$("#section3 .slide-bg .slick-current").attr("data-slide");console.log(e),$(".slide__nav li").removeClass("slick-current"),$(".slide__nav a").attr("data-slide",e).parent().addClass("slick-current")}),$("#section3 .slide-bg").on("afterChange",function(){$(".slide__nav ul").hasClass("disabled")&&$(".slide__nav ul").removeClass("disabled")}),$(".slide__nav a").click(function(e){e.preventDefault(),$(".slide__nav ul").addClass("disabled");var i=$(this).attr("data-slide");$("#section3 .slide-bg, #section3 .slide-caption").slick("slickGoTo",i)}))});var a=0,b=0;$(window).bind("mousewheel",function(e){var i=document.querySelector(".cd-section.visible").id.substr(-1);i=parseInt(i),e.originalEvent.wheelDelta>=0?(a+=1,console.log("Scroll up: "+a),console.log("Section: "+i),a>=3&&(a=0,i-=1,2==i?$("#section2 .thumb").addClass("animate"):4==i?$("#section4 .section-cover").addClass("animate"):5==i&&$("#section5 .section-cover").addClass("animate"))):(b+=1,console.log("Scroll down: "+b),console.log("Section: "+i),b>=3&&(b=0,i+=1,2==i?$("#section2 .thumb").addClass("animate"):4==i?$("#section4 .section-cover").addClass("animate"):5==i&&$("#section5 .section-cover").addClass("animate")))});