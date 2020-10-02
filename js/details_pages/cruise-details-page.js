$(function () {  
    'use strict';
    $(".cruise-details-page .cruise-tabs .tab-content .custom-content").css({display: "block"});

    /********Start Header Tabs ********/
    let navTabsSwiperNum = 9,
        stateroomsSwiperNum = 7,
        diningSwiperNum = 4;
    $(window).on("load resize", function () {  

        if (window.innerWidth < 578) {
            navTabsSwiperNum = 2;
        } else if (window.innerWidth < 767) {
            navTabsSwiperNum = 4;
        
        } else if (window.innerWidth < 992) {
            navTabsSwiperNum = 5;
        
        } else if (window.innerWidth < 1200) {
            navTabsSwiperNum = 7;
        
        } else if (window.innerWidth < 1750) {
            navTabsSwiperNum = 9;
        } else {
            navTabsSwiperNum = 9;
        }
        
        /*cruise-tabs Nav Tabs */
        let navTabsSwiper = new Swiper('.cruise-tabs .all-tabs .swiper-container', {
            slidesPerView: navTabsSwiperNum,
            spaceBetween: 0,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: false,
            simulateTouch: false,
            navigation: {
              nextEl: '.cruise-tabs .all-tabs .swiper-button-next',
              prevEl: '.cruise-tabs .all-tabs .swiper-button-prev',
            },
        });



        //Header Height
        var navbarHeight = $(".cruise-details-page .navbar").innerHeight(),
        upperbarHeight = $(".cruise-details-page .upper-bar").innerHeight(),
        allHeight = navbarHeight + upperbarHeight;
        $(".cruise-details-page .cruise-details-header").css({
            height: "calc( 100vh - " + allHeight + "px )"
        });
        //slide-content height
        $(".cruise-details-page .cruise-details-header .slide-content").css({
            height: "calc( 100% - " + ( $(".cruise-details-page .cruise-tabs .custom-nav-tabs").innerHeight() + 10) + "px )"
        });
        //Move Tabs To up 
        $(".cruise-details-page .cruise-tabs").css({
            transform: "translateY(-"+ $(".cruise-details-page .cruise-tabs .all-tabs").innerHeight() +"px)"
        });
        /******** End Header Tabs ********/


        /*Start staterooms-content */
        if (window.innerWidth < 578) {
            stateroomsSwiperNum = 2;
        } else if (window.innerWidth < 767) {
            stateroomsSwiperNum = 4;
        
        } else if (window.innerWidth < 992) {
            stateroomsSwiperNum = 5;
        
        } else if (window.innerWidth < 1200) {
            stateroomsSwiperNum = 6;
        
        } else if (window.innerWidth < 1750) {
            stateroomsSwiperNum = 7;
        } else {
            stateroomsSwiperNum = 7;
        }
        var stateroomsSwiper = new Swiper('.cruise-tabs .staterooms-content .swiper-container', {
            slidesPerView: stateroomsSwiperNum,
            spaceBetween: 5,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: false,
            simulateTouch: false,
            navigation: {
                nextEl: '.cruise-tabs .staterooms-content .swiper-button-next',
                prevEl: '.cruise-tabs .staterooms-content .swiper-button-prev',
            },
        });
        /*End staterooms-content */

        /*Satrt Dining Slider */
        if (window.innerWidth < 578) {
            diningSwiperNum = 1;
        } else if (window.innerWidth < 767) {
            diningSwiperNum = 2;
        
        } else if (window.innerWidth < 992) {
            diningSwiperNum = 2;
        
        } else if (window.innerWidth < 1200) {
            diningSwiperNum = 3;
        
        } else if (window.innerWidth < 1750) {
            diningSwiperNum = 4;
        } else {
            diningSwiperNum = 5;
        }
        
        var diningSwiper = new Swiper('.dining-content .swiper-container', {
            slidesPerView: diningSwiperNum,
            spaceBetween: 20,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: false,
            simulateTouch: false,
            centeredSlides: true,
            navigation: {
              nextEl: '.dining-content .swiper-button-next',
              prevEl: '.dining-content .swiper-button-prev',
            },
        });
        diningSwiper.slideTo(2);
        /*End Dining Slider */
        



    });
    $(".cruise-details-page .cruise-tabs .custom-nav-tabs .custom-nav-item").on("click", function () {  
        let dataTabs = $(this).data("tabs"),
            customContent = $(this).parents('.cruise-tabs').find(dataTabs);
            $(this).addClass("selected").siblings().removeClass("selected");
            $(customContent).siblings().removeClass("active").fadeOut(0, function () {  
                $(customContent).addClass("active").fadeIn(200);
            });
    });
    
    
    
    

    //Add Class [Selected] to [sta-tabs-container ]
    $(".cruise-details-page .cruise-tabs .tab-content .staterooms-content .stateroom-tabs .swiper-slide").on("click", function () {
        let stateroomsContent = $(this).parents(".staterooms-content");
        $(this).addClass("selected").siblings().removeClass('selected');
        stateroomsContent.find($(this).data('str-tab')).fadeIn(200).addClass('active').siblings().fadeOut(0).removeClass('active');
    });  
    //Show/Hide Card Details [main-staterooms] class
    $(".cruise-details-page .cruise-tabs .tab-content .main-staterooms .main-card .card .card-body .arrows .arrow-down").on("click", function () {  

        var mainCard = $(this).parents(".main-card"),
            cardDetails = mainCard.find(".card-details");
        $(this).toggleClass("reversed");
        cardDetails.slideToggle(200);
        
    });

    /********************************/
    /********** itinerary ************/
    /********************************/

    $(".cruise-details-page .itinerary-content .main-table .table-right-arrow").on("click", function () {
        $(this).parents(".main-table").find(".table-res").animate({  
            scrollLeft : $(this).parents(".main-table").find(".table-res").scrollLeft() + 100
        }, 200);
    });
    $(".cruise-details-page .itinerary-content .main-table .table-left-arrow").on("click", function () {  
        $(this).parents(".main-table").find(".table-res").animate({  
            scrollLeft : $(this).parents(".main-table").find(".table-res").scrollLeft() - 100
        }, 200);
    });
    
    $(".cruise-details-page .itinerary-content .arrow").on("click", function () {  
        $(this).toggleClass("reversed");
        $(this).parents(".card_info").find(".card-details").slideToggle(200);
    });

    //accordion [cruise-details .accordion-list]
    $(".cruise-details-page .itinerary-content .card-details .cruise-details .accordion-list .accordion-item .accordion-item-head .accordion-arrow").on("click", function () {  

        var accordion_item = $(this).parents(".accordion-item"),
            accordion_item_details = accordion_item.find(".accordion-item-details");
        $(this).toggleClass("reversed");
        accordion_item_details.slideToggle(200);
    });
    
    /*******************/
    /******* entertainment *****/
    /*******************/
    $(".cruise-details-page .entertainment-content .card_info .main-card .entertainment-arrow").on("click", function () {  
        var card_info = $(this).parents(".card_info"),
            card_details = card_info.find(".card-details");
        $(this).toggleClass("reversed");
        card_details.slideToggle(200);

    });
    /*******************/
    /******* activities *****/
    /*******************/

    $(".cruise-details-page .activities-content .main-imgs img.active").show().siblings().hide(); 
    $(".cruise-details-page .activities-content .content.active").show().siblings().hide(); 
    function triggerGalleryImgs($this) {  

        let data_content = $($this).data("content"),
        activities_content = $($this).parents(".activities-content").find(data_content);
        activities_content.siblings().removeClass("active").fadeOut(0, function () {  
            activities_content.fadeIn(200).addClass("active");
        });
    }
    $(".cruise-details-page .activities-content .gallery-list .gallery-list_item").on("click", function () {  
        triggerGalleryImgs(this);
    });



    $(".cruise-details-page .activities-content .card_info .main-card .activities-arrow").on("click", function () {  
        var card_info = $(this).parents(".card_info"),
            card_details = card_info.find(".card-details");
        $(this).toggleClass("reversed");
        card_details.slideToggle(200);

    });

    let activitiesSwiperNum = 3;
    $(window).on("load resize", function () {  

        if (window.innerWidth < 578) {
            activitiesSwiperNum = 3;
        } else if (window.innerWidth < 768) {
            activitiesSwiperNum = 4;
        } else if (window.innerWidth < 992) {
            activitiesSwiperNum = 2;
        } else if (window.innerWidth < 1200) {
            activitiesSwiperNum = 3;
        } else {
            activitiesSwiperNum = 3;
        }
        let activitiesSwiper = new Swiper('.activities-content .swiper-container', {
            slidesPerView: activitiesSwiperNum,
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: false,
            slideToClickedSlide: true,
            centeredSlides: true,
            navigation: {
              nextEl: '.activities-content .swiper-button-next',
              prevEl: '.activities-content .swiper-button-prev',
            },
        });
        activitiesSwiper.slideTo(1);
        activitiesSwiper.on('slideChange', function () {
            triggerGalleryImgs(this.slides[this.activeIndex]);
        });
        
    });
    
    
    
    
    
    /*******************/
    /******* excursions *****/
    /*******************/
    $(".cruise-details-page .excursions-content .card_info .main-card .excursions-arrow").on("click", function () {  
        var card_info = $(this).parents(".card_info"),
            card_details = card_info.find(".card-details");
        $(this).toggleClass("reversed");
        card_details.slideToggle(200);

    });
    
    
    /*Start Test Section */


    $.fn.imgScrolling = function (obj, num = 4) {  
        let clicking = false;
        let box = $(this).find(".cursor-box");
        let customImgScrollingContainer = $(this).parents(".custom-img-scrolling-container");
        let mainImg = customImgScrollingContainer.find(".main-image .custom-main_img");
        let mainImg_container = customImgScrollingContainer.find(".main-image");

        //Set All Height And Width
        box.css({
            height : obj.cursorH
        });
        
        $(this).css({
            height: obj.height,
        });
        mainImg.css({
            height: obj.height * num,
        });
        mainImg_container.css({  
            height: obj.cursorH * num
        });
        

        /*Get All Height And Width */
        let boxHeight = box.innerHeight(); // 50
        let thumbHeight = $(this).innerHeight(); //200
        let mainImgHeight = customImgScrollingContainer.find(".main-image .custom-main_img").innerHeight();
        
        $(this).on({
            
            mousedown : function (e) {
                clicking = true;
            },
            mouseup: function (e) {  
                clicking = false;
            },
            mousemove: function (e) {  
                if (clicking === false) {return}
                    
                let offY = e.offsetY, // 80
                    thumbPer = (offY * 100 ) / thumbHeight,
                    mainImgPer = (mainImgHeight * thumbPer ) / 100;
                
                //Set Position
                if (!$(e.target).hasClass("cursor-box")) {
                    
                    //console.log(per + "%" + "==> " + (mainImgHeight * thumbPer ) / 100);
                    box.css({
                        top: e.offsetY + 'px'
                    });
                    customImgScrollingContainer.find(".main-image .custom-main_img").css({
                        transform: "translateY(-" + mainImgPer +  "px)"
                    });
                    
                }
            },
            
            click: function (e) {  
                let offY = e.offsetY, // 80
                    thumbPer = (offY * 100 ) / thumbHeight,
                    mainImgPer = (mainImgHeight * thumbPer ) / 100;
                
                //Set Position
                if (!$(e.target).hasClass("cursor-box")) {
                    
                    //console.log(per + "%" + "==> " + (mainImgHeight * thumbPer ) / 100);
                    box.css({
                        top: e.offsetY + 'px'
                    });
                    customImgScrollingContainer.find(".main-image .custom-main_img").css({
                        transform: "translateY(-" + mainImgPer +  "px)"
                    });
                    
                }
            }
        });

    }
    
    /*************Overview Content********* */
    let overviewGalleryThumbsNum = 5;
    $(window).on("load resize", function () {  
        
        if (window.innerWidth < 578) {
            overviewGalleryThumbsNum = 3;
        } else if (window.innerWidth < 767) {
            overviewGalleryThumbsNum = 3;
            
        } else if (window.innerWidth < 992) {
            overviewGalleryThumbsNum = 4;
        } else if (window.innerWidth < 1750) {
            overviewGalleryThumbsNum = 5;
        } else {
            
            overviewGalleryThumbsNum = 6;
        }
        
        let overviewGalleryThumbs = new Swiper('.cruise-details-page .overview-content .gallery-thumbs', {
            slidesPerView: overviewGalleryThumbsNum,
            spaceBetween: 10,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        let overviewGalleryTop = new Swiper('.cruise-details-page .overview-content .gallery-top', {
            spaceBetween: 10,
            navigation: {
              nextEl: '.cruise-details-page .overview-content .swiper-button-next',
              prevEl: '.cruise-details-page .overview-content .swiper-button-prev',
            },
            thumbs: {
              swiper: overviewGalleryThumbs
            }
        });
    });
    
    
    $(window).on("load", function () {
        $(".cruise-details-page .cruise-tabs .tab-content .custom-content.active").show().siblings().hide();
    });
    //Auto create (imgScrolling) function 
    for (let i = 0; i < $(".deck-plans-content .res-tab-item").length; i++) {
        $(".deck-main-content .deck_c_"+ i +" .custom-img-scrolling-container .img-thumb").imgScrolling({height: 200, cursorH: 50}, 18);
        
    }
    
    
    
    
});