$(function () {

    'use strict';


    let num = 0;
    $(window).on("load resize", function () {  
        if (window.innerWidth < 440) {
            num = 2;
        } else if (window.innerWidth < 576) {
            num = 3;
        } else if (window.innerWidth < 768) {
            num = 4;
        } else if (window.innerWidth < 992) {
            num = 5;
        } else if (window.innerWidth < 1200) {
            num = 5; 
        } else if (window.innerWidth < 1750) {
            num = 6; 
        } else {
            num = 8;
        }
        var carsSwiper = new Swiper('.car-type-container .swiper-container', {
            slidesPerView: num,
            spaceBetween: 30,
            slidesPerGroup: num,
            loop: false,
            loopFillGroupWithBlank: false,
            navigation: {
              nextEl: '.car-type-container .swiper-button-next',
              prevEl: '.car-type-container .swiper-button-prev',
            },
        });
    });


    $(".main-search-body .car-info-container .card .read-more").on("click", function () {  
        let parentCard = $(this).parents(".card");
        parentCard.find(".car-info").slideToggle(200);
        $(this).find('.less-btn').toggle();
        $(this).find('.more-btn').toggle();
        $(this).toggleClass("active");
    });

    //When Click Car Type
    $(".main-search-body .car-type-container .car_item").on("click", function () {  
        $(this).addClass("active").siblings().removeClass("active");
    });
    
});