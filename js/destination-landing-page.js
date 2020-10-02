$(function () {  
    'use strict';

    

    //Monthly Temperature Progress Bar
    $(".places-state .places-container .temp-progress-container .progress-bar").each(function () {  
        var dataProgress = $(this).data("progress");
        $(this).css('width', "calc( " + dataProgress + "% - 25% ) ");
    });

    //Monthly Rainfall Progress Bar
    $(".places-state .places-container .rainfall-progress-container .progress-bar").each(function () {  
        var dataProgress = $(this).data("progress");
        $(this).css('width', dataProgress + '%');
    });

    //When Click Month [places-state section]
    $(".places-state .places-container.active").show().siblings().hide();
    $(".places-state .months-container .months-list .list-item").on("click", function () {  
        var dataMonth = $(this).data("month");

        $(this).addClass("selected").siblings().removeClass("selected");
        
        $(dataMonth).fadeIn(200).addClass('active').siblings().fadeOut(0).removeClass("active");
    });



    /**************************************************/
    /** responsive-tabs-info [Cruise details => (Deck)]*****/
    /**************************************************/
    
    var windowWidth = window.innerWidth;
    if (windowWidth < 768) {
        $(".destination-section .responsive-tabs-info .responsive-tabs-info-items .res-tab-item").each(function () {  
            var $this = this,
                dataClass = $(this).data("class"),
                responsive_tabs = $(this).parents(".responsive-tabs-info");
                responsive_tabs.find(dataClass).prepend($this);
        });
    }
    $(".destination-section .responsive-tabs-info .res_tab_content.active .tab-content").fadeIn();
    $(".destination-section .responsive-tabs-info .res-tab-item").on("click", function () {  
        var $this = this;
        var dataClass = $(this).data("class"),
        responsive_tabs = $(this).parents(".responsive-tabs-info");
        
        $(responsive_tabs).find(dataClass).siblings().find(".tab-content").fadeOut(0, function () {  
            $(responsive_tabs).find(dataClass).find(".tab-content").fadeIn(300);
        });
        //Scroll to Top
        responsive_tabs.find(".res-tab-item").removeClass("selected");
        $(this).addClass("selected");
    });

    /**********Recomended Hotel*/
    //var recomended_num = 5;
    let recomended_swiper = new Swiper('.recomended-hotels .swiper-container', {
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: false,
        centeredSlides: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.recomended-hotels .swiper-button-next',
          prevEl: '.recomended-hotels .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            },
        }
    });
    recomended_swiper.slideTo(2);

    //Dest Map Section
    $(".dest-map-section .dest-container").niceScroll({
        cursorcolor:"#ddd",
        cursorwidth:"15px",
        cursorborderradius: 0
    }); 

    //When Click [ when-to-go ] Tab 
    $(".when-to-go .main-content .left-section .when-to-go__tabs li").on("click", function () {  
        var dataContent = $(this).data("content");
        
        $(this).addClass("active").siblings("li").removeClass("active");

        $(dataContent).siblings("li").fadeOut(0, function () {  
            $(dataContent).fadeIn(300);
        });
    });


    /****** excursions_swiper *****/
    let excursions_swiper = new Swiper('.excursions-section .swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
          nextEl: '.excursions-section .swiper-button-next',
          prevEl: '.excursions-section .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3.5
            },
            1200: {
                slidesPerView: 4
            },
        }
    });
    excursions_swiper.slideTo(2);


    /****** places-state Slider [Months]*****/
    let placesStateSwiper = new Swiper('.places-state .swiper-container', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.places-state .swiper-button-next',
          prevEl: '.places-state .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 4
            },
            578: {
                slidesPerView: 8
            },
            768: {
                slidesPerView: 10
            },
            992: {
                slidesPerView: 10
            },
            1200: {
                slidesPerView: 12
            },
        }
    });



    //When click weather arrow
    $('.places-state .places-container .place-box .title-container svg').on('click', function () {  
        let placeBox = $(this).parents('.place-box');
        placeBox.find('.place-box_content').slideDown(200);
        placeBox.siblings().find('.place-box_content').slideUp(200);
    });



    $(".places-state .custom-places-range .range-input").on("input", function () {  
        var custom_places_range = $(this).parents('.custom-places-range'),
            range_point = custom_places_range.find(".range-point"),
            totalPers = ($(this).val() * 100) / $(this).attr('max');
        range_point.css({
            marginLeft: totalPers + "%"
        });



        let inputVal = $(this).val() - 1; 
        //console.log($(this).val());
        $(".places-state .months-container .months-list .list-item:eq(" + inputVal + ")").trigger('click');
        //console.log($(".destination-section .responsive-tabs-info .res-tab-item:eq(" + inputVal + ")"));
        placesStateSwiper.slideTo(inputVal);
        
        
        
    });
    
    
});