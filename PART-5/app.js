let value;
let value2;
const todoList = document.querySelector(".list-group")
const todo = document.querySelector("li:nth-child(2)")
const cardrow = document.querySelector(".card.row:nth-child(1)")
value = cardrow



//Child Nodes


value = todoList.childNodes;
value = todoList.childNodes[0];

//Child - Element

value = todoList.children;
value = todoList.children[todoList.children.length-1];
value = todoList.children[2].textContent = ("Değiştirildi")


value = cardrow;
value = cardrow.children
value = cardrow.children[2].children[1].textContent = ("Burası da değişti")


value = todoList
value = todoList.children[0]
value = todoList.firstElementChild
value = todoList.children.length
value = todoList.childElementCount



value = cardrow
value = cardrow.parentElement
value = cardrow.parentElement.parentElement

//Element Kardeşleri

value = todo;
value = todo.previousElementSibling
value = todo.nextElementSibling


console.log(value)


















