var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName("body")[0],widthviewport=w.innerWidth||e.clientWidth||g.clientWidth,heightviewport=w.innerHeight||e.clientHeight||g.clientHeight;$(document).ready(function(){(document.scrollingElement||document.documentElement).scrollTop=0,$(".header").addClass("white"),$(".header .logo img").attr("src","../wp-content/themes/ccw2017/dist/images/logo-ccw.png"),$(window).scroll(function(e){console.log($(this).scrollTop()>$("#section1").innerHeight()-50),$(this).scrollTop()>$("#section1").innerHeight()-50?($(".header").removeClass("white"),$(".header .logo img").attr("src","../wp-content/themes/ccw2017/dist/images/logo-ccw-black.png")):($(".header").addClass("white"),$(".header .logo img").attr("src","../wp-content/themes/ccw2017/dist/images/logo-ccw.png"))})});