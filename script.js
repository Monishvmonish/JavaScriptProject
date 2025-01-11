

var overlay = document.querySelector(".overlay");
var popup = document.getElementById("popup");

function show() {
    overlay.style.display = "block";
    popup.style.display = "block";
}

function closePopup() { 
    overlay.style.display = "none";
    popup.style.display = "none";
}