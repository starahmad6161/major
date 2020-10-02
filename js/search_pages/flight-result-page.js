$(function () {
    'use strict';


 

    //customBox like [Passenger]
    $(".flight-result-page .passenger-container .custom-box-input").customBox();
    
    

    //When Click [ More Info ]
    $(".main-search-body .airplane-flight li .content .show-more").on("click", function () {  
        $(this).find(".text").toggleClass("invisible");
        $(this).find("svg").toggleClass("rotated");

        $(this).parents(".airplane-list").find(".more-info").slideToggle(500);
        $(this).parents(".airplane-list").toggleClass("active");
    });


    
});