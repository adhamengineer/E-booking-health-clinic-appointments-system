function filtering(selection) {
    var filterItems = document.getElementsByClassName('filter-item');
    items = []
    for (var i = 0; i < filterItems.length; i++) {
        items[i] = filterItems[i];
    }
    console.log(items);
    for (var i = 0; i < filterItems.length; i++) {
        if (filterItems[i].className.includes(selection) == false) {
            filterItems[i].classList.add("d-none");
        }
    }
    for (var i = 0; i < filterItems.length; i++) {
        if (filterItems[i].className.includes(selection)) {
            filterItems[i].classList.remove("d-none");
            filterItems[i].classList.add("d-inline-block");
        }
    }
}

var loader = document.querySelector(".loader")

window.addEventListener("load", function(){
loader.classList.add("loader_hidden");

loader.addEventListener("transitioned", function(){
document.body.removeChild("loader")
})

})