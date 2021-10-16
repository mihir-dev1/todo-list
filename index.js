var btnId = document.getElementById('btn-id');

var list = document.getElementById('todo-list');

var getText = document.getElementById('textItem');

var text = '';
var itemID ='';

getText.addEventListener('input', function (e) {
    itemID = list.getElementsByTagName('li').length;
    text = document.createTextNode(itemID + '.' +getText.value);
})

getText.addEventListener('keypress',function(e) {
    if (e.key === 'Enter') {
        addItemList();
        // console.log(itemID.getElementsByTagName('li').length)
    }
})


function addItemList() {
    // itemID = list.childElementCount;
    if (text !== undefined && text !== null && text !== '') {
        var newElement = document.createElement('li');
        // text = document.createTextNode(itemID + '.' +text);
        newElement.appendChild(text);
        newElement.id = itemID;

        // list.appendChild(newElement);
        var firstId = list.firstChild;
        // console.log(firstId)
        list.insertBefore(newElement, firstId);

        text = '';
        getText.value = '';
        // console.log()
    } else {
        alert('Please Enter Text');
    }
}

btnId.addEventListener('click', addItemList)