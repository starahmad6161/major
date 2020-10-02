$(function () {  
    'use strict';

    //************************/
    //******** In lagrg screen Set image height as card body *******/
    //************************/
    /*
   */
    if ($(window).innerWidth() > 1500 ) {
        $(".main-search-body .card .card-body").each(function () {  
            let cardImg = $(this).parents(".card").find(".image");
           //console.log("cardImg" + cardImg);
            cardImg.height($(this).innerHeight());
        });
    } else {
        $(".main-search-body .card .image").css({
            height : "100%"
        });
    }
    
    //Trigger Custom Box [ Adult , Children , Infants  ]
    $(".holiday-hotel-result-page .custom-box-input").customBox();


});