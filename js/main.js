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