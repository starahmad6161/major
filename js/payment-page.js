$(function () {  
    'use strict';


    //Add Class Active To [Selected Card] Section
    $(".payment-page .payment-detail .select-card li").on("click", function() {

        $(this).addClass("active").siblings().removeClass("active");
    });
});