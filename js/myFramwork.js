$(function () {

    "use strict";

    $.fn.customBox = function () {
        /* Passenger Input Increase And Decrease*/
         var adultPassengerNumber = 0;
         var childPassengerNumber = 0;
         var infantsPassengerNumber = 0;
         var $this = this;
         $(this).parents(".custom-box-container").find("svg").on("click", function () {
             var inputNumber = $(this).parents(".number-box").find("input");
             var passengerNumber = $(this).parents(".number-box").find(".custom-box-number");
 
 
             if ($(this).parents(".number-box").hasClass("adults")) { //Adults
 
                 if ($(this).hasClass("fa-plus")) {
                     adultPassengerNumber++;
                 } else  {
                     if (adultPassengerNumber > 0) {
                         adultPassengerNumber--;
                     }
                 }
                 inputNumber.val(adultPassengerNumber);
                 $(passengerNumber).text(adultPassengerNumber);
             } else if ($(this).parents(".number-box").hasClass("child")) { // Child
 
                 if ($(this).hasClass("fa-plus")) {
                     childPassengerNumber++;
                 } else  {
                     if (childPassengerNumber > 0) {
                         childPassengerNumber--;
                     }
                 }
                 inputNumber.val(childPassengerNumber);
                 $(passengerNumber).text(childPassengerNumber);
             } else { //infants
 
                 if ($(this).hasClass("fa-plus")) {
                     infantsPassengerNumber++;
                 } else  {
                     if (infantsPassengerNumber > 0) {
                         infantsPassengerNumber--;
                     }
                 }
                 inputNumber.val(infantsPassengerNumber);
                 $(passengerNumber).text(infantsPassengerNumber);
             }
 
             $($this).val(`${ adultPassengerNumber == 0 ? '' : adultPassengerNumber + "Adult,"}${ childPassengerNumber == 0 ? '' : childPassengerNumber + "Child,"}${ infantsPassengerNumber == 0 ? '' : infantsPassengerNumber + "Infants"}`);
         });
 
 
         $($this).on("click", function () {  
            $(".custom-box-container .custom-box-select-options").slideToggle(200);
       });
         
     }

    //toggle countries search 
    $.fn.countrySearchBox = function () {  
        var $this = this;
        $(this).on("click", function () {
            $($this).parents(".countries-container").find(".countries-list-result").slideToggle(200);
        });
    }
    //When click checkbox on [ Home Page -> Search-box -> Return Date ]
    $(".return-date-box .return-check").on("click", function () {  
        $(this).toggleClass("checked");
        if ($(this).hasClass("checked")) {
            $(this).parents(".return-date").find(".return-input").removeAttr("disabled");
            $(this).parents(".return-date").find(".input-group").css("opacity","1");
        } else {
            $(this).parents(".return-date").find(".return-input").attr("disabled","disabled");
            $(this).parents(".return-date").find(".input-group").css("opacity",".4");
        }
    });




    /*==================================================*/
    /* special-tabs */
    /* Change Position Of Tabs with screen width */
    /*=================================================*/

    $.fn.manageTagbs = function () { 
        // this == special-tabs

        var Screen_Width = window.innerWidth;
        
        var all_Tabs= $(this).find(".tab");
        if (Screen_Width < 992 ) { //
                
            all_Tabs.each(function () { 
                    let dataTabs = $(this).data("tabs");
                    //console.log(dataTabs);
                    $(this).insertBefore(dataTabs);
                });
            }
    }
    $(window).on("resize", function () {    
        $(".special-tabs").manageTagbs();
    });
    
    $(".special-tabs .tab-content.active").fadeIn(200).siblings(".tab-content").fadeOut(200);
    $(".special-tabs .tab").on("click", function () {
        let dataTabs = $(this).data("tabs");
        let targetEle= $(this).parents(".special-tabs").find(dataTabs);
        $(this).addClass("selected").siblings(".tab").removeClass("selected");
        
        targetEle.siblings(".tab-content").removeClass("active").fadeOut( 10, function () {  
            $(this).parents(".special-tabs").find(dataTabs).addClass("active").fadeIn(200);
        });
    });
    /// Trigger [manageTagbs] function
    $(".special-tabs").manageTagbs();
    
    

    //Special Slider [ like Dining section at Hotel-Details-Page ]
    $.fn.specialSlider = function (boxWidth = 250) {

        var boxesParent = $(this),
            boxes = $(this).find(".boxes"),
            box = $(this).find(".box"),
            boxActive = $(this).find(".box.active"),
            wid = 0;

        box.css({
            width: boxWidth
        });
        
        boxActive.prevAll().each(function () {
            wid += $(this).width() / 4;
        });
        boxes.css({
            transform: "translateX(-" + wid + "px)"
        })
        boxesParent.find(".indicators .chev").on("click", function () {
            if ( window.innerWidth < 992 ) {
                console.log("less");
                boxWidth = 0;
            }
            
            
            var boxActive = boxesParent.find(".box.active"),
                boxes = boxesParent.find(".boxes");
            if ($(this).hasClass("chev-left")) {
                //Add & Remove [Active] Class
                boxActive.removeClass("active").prev().addClass("active");
                //Move boxes
                var wid = 0;
                var boxActive = boxesParent.find(".box.active");
                boxActive.prevAll().each(function () {
                    wid += $(this).width();
                });
                console.log(wid);
            
                if (boxActive.is(":first-of-type")) {
                    boxes.css({
                        transform: "translateX(0px)"
                    });
                } else {
                    boxes.css({
                        transform: "translateX(-" + (wid - boxWidth)  + "px)"
                    });
                }
                
            } else if ($(this).hasClass("chev-right")) {
                
                //Add & Remove [Active] Class
                boxActive.removeClass("active").next().addClass("active");
                //Move boxes
                var wid = 0;
                var boxActive = boxesParent.find(".box.active");
                boxActive.prevAll().each(function () {
                    wid += $(this).width();
                });
                boxes.css({
                    transform: "translateX(-" + (wid - boxWidth)  + "px)"
                });
            }
            // Check Last & First Element to Show Or Hide Indicators
            if (boxesParent.find(".box.active").is(":last-of-type")) {
                console.log("last");
                boxesParent.find(".chev-left").show();
                boxesParent.find(".chev-right").hide();

            } else if (boxesParent.find(".box.active").is(":first-of-type")) {
                boxesParent.find(".chev-right").show();
                boxesParent.find(".chev-left").hide();
            } else {
                boxesParent.find(".chev-right").show();
                boxesParent.find(".chev-left").show();
            }
        });
    }

    /**************************************************/
    /** responsive-tabs [Cruise details => (Deck)]*****/
    /**************************************************/
    
    var windowWidth = window.innerWidth;
    if (windowWidth < 992) {
        $(".responsive-tabs .responsive-tabs-items .res-tab-item").each(function () {  
            var $this = this,
                dataClass = $(this).data("class"),
                responsive_tabs = $(this).parents(".responsive-tabs");
                responsive_tabs.find(dataClass).prepend($this);
        });
    }

    $(".responsive-tabs .res_tab_content.active .tab-content").fadeIn();
    $(".responsive-tabs .res-tab-item").on("click", function () {  
        var $this = this;
        var dataClass = $(this).data("class"),
            responsive_tabs = $(this).parents(".responsive-tabs");
            $(responsive_tabs).find(dataClass).siblings().find(".tab-content").fadeOut(0, function () {  
                $(responsive_tabs).find(dataClass).find(".tab-content").fadeIn(300);
            });
            //Scroll to Top
            responsive_tabs.find(".res-tab-item").removeClass("selected");
            $(this).addClass("selected");
            /*
            if (window.innerWidth < 992) {
               $("html, body").animate({
                    scrollTop : $($this).offset().top 
                });
            }
            */
    });

    /*************************** */
    /*****Scroll bar******** */
    /*************************** */
    $.fn.scrollSection = function () {  
        var scroll_content = $(this).find(".scroll-content"),
            scroll_cursor =  $(this).find(".scroll-cursor"),
            $this = this;
            var scroll_H = scroll_content.prop("scrollHeight"); //100%
            scroll_content.on("scroll", function () {  
                //console.log(scroll_content.scrollTop());
                //console.log(scroll_H);
                scroll_cursor.css({
                    top : (scroll_content.scrollTop() / 6)
                });
            });
    }
    
    
    
});