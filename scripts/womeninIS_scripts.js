// function darkenText(){
//     this.className = "nav-link text-dark";
// }

// function lightenText(){
//     this.className = "nav-link text-muted";
// }

// document.getElementById("nav_home").addEventListener("mouseover", lightenText);
// document.getElementById("nav_home").addEventListener("mouseout", darkenText);
// document.getElementById("nav_projects").addEventListener("mouseover", lightenText);
// document.getElementById("nav_projects").addEventListener("mouseout", darkenText);




$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".fade-in");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });


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

// Hide Header on on scroll down
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

// Next & Prev Project text change for mobile
window.addEventListener('resize', function() {
  var element = document.getElementById('next');
  if (window.innerWidth <= 474) {
    element.textContent = "Next";
  } else {
    element.textContent = "Next Project";
  }
});

// Initial text content setup based on window width
if (window.innerWidth <= 474) {
  document.getElementById('next').textContent = "Next";
} else {
  document.getElementById('next').textContent = "Next Project";
}


window.addEventListener('resize', function() {
  var element = document.getElementById('previous');
  if (window.innerWidth <= 474) {
    element.textContent = "Previous";
  } else {
    element.textContent = "Previous Project";
  }
});

// Initial text content setup based on window width
if (window.innerWidth <= 474) {
  document.getElementById('previous').textContent = "Previous";
} else {
  document.getElementById('previous').textContent = "Previous Project";
}