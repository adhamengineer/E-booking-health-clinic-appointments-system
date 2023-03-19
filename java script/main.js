function filtering(selection) {
    var filterItems = document.getElementsByClassName('filter-item');
    items = []
    for (var i = 0; i < filterItems.length; i++) {
        items[i] = filterItems[i];
    }
    console.log(items);
    for (var i = 0; i < filterItems.length; i++) {
        if (filterItems[i].className.includes(selection)){
            filterItems[i].setAttribute('class', filterItems[i].className + ' d-inline-block');
        }
        else
        {
            filterItems[i].setAttribute('class', filterItems[i].className + ' d-none');
        }
    }
}