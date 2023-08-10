// Yeni element oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1]


newLink.id ="clear-todos"
newLink.className ="btn btn-danger"
newLink.href = "https://www.google.com.tr"
newLink.target = "_blank"
newLink.appendChild(document.createTextNode("Google'a Git"));


//text node

// const text = document.createTextNode("naber");
// cardbody.appendChild(text)



cardbody.appendChild(newLink)

console.log(newLink)

















