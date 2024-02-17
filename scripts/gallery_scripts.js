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
  $(window).on("load", function() {
    var tagsload = $(".tag-load");
  
    tagsload.addClass("visible");
  });


  
function darkenText(){
  this.className = "nav-link text-muted";
}

function lightenText(){
    this.className = "nav-link text-white";
}


document.getElementById("nav_home").addEventListener("mouseover", lightenText);
document.getElementById("nav_home").addEventListener("mouseout", darkenText);
document.getElementById("nav_projects").addEventListener("mouseover", lightenText);
document.getElementById("nav_projects").addEventListener("mouseout", darkenText);
document.getElementById("nav_gallery").addEventListener("mouseover", lightenText);
document.getElementById("nav_gallery").addEventListener("mouseout", darkenText);
  
  