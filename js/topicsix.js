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

    // Get a reference to the element, before we want to insert the element
    var item = document.getElementById("itemBox").nodeValue;
    // Get a reference to the parent element
    var list = item.list;

    // Insert the new element into the DOM before sp2
    list.insertBefore(item, item.nextSibling);
}

function removeItem() {

}