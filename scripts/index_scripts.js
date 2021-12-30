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

