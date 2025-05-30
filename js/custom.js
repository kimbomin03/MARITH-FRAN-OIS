$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/AZg8gPgHnuo',
        containment: '.main_visual',
        showControls: false,
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
    });
});

$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('header').addClass('on')
        } else {
            $('header').removeClass('on')
        }
    })
});



$(function () {
    $('.main_arrivals .tab_menu button').on('click', function () {
        let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장함 
        console.log(idx);

        $('.main_arrivals  .tab_menu button').removeClass('on');
        $(this).addClass('on');

        $('.main_arrivals  .tab_content .con').removeClass('on');
        $('.main_arrivals  .tab_content .con').eq(idx).addClass('on');
    });

});

$(function () {
    $('.main_cody .tab_menu button').on('click', function () {
        let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장함 
        console.log(idx);

        $('.main_cody  .tab_menu button').removeClass('on');
        $(this).addClass('on');

        $('.main_cody  .tab_content .con').removeClass('on');
        $('.main_cody  .tab_content .con').eq(idx).addClass('on');


    });

    const main_cody_slide = new Swiper('.main_cody_slide', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 800,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

    });

    const main_cody_slide01 = new Swiper('.main_cody_slide01', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_cody .five .arrows .next',
            prevEl: '.main_cody .five .arrows .prev',
        },
        speed: 800,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    const main_cody_slide02 = new Swiper('.main_cody_slide02', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_cody .six .arrows .next',
            prevEl: '.main_cody .six .arrows .prev',
        },
        speed: 800,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    })
    const main_cody_slide03 = new Swiper('.main_cody_slide03', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_cody .seven .arrows .next',
            prevEl: '.main_cody .seven .arrows .prev',
        },
        speed: 800,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    })
    const main_cody_slide04 = new Swiper('.main_cody_slide04', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_cody .eight .arrows .next',
            prevEl: '.main_cody .eight .arrows .prev',
        },
        speed: 800,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    })


});

$('.text').on('click', function () {
    $('.topfooter').toggleClass('active');
});