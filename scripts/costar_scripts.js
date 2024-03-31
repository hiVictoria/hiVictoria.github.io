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

const myNav = document.getElementById('navbar')
const trigger = document.getElementById('orange')

window.onscroll = function() {
  const triggerY = trigger.getBoundingClientRect().y
  const navLinks = document.getElementsByClassName('header-link')
  const button = document.getElementById("button")

  if(73 > triggerY){
    myNav.classList.add('scroll-color')
    for (var i=0; i<navLinks.length; i++){
      navLinks[i].classList.remove('text-dark')
      navLinks[i].classList.add('scroll-link')
      button.classList.add('button-color')
    }

  }else{
    myNav.classList.remove('scroll-color')
    for (var i=0; i<navLinks.length; i++){
      navLinks[i].classList.remove('scroll-link')
      navLinks[i].classList.add('text-dark')
      button.classList.remove('button-color')
    }
  }
}

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
console.log(navbarHeight)

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
  