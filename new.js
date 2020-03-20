var node = null;



function resetColor() {
    var liList= document.getElementsByTagName('li');
    for (var i=0;i<liList.length;i++){
        liList[i].setAttribute('style', 'color: black');
    }
}

function selectFirstChild(){
    resetColor();
    var list = document.getElementById('list');
    var child = list.firstElementChild;
    if (child != null){
        child.setAttribute('style','color: red');
    }
    node = list.firstElementChild;
}

function selectLastChild(){
    resetColor();
    var list = document.getElementById('list');
    var child = list.lastElementChild;
    if (child != null){
        child.setAttribute('style','color: red');
    }
    node = list.lastElementChild;
}

function selectNext() {
    resetColor();
    if (node == null){
        var list = document.getElementById('list');
        node = list.firstElementChild;
        node.setAttribute('style', 'color: red');
        return;
    }
    node = node.nextElementSibling;
    if (node != null) node.setAttribute('style','color: red');

}
function selectPrev() {
     resetColor();
     if (node == null){
         var list = document.getElementById('list');
         node = list.lastElementChild;
         node.setAttribute('style', 'color: red');
         return;
     }
     node = node.previousElementSibling;
    if (node != null) node.setAttribute('style','color: red');
}

function addFirstElement() {
    var list = document.getElementById('list');
    var item = document.createElement('li');

    item.innerHTML = 'NEW ITEM';

    if (list.firstChild != null){
        list.insertBefore(item,list.firstChild);
    }
}


function  addElement(){
    var list = document.getElementById('list');
    var item = document.createElement('li');
    item.innerHTML = 'NEW ITEM';
    list.appendChild(item);
}



//метод как понять что мы клинкули по обьекту
//
// let elem = document.querySelector('.paragraph');
//
// elem.addEventListener('click',function (e) {
//     console.log(e, e.target);
// });
//
//




















































































































