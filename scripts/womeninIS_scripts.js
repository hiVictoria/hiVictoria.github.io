function darkenText(){
    this.className = "nav-link text-dark";
}

function lightenText(){
    this.className = "nav-link text-muted";
}


document.getElementById("nav_home").addEventListener("mouseover", lightenText);
document.getElementById("nav_home").addEventListener("mouseout", darkenText);
document.getElementById("nav_projects").addEventListener("mouseover", lightenText);
document.getElementById("nav_projects").addEventListener("mouseout", darkenText);





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




