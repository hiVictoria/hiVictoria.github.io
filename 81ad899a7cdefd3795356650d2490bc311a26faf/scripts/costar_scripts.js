$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });


$(window).on('load', function() {
  if($(window).width() <= 992) {
      $('.contacts').addClass('align-items-start');
      $('.contacts').removeClass('justify-content-center');
  }else{
      $('.contacts').addClass('justify-content-center');
      $('.contacts').removeClass('align-items-start');
  }
})

$(window).on('resize', function() {
  if($(window).width() <= 992) {
      $('.contacts').addClass('align-items-start');
      $('.contacts').removeClass('justify-content-center');
  }else{
      $('.contacts').addClass('justify-content-center');
      $('.contacts').removeClass('align-items-start');
  }
})



