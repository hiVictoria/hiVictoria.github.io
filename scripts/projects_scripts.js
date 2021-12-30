
function displayOverlay(project_name){
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#" + project_name + ":after {content:no-open-quote;position: absolute;z-index: 3;height: 100%;width: 100%;background: #000;opacity: 0.7;}";

    var title = project_name + "_title";
    document.getElementById(title).style.display ="block";
}

function overlayOff(project_name){
    var styleEl = document.head.appendChild(document.createElement("style"));
    styleEl.innerHTML = "#" + project_name + ":after {opacity: 0;}";

    var title = project_name + "_title";
    document.getElementById(title).style.display ="none";
}

document.getElementById("pandemic_pals").addEventListener("mouseover", function(){displayOverlay("pandemic_pals")});
document.getElementById("pandemic_pals").addEventListener("mouseout", function(){overlayOff("pandemic_pals")});

document.getElementById("womeninIS").addEventListener("mouseover", function(){displayOverlay("womeninIS")});
document.getElementById("womeninIS").addEventListener("mouseout", function(){overlayOff("womeninIS")});

document.getElementById("PLC").addEventListener("mouseover", function(){displayOverlay("PLC")});
document.getElementById("PLC").addEventListener("mouseout", function(){overlayOff("PLC")});

document.getElementById("TMC").addEventListener("mouseover", function(){displayOverlay("TMC")});
document.getElementById("TMC").addEventListener("mouseout", function(){overlayOff("TMC")});

document.getElementById("graphic_art").addEventListener("mouseover", function(){displayOverlay("graphic_art")});
document.getElementById("graphic_art").addEventListener("mouseout", function(){overlayOff("graphic_art")});

