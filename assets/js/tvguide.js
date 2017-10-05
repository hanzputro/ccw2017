var istvguide = document.getElementsByClassName('tvguide');   
if (istvguide.length > 0) {

    $('body').css('overflow-x', 'hidden');

    ;(function($) {

        $.fn.tvguideFilter = function(options) {
            var settings = $.extend({
            }, options || {});

            var menu = this;

            menu.addClass('tv-menu');

            function openMenu() {
                $('.tv-menu').removeClass('open');
                menu.addClass('open');
                menu.children().show();
                $(document).on('click.tv-menu', closeMenu);
                $(document).on('keydown.tv-menu', function(event) {
                    switch (event.keyCode) {
                        case 27:
                        return closeMenu();
                        case 38:
                        focusSiblingLink(-1);
                        return false;
                        case 40:
                        focusSiblingLink(1);
                        return false;
                    }
                });
                menu.trigger('tvmenu:open');
            }

            function focusSiblingLink(indexIncrement) {
                var activeElement = $(document.activeElement);
                if (activeElement.is(menu.find('a'))) {
                    var menuItems = menu.find('li'),
                    index = menuItems.index(activeElement.parent());
                    menuItems.eq(index + indexIncrement).find('a').focus();
                }
            }

            function closeMenu() {
                menu.removeClass('open');
                $(document).off('.tv-menu');
                return false;
            }

            menu.find('a').click(function() {
                if (menu.hasClass('open')) {
                    closeMenu();
                    return true;
                } else {
                    openMenu();
                    return false;
                }
            });

            // var widestItem = _.max(this.find('li'), function(item) {
            //     return $(item).width();
            // });
            return menu;
        };

    })(jQuery);


    // var timetable = new Timetable();
    // timetable.setScope(0,23)
    // // timetable.addLocations('Rotterdam2','srcroterdam2','srcdescription2');
    // var renderer = new Timetable.Renderer(timetable);
    // renderer.draw('.timetable');

    
    $('#filter-cat').tvguideFilter();
    
    // // scroll sync
    // var isSyncingLeftScroll = false;
    // var isSyncingRightScroll = false;
    // var leftDiv = document.getElementById('tv-guide');
    // var rightDiv = document.getElementById('channel');

    // leftDiv.onscroll = function() {
    //     if (!isSyncingLeftScroll) {
    //         isSyncingRightScroll = true;
    //         rightDiv.scrollTop = this.scrollTop;
    //     }
    //     isSyncingLeftScroll = false;
    // }

    // rightDiv.onscroll = function() {
    //     if (!isSyncingRightScroll) {
    //         isSyncingLeftScroll = true;
    //         leftDiv.scrollTop = this.scrollTop;
    //     }
    //     isSyncingRightScroll = false;
    // }
}

var ispackages = document.getElementsByClassName('channel__list');
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

    if($('.link-trigger-href').hasClass('active')){
        $($('.link-trigger-href.active').attr('href')).show();
        //console.log($('.link-trigger-href.active').attr('href'));
    }else{}
}

    