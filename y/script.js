
if($(window).width() < 1200)
{
    $(window).scroll(function() {

        var scroll = $(window).scrollTop();
        var cnt = $('.content').height() - 800;
        var ht = $(window).height() - 100;
    
        if(scroll > ht && scroll < (cnt + ht)){
            $('.coralbg').addClass('fixed');
            $('#nav-bar').addClass('scrolled');
            $('.coralbg').removeClass('coralstop');
            $(".coralbg").css("top", "");
        } else if (scroll < ht){
            $('#nav-bar').removeClass('scrolled');
            $('.coralbg').removeClass('fixed');
        } else {
            $('.coralbg').removeClass('fixed');
            $('.coralbg').addClass('coralstop');
            $(".coralbg").css("top", `${cnt}px`);
        };
    
        if(scroll > cnt + ht + 1070){
            $('#nav-bar').removeClass('scrolled');
        }else if(scroll < cnt + ht + 1400 && scroll > (cnt + ht)){
            $('#nav-bar').addClass('scrolled');
        }else if(scroll > ht - 200 && scroll < ht){
            $('#nav-bar').addClass('scrolled');
            $('.coralbg').removeClass('coralstop');
        };
        
    });

} else{
    $(window).scroll(function() {

        var scroll = $(window).scrollTop();
        var cnt = $('.content').height() - 800;
        var ht = $(window).height() - 100;
    
        if(scroll > ht && scroll < (cnt + ht)){
            $('.coralbg').addClass('fixed');
            $('#nav-bar').addClass('scrolled');
            $('.coralbg').removeClass('coralstop');
            $(".coralbg").css("top", "");
        } else if (scroll < ht){
            $('#nav-bar').removeClass('scrolled');
            $('.coralbg').removeClass('fixed');
        } else {
            $('.coralbg').removeClass('fixed');
            $('.coralbg').addClass('coralstop');
            $(".coralbg").css("top", `${cnt}px`);
        };
    
        if(scroll > cnt + ht + 1300){
            $('#nav-bar').removeClass('scrolled');
        }else if(scroll < cnt + ht + 1400 && scroll > (cnt + ht)){
            $('#nav-bar').addClass('scrolled');
        }else if(scroll > ht - 200 && scroll < ht){
            $('#nav-bar').addClass('scrolled');
            $('.coralbg').removeClass('coralstop');
        };
        
    });
}

$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 800, 'swing');
});



function adjust() {
    var wpbar = $('#wpadminbar').height();
    var navbar = $( '#nav-bar' ).height();

    if (wpbar > 0) {
        $(".row1").css("height", `calc(100vh - ${navbar}px - ${wpbar}px)`);
    } else {
        $(".row1").css("height", `calc(100vh - ${navbar}px)`);
    }
    console.log($(".row1").height());
}

adjust();