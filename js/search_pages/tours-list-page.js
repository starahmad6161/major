$(function () {  
    'use strict';


    /*
    $(window).on("load resize", function () {  


      if (window.innerWidth < 1200) {
          //trigger accordion rsult [sidebar]
          $(".result-accordion").accordion({
              collapsible: true,
              heightStyle : "content",
              active: false
          });

      } else {

          //trigger accordion rsult [sidebar]
          $(".result-accordion").accordion({
              collapsible: true,
              heightStyle : "content",
              active: 0
          });
      }
    });
     */
    let offerContentTabSwiper = new Swiper('.tours-list-page-content .swiper-container', {
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: false,
      simulateTouch: false,
      slideToClickedSlide: true,
      navigation: {
        nextEl: '.tours-list-page-content .swiper-button-next',
        prevEl: '.tours-list-page-content .swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 2
        },
        370: {
          slidesPerView: 3
        },
        578: {
          slidesPerView: 4
        },
      }
    });
    offerContentTabSwiper.on('slideChange', function () {
      activeTabContent(this.slides[this.activeIndex]);
    });
    $(".tours-list-page-content .custom-tab-content .custom-content.active").show().siblings().hide();
    $(".tours-list-page-content .custom-nav-tabs .custom-nav-item").on("click", function () {  
      activeTabContent(this);
    });
    function activeTabContent($this) {  
      
      let dataTabContent = $($this).data("tab-content"),
          customContent = $(".tours-list-page-content .custom-tab-content").find(dataTabContent);
          $($this).addClass('active').siblings().removeClass("active");
          customContent.siblings().removeClass("active").fadeOut(0, function () {  
            customContent.fadeIn(500).addClass("active");
          });   
    }

    /**************************************************************************************************** */
    /*********************************************Start Tow Range ******************************************/
    /**************************************************************************************************** */
    //Trigger Range slide [Pricing]
    $( "#result-slider-range-pricing" ).slider({
        range: true,
        min: 274,
        max: 11000,
        values: [ 274 , 11000 ],
        slide: function( event, ui ) {
          $( "#pricing-val" ).text(  "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
        }
      });
      $( "#pricing-val" ).text( "$" + $( "#result-slider-range-pricing" ).slider( "values", 0 ) +
        " - $" + $( "#result-slider-range-pricing" ).slider( "values", 1 ) );
    //Trigger Range slide [Pricing]
    $( "#result-slider-range-nights" ).slider({
        range: true,
        min: 0,
        max: 21,
        values: [ 0 , 21 ],
        slide: function( event, ui ) {
          $( "#nights-val" ).text(  ui.values[ 0 ] + " Night to " + ui.values[ 1 ] + " Nights");
        }
      });
      $( "#nights-val" ).text( $( "#result-slider-range-nights" ).slider( "values", 0 ) +
        " Night to " + $( "#result-slider-range-nights" ).slider( "values", 1 ) + " Nights");
});