var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        widthviewport = w.innerWidth || e.clientWidth || g.clientWidth,
        heightviewport = w.innerHeight || e.clientHeight || g.clientHeight;
        
$(document).ready(function(){

    // media gallery
    $('.gallery').magnificPopup({
        delegate: '.gallery__link', // child items selector, by clicking on it popup will open
        type: 'iframe',
        gallery: {
            enabled: true
        },
        iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe id="magnificiframe" class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title" style="position: absolute;bottom: -22px;">Some caption</div>'+
              '</div>'
        },
        callbacks: {
            markupParse: function(template, values, item) {
                values.title = item.el.attr('title');
            }
        },
    });

    $('body').on('click','.gallery__link, .mfp-arrow',function(){
        setTimeout(function(){
            $('#magnificiframe').contents().find('body').css('cssText', 'text-align:center;overflow: hidden;');
        }, 100);  
    });

    // search input
    var input, filter, ul, li, h3, i;
    input = document.getElementById("searchMedia");

    input.addEventListener("keyup", searchMediaFunc);
    function searchMediaFunc(){        
        filter = input.value.toUpperCase();
        ul = $("#galleryMedia");
        li = ul.find("li");
        for (i = 0; i < li.length; i++) {
            h3 = $(li[i]).find("h3.title")[0];
            if (h3.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    // search select
    $('#searchYearMedia').on('change', function(){
        filter = $(this).val();
        // console.log(filter);
        ul = $("#galleryMedia");
        li = ul.find("li");
        for (i = 0; i < li.length; i++) {
            var valueYear = $(li[i]).attr('year');
            // console.log(valueYear);
            if (filter == valueYear) {
                li[i].style.display = "";
            } 
            else if(filter == 0){
                li[i].style.display = "";
            }
            else {
                li[i].style.display = "none";
            }
        }
    });

});