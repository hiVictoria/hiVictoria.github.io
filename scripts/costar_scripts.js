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




  "use strict"
  var button = document.querySelectorAll('[data-id="button"]')
  var password = document.querySelectorAll('[data-id="password"]')

  function login(secret) {
      var hash = sha1(secret)
      var url = hash + "/costar.html"
      var alert = document.querySelectorAll('[data-id="alert"]')

      var request = new XMLHttpRequest()
      request.open('GET', url, true)

      request.onload = function () {
          if (request.status >= 200 && request.status < 400) {
              window.location = url
          } else {
              parent.location.hash = hash
              alert[0].style.display = 'block'
              password[0].setAttribute('placeholder', 'Try again')
              password[0].value = ''
          }
      }
      request.onerror = function () {
          parent.location.hash = hash
          alert[0].style.display = 'block'
          password[0].setAttribute('placeholder', 'Try again')
          password[0].value = ''
      }
      request.send()
  }

  button[0].addEventListener("click", function () {
      login(password[0].value)
  })

  document.onkeydown = function (e) {
      e = e || window.event
      if (e.keyCode == 13) {
          login(password[0].value)
      }
  }