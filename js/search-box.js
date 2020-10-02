$(function () {  

    'use strict';
    let num = 6 ;
    $(window).on('load resize', function () {  
        if (window.innerWidth < 768) {
            num = 2;
        }
        var searchBoxSwiper = new Swiper('.search-boxes .swiper-container', {
            slidesPerView: num,
            slidesPerGroup: 2,
            loop: false,
            loopFillGroupWithBlank: false,
            simulateTouch:false,
            navigation: {
              nextEl: '.search-boxes .swiper-button-next',
              prevEl: '.search-boxes .swiper-button-prev',
            },
        });
    });


    $(".search-boxes .search-tabs-container .custom-tab-item.custom-tab-item_active").show().siblings().hide();
    $(".search-boxes .search-tabs-container .custom-nav-item").on("click", function () {  
        let dataTab = $(this).data('custom-tab');
        $(this).addClass("custom-nav-item_active").siblings().removeClass("custom-nav-item_active");
        $(dataTab).siblings().removeClass("custom-tab-item_active").fadeOut(0, function () {  
            $(dataTab).addClass("custom-tab-item_active").fadeIn(500);
        });
    });

    let searchSwiperHeight = $(".search-boxes .swiper-container").innerHeight() + 0;
    $(".search-boxes").css({
        transform: "translateY(-" + searchSwiperHeight + "px)"
    });
    /******************** trigger Custom Box [ Adult , Child , Infants] *******************/
    //**************** Input Path Selector****************/
    //**************** Let Input Parent Make Class [ passenger-container ] And The Input Class [custom-box-input] ****************/
    $(".search-boxes .passenger-container .custom-box-input").customBox();
    $(".search-boxes .holidays .individuals-container .custom-box-input").customBox();
    $(".search-boxes .tours .individuals-container .custom-box-input").customBox();
    $(".search-boxes .cruise .individuals-container .custom-box-input").customBox();
});