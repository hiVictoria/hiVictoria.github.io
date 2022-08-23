function displayOn(link){
    var image = link + "_img";
    document.getElementById(image).style.display ="block";
}

function displayOff(link){
    var image = link + "_img";
    document.getElementById(image).style.display ="none";
}

function display(){
    document.getElementById("cmu_img").style.display ="block";
}

function displayoff(){
    document.getElementById("cmu_img").style.display ="none";
}

function darkenText(){
    this.className = "nav-link text-dark";
}

function lightenText(){
    this.className = "nav-link text-muted";
}

document.getElementById("victoria").addEventListener("mouseover", function(){displayOn("victoria")});
document.getElementById("victoria").addEventListener("mouseout", function(){displayOff("victoria")});

document.getElementById("cmu").addEventListener("mouseover", function(){displayOn("cmu")});
document.getElementById("cmu").addEventListener("mouseout", function(){displayOff("cmu")});

document.getElementById("nature").addEventListener("mouseover", function(){displayOn("nature")});
document.getElementById("nature").addEventListener("mouseout", function(){displayOff("nature")});

document.getElementById("cooking").addEventListener("mouseover", function(){displayOn("cooking")});
document.getElementById("cooking").addEventListener("mouseout", function(){displayOff("cooking")});

document.getElementById("eating").addEventListener("mouseover", function(){displayOn("eating")});
document.getElementById("eating").addEventListener("mouseout", function(){displayOff("eating")});

document.getElementById("art").addEventListener("mouseover", function(){displayOn("art")});
document.getElementById("art").addEventListener("mouseout", function(){displayOff("art")});

document.getElementById("nav_home").addEventListener("mouseover", lightenText);
document.getElementById("nav_home").addEventListener("mouseout", darkenText);
document.getElementById("nav_projects").addEventListener("mouseover", lightenText);
document.getElementById("nav_projects").addEventListener("mouseout", darkenText);



function changeColor() {
    var curr = document.getElementById("victoria").style.color;
    console.log(curr);
    if (curr == "rgb(47, 149, 153)"){
        document.getElementById("victoria").style.color = "#59709c ";
    }
    if (curr == "rgb(136, 212, 202)"){
        document.getElementById("victoria").style.color = "#2F9599";
    }
    else{
        document.getElementById("victoria").style.color = "#88d4ca"
    }

}

  document.getElementById("victoria").addEventListener("touchstart", changeColor);

