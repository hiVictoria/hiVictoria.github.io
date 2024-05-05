

function darkenText(){
    this.className = "nav-link text-dark";
}

function lightenText(){
    this.className = "nav-link text-muted";
}
document.getElementById("costar").addEventListener("mouseover", function(){displayOverlayCS("costar")});
document.getElementById("costar").addEventListener("mouseout", function(){overlayOffCS("costar")});

document.getElementById("pandemic_pals").addEventListener("mouseover", function(){displayOverlay("pandemic_pals")});
document.getElementById("pandemic_pals").addEventListener("mouseout", function(){overlayOff("pandemic_pals")});

document.getElementById("womeninIS").addEventListener("mouseover", function(){displayOverlay("womeninIS")});
document.getElementById("womeninIS").addEventListener("mouseout", function(){overlayOff("womeninIS")});

document.getElementById("PLC").addEventListener("mouseover", function(){displayOverlay("PLC")});
document.getElementById("PLC").addEventListener("mouseout", function(){overlayOff("PLC")});

document.getElementById("TMC").addEventListener("mouseover", function(){displayOverlayCS("TMC")});
document.getElementById("TMC").addEventListener("mouseout", function(){overlayOffCS("TMC")});

document.getElementById("graphic_square").addEventListener("mouseover", function(){displayOverlayCS("graphic_square")});
document.getElementById("graphic_square").addEventListener("mouseout", function(){overlayOffCS("graphic_square")});

document.getElementById("nav_home").addEventListener("mouseover", lightenText);
document.getElementById("nav_home").addEventListener("mouseout", darkenText);
document.getElementById("nav_projects").addEventListener("mouseover", lightenText);
document.getElementById("nav_projects").addEventListener("mouseout", darkenText);