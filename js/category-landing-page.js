$(function () {  
    'use strict';
    
    //When Click [ when-to-go ] Tab 
    $(".when-to-go .main-content .left-section .when-to-go__tabs li").on("click", function () {  
        var dataContent = $(this).data("content");
        
        $(this).addClass("active").siblings("li").removeClass("active");

        $(dataContent).siblings("li").fadeOut(0, function () {  
            $(dataContent).fadeIn(300);
        });
    });
    
});