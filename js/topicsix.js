var section = document.querySelector('section');
onload = function () {
    var myH1 = document.createElement('h1');
    myH1.textContent = "My Grocery List";
    var myH2 = document.createElement("h2");
    myH2.textContent = "Add items to your grocery list";
    section.appendChild(myH1);
    section.appendChild(myH2);
}

function addItem() {
    var listing = document.createElement("li");
    var itemText = document.getElementById("itemBox").value;
    var item = document.createTextNode(itemText);
    listing.appendChild(item);
    var list = document.getElementById("list");
    list.insertBefore(listing, list.nextElementSibling);
}

function removeItem() {
    var list = document.getElementById("list");
    list.removeChild(list.childNodes[0]);
}