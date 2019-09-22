// console.log('my script is working');
$('#lock-front').hide();
$('#unlock-back').hide();
$('#turn-on').hide();


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


  $('#turn-off').click(function(){
     $('#greyoff').css('filter','grayscale(100%)');
     $('#turn-off').hide();
     $('#turn-on').show();
  });

  $('#turn-on').click(function(){
     $('#greyoff').css('filter','none');
     $('#turn-on').hide();
      $('#turn-off').show();
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

  // $('#room-active').on({
  //   click: function(){
  //     $('#default').css('background-color','#EF502D');
  //   },
  //   mouseleave: function(){
  //     $('#default').css('background-color', 'none');
  //   }
  // });

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
