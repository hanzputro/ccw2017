var ispackages = document.getElementsByClassName('packages');
if (ispackages.length > 0){
  
  $(document).on('click', '.link-trigger-href', function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    $(id).fadeIn(700);

    $('.tab-href').removeClass('active');
    $(id).find('li:first-child').find('.link-trigger').click();

    $('.link-trigger-href').removeClass('active');
    $(this).addClass('active');
    $('.link-trigger-href-content').not(id).hide();

    
  });

  $('.anchor-internet').on('click', function(){
    $('.packages').find('.link-trigger-href:first-child').click();

    if (widthviewport < 769){
      $('.header__right, .ico-menu--mobile').toggleClass('active');
    }
  });
  $('.anchor-internettv').on('click', function(){
    $('.packages').find('.link-trigger-href:last-child').click();

    if (widthviewport < 769){
      $('.header__right, .ico-menu--mobile').toggleClass('active');
    }
  });
}

if($('.link-trigger-href').hasClass('active')){
    $($('.link-trigger-href.active').attr('href')).show();
}else{}

// when get hash then scroll to anchor
function gethashpackage(){
    if(typeof TAG !== 'undefined') {
      hashVal = TAG
    } else if(window.location.hash) {
      //var hash = window.location.hash.substring(1);
      var hashVal = window.location.hash.split("#")[1];
    } 

    $('#' + hashVal).show();
    $('.link-trigger-href-content').not('#' + hashVal).hide();
    $("a[href='#"+hashVal+"'").addClass('active');

    $('.link-trigger-href').removeClass('active');
    //$('#' + hashVal + '-name').addClass('active');
    $("a[href='#"+hashVal+"'").addClass('active');

    //
}
gethashpackage();
$('.link-trigger-href').on('click', function(e){
    url = $(this).attr('data-url')
    $('.language > ul > li').each(function(index, obj){
        if(index==0) key = 'id'
        else key = 'en'
        $(obj).find('a').attr('href', "/" + key + "/services/"+ url)
    })
    window.history.pushState({},"", "/services/"+ url);
    ga('create', 'UA-62588281-1', 'auto');
    ga('send', 'pageview');
})