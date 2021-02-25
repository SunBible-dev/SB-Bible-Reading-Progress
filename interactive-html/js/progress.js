// The JS
$(document).ready(function(){

    $("section div").toggle(
        function(){$( this).css({"background-color": "green"});},
        function(){$( this).css({"background-color": "blue"});},
        function(){$( this).css({"background-color": "black"});}
      );
   
    });