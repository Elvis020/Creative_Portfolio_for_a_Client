jQuery(document).ready(function() {





    let $logo = $('#logo');

    if(location.href.indexOf('#') != -1){
        $logo.show();
    }

    // Show Logo
    $('.menu .tabs a').click(function() {
        $logo.fadeIn('slow')
    })
    // Hide Logo
    $('.tab-profile').click(function() {
        $logo.fadeOut('slow')
    })


    // Changing themes
    $('#yellow-color').click(function(e){
        $('.main-wrapper-resume').attr("id", 'yellow');
    })

    $('#red-color').click(function(e){
        $('.main-wrapper-resume').attr("id", 'red');
    })

    $('#blue-color').click(function(e){
        $('.main-wrapper-resume').attr("id", 'blue');
    })

    $('#green-color').click(function(e){
        $('.main-wrapper-resume').attr("id", 'green');
    })

    $('.setting-icon').click(function(){
        $('.color-box').toggleClass("main");
    })



    let $catsfilter = $('.cats-filter');
    $catsfilter.find('a').click(function() {
        let currentOption = $(this).attr('data-filter');
        $(this).parent().parent().find('a').removeClass('current');
        $(this).addClass('current');
    })

    let $plist = $('#portfolio-list');
    let $pfilter = $('#portfolio-filter');

    $plist.isotope({
        filter : '*',
        layoutMode : 'masonry',
        animationOptions : {
            duration : 750,
            easing : 'linear'
        }
    });

    $pfilter.find('a').click(function() {
        let selector = $(this).attr('data-filter');
        $plist.isotope({
            filter : selector,
            animationOptions : {
            duration : 750,
            easing : 'linear',
            queue : false,
            }
        });
        return false;
    });





    let $content = $('#content');

    $content.easytabs({
        animate : true,
        updateHash : false,
        transitionIn : 'slideDown',
        transitionOut : 'slideUp',
        animationSpeed : 600,
        tabs : '.tmenu',
        tabActiveClass : 'active'
    });


    // Hover Effect
    $content.find('.tabs li a').hover(
        function(){
            $(this).stop().animate({marginTop: '-7px'}, 200);
        }, function(){
            $(this).stop().animate({marginTop: '0px'}, 300)
        }
    );

})