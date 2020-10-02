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

    $('.offer-detail-page .hotel-prices .bar-chart').niceScroll({
        cursorwidth: 7,
        background: "#ddd",
        cursoropacitymin:1,
        cursorcolor:'#6e8cb6',
        cursorborder:'none',
        cursorborderradius:4,
        autohidemode:'none'
  }); 


    //Bar Chart
    var maxNumber = $(".offer-detail-page .hotel-prices .bar-chart ul").data("max-num");
    $(".offer-detail-page .hotel-prices .bar-chart ul li").each(function () {  
        //console.log($(this).data("num") / maxNumber );
        $(this).find(".bar").css({
            height: ($(this).data("num") / maxNumber) * 100 + "%"
        });
    });
    
    $('.offer-detail-page .calendar-and-sidebar .carousel').carousel({
        interval : 10000000000
    });


    //When click char bar slide to the month calendar
    $('.offer-detail-page .hotel-prices .bar-chart ul li').on('click', function () {  
        let targetIndex = $(this).index();
        $('html , body').animate({
            scrollTop: $('.calendar-and-sidebar .carousel').offset().top
        }, 500, function() {
            $('.calendar-and-sidebar .carousel').carousel(targetIndex);
         });
    });

    //When click price update right side
    $('.calendar-and-sidebar .carousel .carousel-inner .carousel-item .table td').on('click', function () {  
        if (!$(this).hasClass('table-disabled')) {
            if (!$(this).hasClass('empty-td')) {
                let parentTR = $(this).parents('tr');
                $(this).addClass('active').siblings().removeClass('active');
                parentTR.siblings().find('td').removeClass('active');
            }
        }
    });
});
