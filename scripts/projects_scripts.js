
function displayOverlay(project_name){
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#" + project_name + ":after {content:no-open-quote;position: absolute;z-index: 3;height: 100%;width: 100%;background: #000;opacity: 0.7;}";

    var title = project_name + "_title";
    document.getElementById(title).style.display ="block";
}


function displayOverlayCS(project_name){
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#" + project_name + ":after {content:no-open-quote;position: absolute;z-index: 3;height: 100%;width: 100%;background: #000;opacity: 0.7;}";

    var title = project_name + "_title";
    document.getElementById(title).style.display ="block";

    var cs = project_name + "_cs";
    document.getElementById(cs).style.display ="block";
}

function overlayOff(project_name){
    var styleEl = document.head.appendChild(document.createElement("style"));
    styleEl.innerHTML = "#" + project_name + ":after {opacity: 0;}";

    var title = project_name + "_title";
    document.getElementById(title).style.display ="none";

}

function overlayOffCS(project_name){
    var styleEl = document.head.appendChild(document.createElement("style"));
    styleEl.innerHTML = "#" + project_name + ":after {opacity: 0;}";

    var title = project_name + "_title";
    document.getElementById(title).style.display ="none";

    var cs = project_name + "_cs";
    document.getElementById(cs).style.display ="none";
}

function darkenText(){
    this.className = "nav-link text-dark";
}

function lightenText(){
    this.className = "nav-link text-muted";
}

document.getElementById("pandemic_pals").addEventListener("mouseover", function(){displayOverlay("pandemic_pals")});
document.getElementById("pandemic_pals").addEventListener("mouseout", function(){overlayOff("pandemic_pals")});

document.getElementById("womeninIS").addEventListener("mouseover", function(){displayOverlay("womeninIS")});
document.getElementById("womeninIS").addEventListener("mouseout", function(){overlayOff("womeninIS")});

document.getElementById("PLC").addEventListener("mouseover", function(){displayOverlay("PLC")});
document.getElementById("PLC").addEventListener("mouseout", function(){overlayOff("PLC")});

document.getElementById("TMC").addEventListener("mouseover", function(){displayOverlayCS("TMC")});
document.getElementById("TMC").addEventListener("mouseout", function(){overlayOffCS("TMC")});

document.getElementById("graphic_art").addEventListener("mouseover", function(){displayOverlayCS("graphic_art")});
document.getElementById("graphic_art").addEventListener("mouseout", function(){overlayOffCS("graphic_art")});

document.getElementById("graphic_square").addEventListener("mouseover", function(){displayOverlayCS("graphic_square")});
document.getElementById("graphic_square").addEventListener("mouseout", function(){overlayOffCS("graphic_square")});

document.getElementById("nav_home").addEventListener("mouseover", lightenText);
document.getElementById("nav_home").addEventListener("mouseout", darkenText);
document.getElementById("nav_projects").addEventListener("mouseover", lightenText);
document.getElementById("nav_projects").addEventListener("mouseout", darkenText);