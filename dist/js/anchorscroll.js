document.addEventListener("DOMContentLoaded",function(){"use strict";for(var e=document.querySelectorAll("a.anchorscroll"),t=e.length,n=/firefox|trident/i.test(navigator.userAgent)?document.documentElement:document.body,o=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t};t--;)e.item(t).addEventListener("click",function(e){var t,r=n.scrollTop,i=document.getElementById(/[^#]+$/.exec(this.href)[0]).getBoundingClientRect().top,c=n.scrollHeight-window.innerHeight,u=r+i<c?i:c-r,d=function(e){t=t||e;var i=e-t,c=o(i,r,u,1800);n.scrollTop=c,i<1800&&requestAnimationFrame(d)};requestAnimationFrame(d),e.preventDefault()})});