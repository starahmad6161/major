$(function () {  
    'use strict';

    
    //When Click More Info Button
   $(".cruise-result-page .main-search-body .cruise-list .cruise-list__item .more-info-btn").on("click", function () {  
      var listItem = $(this).parents(".cruise-list__item");
      var svgEle = $(this).find("svg");
      var chevDown = $(".cruise-result-page .more-info-btn .fa-chevron-down").parents(".more-info-btn");

      if (svgEle.hasClass("fa-chevron-down")) { //Chev Down
        
        listItem.find(".more-info-content").slideDown(300);
        $(this).addClass("d-none");
        $(this).removeClass("d-flex");

      } else if (svgEle.hasClass("fa-chevron-up")) { //Chev Up
        listItem.find(".more-info-content").slideUp(300 , function () {  
          chevDown.addClass("d-flex");
          chevDown.removeClass("d-none");
        });
      }
   });

   /*Select Button */
   $(".cruise-result-page .main-search-body .cruise-list .cruise-list__item .card .card-body .select-btn").on('click', function () {  
     $(this).toggleClass('selected');
   });
   
    let btnSwiper = new Swiper('.more-info-content .custom-nav-tabs .swiper-container', {
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: false,
      loopFillGroupWithBlank: false,
      navigation: {
        nextEl: '.more-info-content .custom-nav-tabs .swiper-button-next',
        prevEl: '.more-info-content .custom-nav-tabs .swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 2
        },
        430: {
          slidesPerView: 3
        },
        578: {
          slidesPerView: 4
        },
        1200: {
          slidesPerView: 6
        }
        
      }
    });
    
    $(".cruise-result-page .main-search-body .cruise-list .cruise-list__item .more-info-content .custom-tab-content .custom-content-item.custom-content-item_active").show().siblings().hide();
    $(".cruise-result-page .main-search-body .cruise-list .cruise-list__item .more-info-content .custom-nav-tabs .custom-nav-item").on("click", function () {  
      let dataCustomTab = $(this).data('custom-tab');
      $(this).addClass("custom-nav-item_active").siblings().removeClass("custom-nav-item_active");
      $(dataCustomTab).siblings().removeClass("custom-content-item_active").fadeOut(0, function () {  
        $(dataCustomTab).fadeIn(200).addClass("custom-content-item_active");
      });
    });

    /**********************************************************************************/
    /**************************** trigger select box ***********************************/
    $( "#deck" ).selectmenu();




    //Trigger Custom Box [ Adult , Children , Infants  ]
    $(".cruise-result-page .custom-box-input").customBox();



    
    $(".cruise-result-page .photos").css("display", "block");
    let photoSwiper = new Swiper('.photos .swiper-container', {
      spaceBetween: 10,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: false,
      slideToClickedSlide: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.photos .swiper-button-next',
        prevEl: '.photos .swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 3
        },
        578: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 5
        },
        992: {
          slidesPerView: 5
        },
        1200: {
          slidesPerView: 6
        },
        1750: {
          slidesPerView: 7
        },
        
      }
    });
    photoSwiper.slideTo(3)
    photoSwiper.on('slideChange', function () {
      let fullImg = $(".cruise-result-page .photos").find($(this.slides[this.activeIndex]).data('full-img'));
      console.log($(this).parents(".photos"));
      fullImg.siblings().removeClass('active').fadeOut(0, function () {  
        fullImg.fadeIn(200).addClass('active')
      });
      
    });


    //Trigger lightGallery library
    $('#lightgallery').lightGallery();
    //When Click full-img
    $('.cruise-result-page .photos .full-img-container .full-img').on('click', function() {
      $(this).parents('.photos').find('#lightgallery .lg-item:eq('+ $(this).index() +')').trigger('click');
    });
    
    $(window).on("load", function () {  
      $(".cruise-result-page .main-search-body .cruise-list .cruise-list__item .more-info-content").css("display", "none");
      $(".cruise-result-page .photos").css("display", "none");
      
    });
    
    
    /*scroll-right-btn in table */
    $(".cruise-result-page .main-search-body .more-info-content .itinerary .scroll-right-btn").on('click', function (e) {  
      //e.offsetX += 10;
      console.log(e.offsetX + 5);
      $(this).parents('.itinerary').find('.table').animate({  
        scrollLeft : "+=30"
      } ,200);
    });
    
});