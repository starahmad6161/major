$(function () {  
    'use strict';

//Resbonsive Slider
var upperbar__height = parseInt($(".upper-bar").innerHeight()); 
var navbar__height = parseInt($(".navbar").innerHeight());
var total__height = upperbar__height + navbar__height;
//console.log(upperbar__height + navbar__height);
$(".custom-hotel-slider").css({
    height :  "calc( 100vh - " + total__height +  "px  ) "
});
if ($(window).innerWidth() > 567) {
   
    $(".custom-hotel-slider .image-gallery-container").css({
        height :  "calc( 100vh - " + total__height +  "px  ) "
    });
}

if (window.innerHeight < 567) {
    $(".custom-hotel-slider .image-gallery-container").css({
        height :  "95%"
    });
    $(".custom-hotel-slider").css({
        height :  "100vh"
    });
}

let headerSlidesNum = 4;
let headerDir = 'vertical';
$(window).on('load resize', function () {  
    
    if (window.innerWidth < 567) {
        headerSlidesNum = 2;
        headerDir = 'horizontal';
    } else if (window.innerWidth < 768) {
        headerSlidesNum = 3;
    } else if (window.innerWidth < 992) {
        headerSlidesNum = 5;
    } else {
        headerSlidesNum = 4;
    }
    
    if (window.innerHeight < 567) {
        
        headerDir = 'horizontal';
        /*
        headerSlidesNum = 1;
       */
    }

    let custom_hotel_slider_swiper = new Swiper('.custom-hotel-slider .swiper-container', {
        slidesPerView: headerSlidesNum,
        direction: headerDir,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        centeredSlides: true,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.custom-hotel-slider .swiper-button-next',
          prevEl: '.custom-hotel-slider .swiper-button-prev',
        },
        /*
        breakpoints: {
            0: {
                slidesPerView: 2,
                direction: 'horizontal'
            },
            568: {
                slidesPerView: 3,
                direction: 'vertical'
            },
            768: {
                slidesPerView: 5
            },
            992: {
                slidesPerView: 4
            },
        }
        */
    });
    custom_hotel_slider_swiper.slideTo(4);
});
/**Custom Hotel Slider [header] */


    /*Header Gallery */
    $('#lightgallery').lightGallery();
    //When Click full-img
    $(".custom-hotel-slider .swiper-slide").on("click", function () {
        $(this).parents('.hotel-content').find('#lightgallery .lg-item:eq('+ $(this).index() +')').trigger('click');
        //changeSliderContent(this);
    });


    /**When Click [View Details Button] */
    $(".hotel-details-page .accomodation .room-cards .card .card-body .view-details .show-button").on("click", function () {  
        var card_parent = $(this).parents(".room_card");
        var room_details = card_parent.find(".room-details");
        
        if ($(this).hasClass("show-more")) {
            room_details.slideDown(200);
            card_parent.find(".show-more").hide();
            card_parent.find(".show-less").show();
        } else if ($(this).hasClass("show-less")){
            room_details.slideUp(200);
            card_parent.find(".show-less").hide();
            card_parent.find(".show-more").show();
        }
    });


    var swiper = new Swiper('.conference_and_banqueting .conf_and_banq-slider .swiper-container', {
        navigation: {
          nextEl: '.conference_and_banqueting .conf_and_banq-slider .swiper-button-next',
          prevEl: '.conference_and_banqueting .conf_and_banq-slider .swiper-button-prev',
        },
    });

    var maxNumber = $(".hotel-details-page .hotel-prices .bar-chart ul").data("max-num");
    $(".hotel-details-page .hotel-prices .bar-chart ul li").each(function () {  
        //console.log($(this).data("num") / maxNumber );
        $(this).find(".bar").css({
            height: ($(this).data("num") / maxNumber) * 100 + "%"
        });
    });
    
    $('.hotel-details-page .calendar-and-sidebar .carousel').carousel({
        interval : 10000000000
    });


    var maxNumber = $(".hotel-details-page .right-side .bar-chart ul").data("max-num");
    $(".hotel-details-page .right-side .bar-chart ul li").each(function () {  
        //console.log($(this).data("num") / maxNumber );
        $(this).find(".bar").css({
            height: ($(this).data("num") / maxNumber) * 100 + "%"
        });
    });

    //Trigger bar-chart slider
    $( "#bar-chart-range" ).slider({
        range: "max",
        min: 1,
        max: 12,
        value: 7,
        slide: function( event, ui ) {
            console.log(ui.value);
        }
    });
    /************************/
    /*Dining Section */
    /************************/
    let diningSwiper = new Swiper('.dining-section .swiper-container', {
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        centeredSlides: true,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.dining-section .swiper-button-next',
          prevEl: '.dining-section .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            578: {
                slidesPerView: 2
            },
            1750: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 6
            },
        }
    });
    diningSwiper.slideTo(3);
    /*recreation Section*/
    let recreationSection = new Swiper('.recreation-section .swiper-container', {
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        centeredSlides: true,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.recreation-section .swiper-button-next',
          prevEl: '.recreation-section .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            578: {
                slidesPerView: 2
            },
            1750: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 6
            },
        }
    });
    recreationSection.slideTo(3);

    $(".custom-hotel-slider .all-background .background-img.active").show().siblings().hide();
    $(".custom-hotel-slider .image-content.active").show().siblings().hide();
    
    
    
});