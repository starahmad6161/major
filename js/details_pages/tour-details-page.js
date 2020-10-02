$(function () {  
    'use strict';

    //Resbonsive Slider
    var upperbar__height = parseInt($(".upper-bar").innerHeight()); 
    var navbar__height = parseInt($(".navbar").innerHeight());
    var total__height = upperbar__height + navbar__height;
    $(".header").css({
        height :  "calc( 100vh - " + total__height +  "px  ) "
    });




    $(".tour-details-page .itinerary-section .accordion-list-container .accordion-list-items .arrow svg").on("click", function () {  
      var item_parent = $(this).parents(".item");
      $(this).parents(".arrow").toggleClass("reversed");
      item_parent.toggleClass("active");
      item_parent.find(".acc-item-details").slideToggle(200);
      var item_parent_active = $(this).parents(".item.active");
      item_parent_active.siblings().removeClass("active").find(".acc-item-details").removeClass("active").slideUp(200);
      item_parent_active.siblings().find(".arrow").removeClass("reversed");
      
    });
      $(".boxscroll").niceScroll({
        autohidemode :false,
        cursorcolor: "transparrent",
        cursorborder: "none",
        background : "#0e3c7a"
      }).scrollend(function (info) {  
        //console.log(info);
        $(".day-by-day-section .scroll-container .custom-circle").css({
          top: $(".nicescroll-cursors").css("top")
        });
      });
     $(".tour-details-page .day-by-day-section .accordion-list-container .accordion-list-items .arrow svg").on("click", function () {  
       let dataMap = $(this).data('map');
       let mapDiv = $(this).parents(".day-by-day-section").find(dataMap);
       mapDiv.siblings().removeClass("active").fadeOut(0, function () {  
        mapDiv.fadeIn(200).addClass('active');
       });



       var item_parent = $(this).parents(".item");
       $(this).parents(".arrow").toggleClass("reversed");
       item_parent.toggleClass("active");
       item_parent.find(".acc-item-details").fadeToggle(200);
       /*Show All Titles and hide the clicked title */
       
       $(".tour-details-page .day-by-day-section .acc-title").fadeIn(0, function () {  
         if (item_parent.hasClass("active")) {
          item_parent.find(".acc-title").fadeOut(200);
        } else {
          item_parent.find(".acc-title").fadeIn(200);
        }
        
      });
      
      var item_parent_active = $(this).parents(".item.active");
      item_parent_active.siblings().removeClass("active").find(".acc-item-details").removeClass("active").fadeOut(200);
      item_parent_active.siblings().find(".arrow").removeClass("reversed");
      
      $(".boxscroll").getNiceScroll().resize();
    });
      
  
    //************* itinerary-section **********/
    $(".itinerary-section .scroll-container").scrollSection();
    
    function newSwiper(classname, tbNum) {  
      
      let swiper = new Swiper( classname + ' .swiper-container', {
       slidesPerView: tbNum,
       spaceBetween: 10,
       slidesPerGroup: 1,
       loop: false,
       loopFillGroupWithBlank: false,
       simulateTouch: false,
       navigation: {
         nextEl:  classname + ' .swiper-button-next',
         prevEl:  classname + ' .swiper-button-prev',
       },
     });
    }
    let tabsNum = 4;
    let dateTabNum = 12;
    let excurions_section_swiper_num = 4;
    $(window).on('load resize', function () {  


      /*
      //Header hright
      if (window.innerWidth < 768) {
        var upperbarHeight = $(".upper-bar").innerHeight(),
            navbarHeight = $(".navbar").innerHeight(),
            allHeight = upperbarHeight + navbarHeight;
        $(".custom-header-height").css({
            height : "calc( 100vh - "+ allHeight +"px)"
        });
      } else {
        $(".custom-header-height").css({
            height : "auto"
        });
      }
      */

      if (window.innerWidth < 578) {
        tabsNum = 2;
      } else if (window.innerWidth < 768) {
        
        tabsNum = 3;
      } else {
        
        tabsNum = 4;
      }

      newSwiper('.day-by-day-section .day_', tabsNum);




      /*********departure-date-section swiper *******/
      if (window.innerWidth < 578) {
        dateTabNum = 3;
      } else if (window.innerWidth < 768) {
        
        dateTabNum = 6;
      } else if (window.innerWidth < 992) {
        
        dateTabNum = 6;
      } else {
        
        dateTabNum = 12;
      }

      let departure_swiper = new Swiper('.departure-date-section .swiper-container', {
        slidesPerView: dateTabNum,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        simulateTouch: false,
        navigation: {
          nextEl: '.departure-date-section .swiper-button-next',
          prevEl: '.departure-date-section .swiper-button-prev',
        },
      });


      //excurions-section [slider]
      if (window.innerWidth < 578) {
        
        excurions_section_swiper_num = 1;

      } else if (window.innerWidth < 768) {
        
        excurions_section_swiper_num = 2;

      } else if (window.innerWidth < 992) {
        
        excurions_section_swiper_num = 3;
      } else if (window.innerWidth < 1200) {
        
        excurions_section_swiper_num = 3;
      } else if (window.innerWidth < 1749) {
        
        excurions_section_swiper_num = 4;
      } else {
        excurions_section_swiper_num = 5;
      }
      var excurions_section_swiper = new Swiper('.excurions-section .swiper-container', {
        slidesPerView: excurions_section_swiper_num,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        centeredSlides: true,
        navigation: {
          nextEl: '.excurions-section .swiper-button-next',
          prevEl: '.excurions-section .swiper-button-prev',
        },
      });
      excurions_section_swiper.slideTo(1);



    });

    $(".day-by-day-section .acc-item-details .custom-nav-pills .custom-nav-item").on("click", function() {
      let accItemDetails = $(this).parents(".acc-item-details"),
          dataClass = $(this).data("class"),
          custom_content = accItemDetails.find(dataClass);

          $(this).addClass("selected").siblings().removeClass("selected");
          
          
          custom_content.siblings().removeClass("active").fadeOut(0, function () {  
              custom_content.fadeIn(200).addClass("active");
          });
    });

    
    $(window).on("load", function () {  
      $(".tour-details-page .day-by-day-section .acc-item-details").hide();
    });
      
    
    /*.departure-date-section tabs click */
    $(".departure-date-section .main-content .date-tabs .swiper-slide").on("click", function () {  
      let data_swipe = $(this).data('swipe'),
          mainContent = $(this).parents(".main-content"),
          tab_content = mainContent.find(data_swipe);
      if (!$(this).hasClass("disable")) { // not have this class
        console.log(data_swipe);
        $(this).addClass("selected").siblings().removeClass('selected');
        //.departure-date-section .main-content .tabs-item-content .tab_content
        tab_content.siblings().removeClass("active").fadeOut(0, function () {  
          tab_content.fadeIn(200).addClass("active");
        });
        
      }
    });

    ///btn-itinerary
    $(".departure-date-section .table tbody tr .btn-itinerary").on("click", function () {  
      let parent_tr = $(this).parents('tr');
      $(".departure-date-section .table tbody tr .btn-itinerary").fadeIn(0);
      $(this).hide();
      $(".departure-date-section .table tbody tr.table-row-content").fadeOut(0);
      parent_tr.next('tr').fadeIn(200);
    });
    
    ///select-package-btn
    $(".departure-date-section tr.table-row-content .list-item .select-package-btn").on("click", function () {  
      $(this).toggleClass("btn-selected");
    });
    
    //excurions-section
    $(".excurions-section .card-container .overlay .card-info .card-btn").on("click", function () {  
      let dataCardContent = $(this).data('card-content'),
      excurions_section = $(this).parents('.excurions-section');
      excurions_section.find(dataCardContent).siblings().removeClass("active").fadeOut(0, function () {  
        excurions_section.find(dataCardContent).fadeIn().addClass("active");
      });    
    });

    
    $(window).on("load", function () {
      $(".excurions-section .box.active").show().siblings().hide();
        
      $(".departure-date-section .main-content .tabs-item-content .tab_content.active").show().siblings().hide();
      
      $(".day-by-day-section .acc-item-details .custom-tabs-content .custom_content.active").show().siblings().hide();
      //$(".tour-details-page .day-by-day-section .map-responsive .map_iframe.active").show().siblings().hide();
    });
    
    
});