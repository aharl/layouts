$(function() {

  $( "#logger" ).submit(function( event ) {
    var logValue = $("input.logme").val();
    console.log( logValue );
    event.preventDefault();
  });

});
