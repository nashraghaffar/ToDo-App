var list = document.getElementById('list');

function addTodo() {
    var todo_item = document.getElementById('todo-item');
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
    li.setAttribute("class","lee")


    //DELETE BTN
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("");
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.setAttribute("class","cut-btn")
    delBtn.innerHTML = '<img class="js-cross-btn" src = "criss-cross.png" />'
    delBtn.appendChild(delText)


    //EDIT BTN
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.setAttribute("class","edit-btn")
    editBtn.innerHTML = '<img class="js-edit-btn" src = "pencil.png" />'




    li.appendChild(delBtn);
    li.appendChild(editBtn);

    list.appendChild(li)

    todo_item.value = " ";

    console.log(li)
}

function deleteItem(e) {
    e.parentNode.remove()
}

function deleteAll() {
    list.innerHTML = " ";
    
}

function editItem(e){
var val = e.parentNode.firstChild.nodeValue;
var editValue = prompt("Enter edit value");
e.parentNode.firstChild.nodeValue = editValue ;
}



// function deleteIt(){
//     var a = document.getElementById('xyz')
//     a.parentNode.remove();
    
// }