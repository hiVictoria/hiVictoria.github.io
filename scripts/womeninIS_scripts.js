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

  const myNav = document.getElementById('navbar')
  const black = document.getElementById('black')
  const blue = document.getElementById('blue')
  const navLinks = document.getElementsByClassName('header-link')
  const button = document.getElementById("button")
   


  window.onscroll = function() {
    const triggerYBlack = black.getBoundingClientRect().y
    const triggerYBlackEnd = black.getBoundingClientRect().bottom

    const triggerYBlue = blue.getBoundingClientRect().y
    const triggerYBlueEnd = blue.getBoundingClientRect().bottom
      console.log("triggerYBlack" + triggerYBlack)
      console.log("triggerYBlackEnd" + triggerYBlackEnd)
      console.log("triggerYBlue" + triggerYBlue)
      console.log("triggerYBlueEnd" + triggerYBlueEnd)

    if((triggerYBlack < 73) && (73 < triggerYBlackEnd) && (triggerYBlackEnd < 1690)){
      myNav.classList.remove('scroll-color-blue')
      myNav.classList.add('scroll-color')       
      button.classList.add('btn-white')
      for (var i=0; i<navLinks.length; i++){
        navLinks[i].classList.remove('text-dark')
        navLinks[i].classList.add('scroll-link')
      }
  
    }else if((triggerYBlue < 73) && (triggerYBlueEnd > 73) && (triggerYBlueEnd < 1700)){
      myNav.classList.remove('scroll-color')
      myNav.classList.add('scroll-color-blue')
      button.classList.add("btn-white")
      for (var i=0; i<navLinks.length; i++){
        navLinks[i].classList.add('nav-white');
      }
      // for (var i=0; i<navLinks.length; i++){
      //   navLinks[i].classList.remove('scroll-link')
      //   navLinks[i].classList.add('text-dark')
      //   button.classList.remove('button-color')
      // }
    }
    else{
      myNav.classList.remove('scroll-color')
      myNav.classList.remove('scroll-color-blue')
      button.classList.remove('btn-white')
      for (var i=0; i<navLinks.length; i++){
      navLinks[i].classList.remove('nav-white')
      navLinks[i].classList.remove('scroll-link')
      navLinks[i].classList.add('text-dark') 
    }
    }

    // if(triggerYBlackEnd > triggerYBlue){
    //   myNav.classList.add('scroll-color-blue')
    // }else{
    //   myNav.classList.remove('scroll-color-blue')
    // }
  }

  function hoverCheck() {
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('mouseover', function() {
            if (myNav.classList.contains('scroll-color-blue')) {
                this.classList.add('hover-blue'); // Use 'this' to refer to the current element
                button.classList.add("hover-white")
            }
        }); // Close the addEventListener function call

        navLinks[i].addEventListener('mouseout', function() {
          if (myNav.classList.contains('scroll-color-blue')) {
              this.classList.remove('hover-blue'); // Use 'this' to refer to the current element
              button.classList.remove("hover-white")
          }
        }); // Close the addEventListener function call
    } // Close the for loop
  }
  
hoverCheck();

// const element = document.getElementById('nav');
// element.addEventListener('mouseover', function() {
//   if (myNav.classList.contains('scroll-color-blue')){
//     for (var i=0; i<navLinks.length; i++){
//       navLinks[i].classList.add('hover-white');
//     }
//   } 
//   // Add the 'hovered' class when the mouse is over the element 
// });

// element.addEventListener('mouseout', function() {
//   // Remove the 'hovered' class when the mouse leaves the element
//   if (myNav.classList.contains('scroll-color-blue')){
//     for (var i=0; i<navLinks.length; i++){
//       navLinks[i].classList.remove('hover-white');
//     }
//   } 
// });