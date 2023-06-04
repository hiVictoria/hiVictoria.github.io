$(function() {
    $('#example').vTicker();
  });

  $(document).ready(function() {
    $('#ticker').vticker();
  });


  $(document).ready(function() {
    $('#ticker').vticker({
      speed: 200,  // Set the scroll speed in milliseconds
      pause: 2000  // Set the pause duration between scrolls in milliseconds
    });
  });