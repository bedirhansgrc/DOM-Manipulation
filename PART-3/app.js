//Elemeti ID'ye Göre Seçme


let element;

element =document.getElementById("todo-form")
element =document.getElementById("tasks-title")


//Element Class'a Göre Seçme

element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");


//Element Tag'e Göre Seçme


element = document.getElementsByTagName("li")
element = document.getElementsByTagName("div")


//Query Selector - CSS Selector - Tek Bir Element

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element= document.querySelector(".list-group-item")

//QuerySelectorAll -Tüm Elementleri Seç
element = document.querySelectorAll(".list-group-item"); //node list


element.forEach(function(el){
    console.log(el);
})
