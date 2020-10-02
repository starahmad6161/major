$(function () {  
    'use strict';


    

     /**************************************************************************************************** */
    /*********************************************Start One Range ******************************************/
    /**************************************************************************************************** */
    //Trigger Range slide [destance]
    $( "#result-range-max-destance" ).slider({
        range: "max",
        min: 1,
        max: 15,
        value: 10,
        slide: function( event, ui ) {
            $( "#result-destance" ).text(  ui.value + " miles +"  );
        }
    });
    $( "#result-destance" ).text( $( "#result-range-max-destance" ).slider( "value" )  + " miles +" );
    //Trigger Range slide [Price]
    $( "#result-range-max-price" ).slider({
        range: "max",
        min: 1,
        max: 1000,
        value: 500,
        slide: function( event, ui ) {
            $( "#result-price" ).text(  "$" + ui.value + "+"  );
        }
    });
    $( "#result-price" ).text( "$" + $( "#result-range-max-price" ).slider( "value" ) +  "+" );
    //Trigger Range slide Price
    $( "#result-range-max-flight-leg").slider({
        range: "max",
        min: 1,
        max: 24,
        value: 20,
        slide: function( event, ui ) {
            $( "#result-flight-leg" ).text(   ui.value + "h 15m"  );
        }
    });
    $( "#result-flight-leg" ).text( $( "#result-range-max-flight-leg" ).slider( "value" ) + "h 15m" );
    /**************************************************************************************************** */
    /*********************************************End One Range ******************************************/
    /**************************************************************************************************** */
  
      /**************************************************************************************************** */
    /*********************************************Start Tow Range ******************************************/
    /**************************************************************************************************** */
      //Trigger Range slide [lon]
      $( "#result-slider-range-take-lon" ).slider({
        range: true,
        min: 0,
        max: 24,
        values: [ 11 , 24 ],
        slide: function( event, ui ) {
          $( "#take-lon-val" ).text(  ui.values[ 0 ] + ":00" + " - " + ui.values[ 1 ] + ":00");
        }
      });
      $( "#take-lon-val" ).text( $( "#result-slider-range-take-lon" ).slider( "values", 0 ) + ":00" +
        " - " + $( "#result-slider-range-take-lon" ).slider( "values", 1 ) + ":00" );
      //Trigger Range slide [hkt]
      $( "#result-slider-range-take-hkt" ).slider({
        range: true,
        min: 0,
        max: 24,
        values: [ 11 , 24 ],
        slide: function( event, ui ) {
          $( "#take-hkt-val" ).text(  ui.values[ 0 ] + ":00" + " - " + ui.values[ 1 ] + ":00");
        }
      });
      $( "#take-hkt-val" ).text( $( "#result-slider-range-take-hkt" ).slider( "values", 0 ) + ":00" +
        " - " + $( "#result-slider-range-take-hkt" ).slider( "values", 1 ) + ":00" );
  
        
      //Trigger Range slide [Dueation]
      $( "#result-range-dration_2" ).slider({
        range: true,
        min: 0,
        max: 24,
        values: [ 11 , 24 ],
        slide: function( event, ui ) {
          $( "#result-flight-leg-2" ).text(  ui.values[ 0 ] + ":00" + " - " + ui.values[ 1 ] + ":00");
        }
      });
      $( "#result-flight-leg-2").text( $( "#result-range-dration_2" ).slider( "values", 0 ) + ":00" +
        " - " + $( "#result-range-dration_2" ).slider( "values", 1 ) + ":00" );
  
        
      //Trigger Range slide [Dueation]
      $( "#result-range-dration_price" ).slider({
        range: true,
        min: 100,
        max: 6000,
        values: [ 446 , 5949 ],
        slide: function( event, ui ) {
          $( "#result-flight-leg-price" ).text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
        }
      });
      $( "#result-flight-leg-price").text(  "$" + $( "#result-range-dration_price" ).slider( "values", 0 ) +
        " - $" + $( "#result-range-dration_price" ).slider( "values", 1 ) );
  
  
  
      /**************************************************************************************************** */
    /*********************************************End Tow Range ******************************************/
    /**************************************************************************************************** */

});