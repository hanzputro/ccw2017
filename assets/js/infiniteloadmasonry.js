// infinite scroll
$(document).ready(function(){
    scrollalert();
}); 

function updatestatus(){
    //Show number of loaded items
    var totalItems=$('#grid .tipstricks__grid').length;
    $('#loader').text('Scroll to load more');
}

function getdatagrid(){
    var istipstricks = document.getElementsByClassName('tipstricks');   
    if (istipstricks.length > 0) {
        $.get('/js/tips_tricks-newslist.html', '', function(newitems){
            $('#grid').append(newitems);
            $('.tipstricks__grid').addClass('animate');
            new AnimOnScroll( document.getElementById( 'grid' ),{
                minDuration : 0.4,
                maxDuration : 0.7,
                viewportFactor : 0.5
            });
        });
    }
}

function scrollalert(){
    // first time load
    var lengthdata = 8;
    for (i = 0; i < lengthdata; i++) {
        getdatagrid();
    }
    // after scroll got bottom
    $(window).scroll(function() {
        var getfooterh = $(".footer__socmed").height()+$(".footer__menu").height()+$(".footer__copyright").height();
        var getscrollbottom = $(window).scrollTop() + $(window).height() == $(document).height();
        if($(window).scrollTop() + ($(window).height()+getfooterh) >= $(document).height()) {
            // ajax call get data from server and append to the div
            // fetch new items            
            // console.log(($(window).height()+getfooterh)+"x"+$(document).height());
            $('#loader').text('Loading more news...');

            var counter = 0;
            var i = setInterval(function(){
                getdatagrid();
                counter++;
                if(counter === 3) {
                    clearInterval(i);
                    setTimeout(updatestatus, 1000);
                }
            }, 600);
        }else{}
    });
}