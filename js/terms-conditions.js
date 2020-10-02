$(function () {  
    'use strict';


    //For swipper library
    var num = 5;
    var swiper;
    // checkTeamSwiper function for swipper js
    function checkTeamSwiper() {  
        swiper = new Swiper('.team-section .swiper-container', {
            slidesPerView: num,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: false,
            centeredSlides: true,
            allowTouchMove : false,
            on: {
                slideChangeTransitionEnd: function () {
                    //When Slide Change , show team info  
                    var swiperActive = $(".team-section .swiper-slide.swiper-slide-active").data("team-content");
                    
                    var teamContent = $(".team-section .team-info").find(swiperActive);
                    teamContent.siblings().fadeOut(0, function () {  

                        teamContent.fadeIn(200);
                    });
                },
                init: function () {  
                    //When Slide Init , show team info  
                    var swiperActive = $(".team-section .swiper-slide.swiper-slide-active").data("team-content");
                    
                    var teamContent = $(".team-section .team-info").find(swiperActive);
                    teamContent.siblings().fadeOut(0, function () {  
    
                        teamContent.fadeIn(200);
                    });
                }
            },
            navigation: {
              nextEl: '.team-section .swiper-button-next',
              prevEl: '.team-section .swiper-button-prev',
            }
        });
        swiper.slideTo(2);
    }
    //checkTeamSwiper();
    
    // Chnage num variable when resizing Or Load the page [ For swipper js (team-section) ]
    $(window).on("load resize", function () {  
        if (window.innerWidth < 576) {
            num = 1;
        } else if (window.innerWidth < 768) {
            num = 3;
        } else {
            num = 5 
        }
        checkTeamSwiper();
    });

    
    //Stop Auto Slide [ bootstrap 4 slider ]
    $(".carousel").carousel({
        interval: 9000000000
    });

    /*job Tabs scroll option [for trigger nice scroll]*/
    var jobsScrollOptions = {
        cursorwidth:"10px",
        cursorcolor:"#124ea2",
        cursoropacitymin: 1
    }
    //Trigger Nice Scroll library
    $(".jobs-section #terms-conditions .tab-content").niceScroll(jobsScrollOptions);
    $(".jobs-section #passport-visas .tab-content").niceScroll(jobsScrollOptions);
    $(".jobs-section #travel-insurance .tab-content").niceScroll(jobsScrollOptions);
    $(".jobs-section #flight-infotmation .tab-content").niceScroll(jobsScrollOptions);
    $(".jobs-section #safety-security .tab-content").niceScroll(jobsScrollOptions);
    $(".jobs-section #travelling-children .tab-content").niceScroll(jobsScrollOptions);








    /*****************************************/
    /**********jobs-section tabs **************/
    /*****************************************/
    var windowWidth = window.innerWidth;
    if (windowWidth < 992) {
        $(".jobs-section .responsive-tabs .responsive-tabs-items .res-tab-item").each(function () {  
            var $this = this,
                dataClass = $(this).data("class"),
                responsive_tabs = $(this).parents(".responsive-tabs");
                responsive_tabs.find(dataClass).prepend($this);
        });
    }
    $(".jobs-section .responsive-tabs .res_tab_content.active .tab-content").fadeIn();
    $(".jobs-section .responsive-tabs .res-tab-item").on("click", function () {  
        var $this = this;
        var dataClass = $(this).data("class"),
            responsive_tabs = $(this).parents(".responsive-tabs");
            
        $(responsive_tabs).find(dataClass).siblings().find(".tab-content").fadeOut(0, function () {  
            $(responsive_tabs).find(dataClass).find(".tab-content").fadeIn(300);
        });
        //Scroll to Top
        responsive_tabs.find(".res-tab-item").removeClass("selected");
        $(this).addClass("selected");
    });
    /*****************************************/
    /**********events-section tabs **************/
    /*****************************************/
    var windowWidth = window.innerWidth;
    if (windowWidth < 992) {
        $(".events-section .responsive-tabs .responsive-tabs-items .res-tab-item").each(function () {  
            var $this = this,
                dataClass = $(this).data("class"),
                responsive_tabs = $(this).parents(".responsive-tabs");
                responsive_tabs.find(dataClass).prepend($this);
        });
    }
    $(".events-section .responsive-tabs .res_tab_content.active .tab-content").fadeIn();
    $(".events-section .responsive-tabs .res-tab-item").on("click", function () {  
        var $this = this;
        var dataClass = $(this).data("class"),
            responsive_tabs = $(this).parents(".responsive-tabs");
            
        $(responsive_tabs).find(dataClass).siblings().find(".tab-content").fadeOut(0, function () {  
            $(responsive_tabs).find(dataClass).find(".tab-content").fadeIn(300);
        });
        //Scroll to Top
        responsive_tabs.find(".res-tab-item").removeClass("selected");
        $(this).addClass("selected");
    });

    $(".events-section .slide-container .indicators .ind-point").on("click", function () {  
        var data_slide_item = $(this).data("slide-item"),
            slide_container = $(this).parents(".slide-container"),
            target_slide_item = slide_container.find(data_slide_item);

        $(this).addClass("selected").siblings().removeClass("selected");
        target_slide_item.siblings().fadeOut(0, function () {  
            target_slide_item.siblings().removeClass("active");
            target_slide_item.fadeIn(200, function () {  
                target_slide_item.addClass("active")
            });
        });
    });






    /*********************************/
    /***********FAQ section***********/
    /* set active class to card to change color when it active ***************/
    $(".FAQ-section .collapse.show").parents(".card").addClass("active");
    $(".FAQ-section .accordion .card .card-header .btn-link").on("click", function () {  
        $(this).parents(".card").addClass("active").siblings().removeClass("active");
    });
});