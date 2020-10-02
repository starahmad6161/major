$(function () {  
    'use strict'

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
});
