$(function () {
    'use strict';


    $(".upper-bar .upper-search-container .search").on("click", function () {  
        $(this).parents(".upper-search-container").find('.upper-search').fadeToggle(200);
    });
    //Resbonsive Slider
    var upperbar__height = parseInt($(".upper-bar").innerHeight()); 
    var navbar__height = parseInt($(".navbar").innerHeight());
    var total__height = upperbar__height + navbar__height;
    //console.log(upperbar__height + navbar__height);
    $(".slider").css({
        height :  "calc( 100vh - " + total__height +  "px  ) "
    });


    //**Trigger All Datepicker */
    $( ".datepicker" ).datepicker({
        minDate: new Date
    });

    $(window).on("load resize", function () {  
      
        if (window.innerWidth < 1025) {
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




    /*==================================================*/
    /****** When Click Search Icon In upper-bar ************/
    /*=================================================*/
    /*
    $(".upper-bar .search").on("click",function () {
        $(".upper-bar .search-container").fadeToggle(); 
    });
    */
    /*==================================================*/
    /****** When Click Search Icon In Navbar ************/
    /*=================================================*/
    $(".navbar .navbar-collapse .search").on("click",function () {
        $(".navbar .navbar-collapse .search-container").fadeToggle(); 
    });

    //When Click  [Destination] item In Navbar 
    $(".navbar .navbar-collapse .navbar-nav .nav-item .drop-title").on("click", function (e) {
        $(this).parents(".nav-item").find(".Drop-Down").slideToggle(200);
        //var target = $(e.target);
        //console.log(target);
    });
    //When click any where Then a Box target elements Will Slide up [ Like Passenger(s) (in search-box) , Destination (In Navbar) ]
    //The Drop Down Menu Will Slide Up Whene Click Any Where
    $("body").on("click", function (e) {
        if (!$(this).hasClass("anyWhere")) { // not has class anyWhere
            if ($(e.target).parents(".anyWhere").length == 0 ) { //not has class anyWhere
                $(".anyWhere-menu").slideUp(200);
            }
        }
    });

    // go-top Item
    $(window).on("scroll", function () {  
        //console.log($(window).scrollTop());
        if ($(window).scrollTop() >= 500 ) {
            $(".go-top").css("display","block");
            $(".go-top .icon").css("left","0");
        } else {
            $(".go-top").css("display","none");
            $(".go-top .icon").css("left","100%");
        }
    });
    $(".go-top .icon").on("click", function () {  
        $("body, html").animate({
            scrollTop : 0
        },400)
    });



    /*==================================================*/
    /****** When Click Fixed Result Icon  *******/
    /*=================================================*/
    
    $(".result-fixed-buttons ul li").on("click", function () {  
        $(this).addClass("active").siblings().removeClass("active");
    });
   

    /*==================================================*/
    //**** add Class Active To Selected Time ************/
    /*==================================================*/
    $(".result-sidebar .times ul li").on("click", function () {  
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    /*==================================================*/
    //************* When click Pagination **************/
    /*==================================================*/
    $(".pagination ul li").on("click", function () {
        if ($(this).hasClass("number")) {
            $(this).addClass("active").siblings().removeClass("active");
        }
    });
    
    //Trigger Any Select-box
    $(".jq-selectbox .select-box").selectmenu();

    
});