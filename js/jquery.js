// console.log('my script is working');


$('#lock-front').hide();
$('#unlock-back').hide();
$('#turn-on').hide();
$('#turn-off-two').hide();
$('#turn-on-three').hide();
$('#turn-on-all').hide();



$(document).ready(function(){

  //  Notification modal screen
  $('#noti').click(function(){
    $('#id01').show();
  });

  //  Doors lock/unlock modal screen
  $('#modal-door').click(function(){
    $('#id02').show();
  });

  // lock and unlock front door
  $('#unlock-front').click(function(){
    $('#lock-front').show();
    $('#unlock-front').hide();
  });

  $('#lock-front').click(function(){
    $('#unlock-front').show();
    $('#lock-front').hide();
  });

  // unlock and lock back door
  $('#unlock-back').click(function(){
    $('#lock-back').show();
    $('#unlock-back').hide();
  });

  $('#lock-back').click(function(){
    $('#unlock-back').show();
    $('#lock-back').hide();
  });

  // first lightbulb on/off - main light
  $('#turn-off').click(function(){
     $('#greyoff').css('filter','grayscale(100%)');
     $('#turn-off').hide();
     $('#turn-on').show();
     $('#light-bulb-one').css('color','#ccc');
  });

  $('#turn-on').click(function(){
     $('#greyoff').css('filter','none');
     $('#turn-on').hide();
      $('#turn-off').show();
      $('#light-bulb-one').css('color','#ffd700');
  });

  // second lightbub on/off - wall light

  $('#turn-on-two').click(function(){
     $('#turn-on-two').hide();
     $('#turn-off-two').show();
     $('#light-bulb-two').css('color','#ffd700');
  });

  $('#turn-off-two').click(function(){
     $('#turn-off-two').hide();
      $('#turn-on-two').show();
      $('#light-bulb-two').css('color','#ccc');
  });


  // thermostat on/off switch
  $('#turn-off-three').click(function(){
     $('#turn-off-three').hide();
     $('#turn-on-three').show();
     $('.fas.fa-thermometer-three-quarters').css('color','#ccc');
  });

  $('#turn-on-three').click(function(){
     $('#turn-on-three').hide();
      $('#turn-off-three').show();
      $('.fas.fa-thermometer-three-quarters').css('color','black');
  });




 // turn on/off button for cool mode, active blue color
  $('#cool-on').on({
    click: function(){
      $('.fa-snowflake').css('color','#3BACD9');
      $('.cool-on-text').css('color','#3BACD9');
    },
    mouseleave: function(){
      $('.fa-snowflake').css('color', '#ccc');
      $('.cool-on-text').css('color','#ccc');
    }
  });

  // turn on/off button for heat mode, active red color
  $('#heat-on').on({
    click: function(){
      $('.fa-fire').css('color','red');
      $('.heat-on-text').css('color','red');
    },
    mouseleave: function(){
      $('.fa-fire').css('color', '#ccc');
      $('.heat-on-text').css('color','#ccc');
    }
  });

  // turn on/off button for fan mode, active dark blue color
  $('#fan-on').on({
    click: function(){
      $('.fa-fan').css('color','#0A3459');
      $('.fan-on-text').css('color','#0A3459');
    },
    mouseleave: function(){
      $('.fa-fan').css('color', '#ccc');
      $('.fan-on-text').css('color','#ccc');
    }
  });

  // turn on/off button for auto mode, active black color
  $('#auto-on').on({
    click: function(){
      $('.fa-autoprefixer').css('color','black');
      $('.auto-on-text').css('color','black');
    },
    mouseleave: function(){
      $('.fa-autoprefixer').css('color', '#ccc');
      $('.auto-on-text').css('color','#ccc');
    }
  });


});



// ==================== slider function (light 1) ================
$( function() {
   $( '#slider-range-min' ).slider({
     range: 'min',
     value: 37,
     min: 1,
     max: 100,
     slide: function( event, ui ) {
       $( '#amount' ).val( ui.value + '%');
     }
   });
   $( '#amount' ).val( $( '#slider-range-min' ).slider( 'value' ) + '%' );
 });


 // ==================== slider function 2 (light 2) ================
 $( function() {
    $( '#slider-range-min-two' ).slider({
      range: 'min',
      value: 75,
      min: 1,
      max: 100,
      slide: function( event, ui ) {
        $( '#amount-two' ).val( ui.value + '%');
      }
    });
    $( '#amount-two' ).val( $( '#slider-range-min-two' ).slider( 'value' ) + '%' );
  });


  // ==================== slider function 3 (temperature) ================
  $( function() {
     $( '#slider-range-min-three' ).slider({
       range: 'min',
       value: 24,
       min: 18,
       max: 30,
       slide: function( event, ui ) {
         $( '#amount-three' ).val( ui.value + '°C');
       }
     });
     $( '#amount-three' ).val( $( '#slider-range-min-three' ).slider( 'value' ) + '°C' );
   });
