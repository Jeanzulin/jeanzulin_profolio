$(document).ready(function () {
    //AOS
    AOS.init();

    //Tab
    $(function () {
        $(".myWork-content .btn-group .btn").eq(0).addClass('active');
        $(".myWork-list li").eq(0).show().siblings().hide();

        $(".myWork-content .btn-group .btn").on('click', function () {
            var $tabIndex = $(this).index();
            // console.log($tabIndex)
            $(this).addClass('active').siblings().removeClass('active');
            $(".myWork-list li").eq($tabIndex).show().siblings().hide();
        });
    });


//sideBar
$('.nav-icon').hide();
$(window).scroll(function(){
    if($(window).scrollTop()>= $('.jumbotron').height()){
        $('.nav-icon').show();
        $('.nav-menu').addClass('active');
    }else{
        $('.nav-icon').hide();
        $('.nav-menu').removeClass('active');
    }
})

    //goTop
    $('#goTop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#goTop').fadeIn();
        } else {
            $('#goTop').stop().fadeOut();
        }
    });


    //錨點捲動
    $('a[href*="#"]').on('click', function () {
        if ($(window).width() > 767) {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500, 'linear');
        } else {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 150
            }, 500, 'linear');
        }

    })
});