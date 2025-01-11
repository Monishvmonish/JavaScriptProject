var popup = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopup = document.getElementById("add-popup-button");
var close = document.getElementById("cancel");
var addbook = document.getElementById("add");
var container = document.querySelector(".container");
var booktitle = document.getElementById("book-title");
var bookauthor = document.getElementById("book-author");
var description = document.getElementById("short-description");


addpopup.addEventListener("click", function () {
    popup.style.display = "block";
    popupbox.style.display = "block";
});


close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.style.display = "none";
    popupbox.style.display = "none";
});


addbook.addEventListener("click", function (event) {
    event.preventDefault();
    if (booktitle.value.trim() && bookauthor.value.trim() && description.value.trim()) {
        var divele = document.createElement("div");
        divele.setAttribute("class", "book-container");
        divele.innerHTML = `
            <h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${description.value}</p>
            <button onclick="Delete(event)">Delete</button>
        `;
        container.append(divele); 
        popupbox.style.display = "none";
        booktitle.value = "";
        bookauthor.value = "";
        description.value = "";
    } else {
        alert("Please fill in all fields before adding a book.");
    }
});


function Delete(event) {
    event.target.parentElement.remove();
}
