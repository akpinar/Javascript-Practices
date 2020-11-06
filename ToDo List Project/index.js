
//Tüm elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){ //Tüm event listenerlar

    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllButton)


}

function clearAllButton(e){ //Arayüzden todoları silme
    if(confirm("Tümünü silmek istediğinize emin misiniz?")){
        // todoList.innerHTML = ""; yavaş bir yöntem
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
}

function filterTodos(e){ //todo araması yapacak
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();

        if(text.indexOf(filterValue) === -1){

            listItem.setAttribute("style","display: none !important");
        }
        else{

            listItem.setAttribute("style","display: block")
        }
    })

}

function deleteTodo(e){ //todoları UI dan silecek
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","ToDo başarıyla silindi");
    }
}

function deleteTodoFromStorage(deletetodo){ //Storagedan todoları silecek
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1); //Arrayden değeri siler.
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));

}

function loadAllTodosToUI(){ //todoları UI a ekleyecek
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    });
}

function addTodo(e){ //todo ekleyecek
    const newTodo = todoInput.value.trim();
    if(newTodo === ""){

        showAlert("danger","Lütfen bir todo girin...");
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);

        showAlert("success","Todo başarılıyla eklendi");
    }

    e.preventDefault();
}

function getTodosFromStorage(){ //Storagedan todoları alacak
    let todos;
    
    if(localStorage.getItem("todos") === null){
        todos =[];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newTodo){ //Storage a todoları ekleyecek
   let todos = getTodosFromStorage();

   todos.push(newTodo);

   localStorage.setItem("todos",JSON.stringify(todos));

}

function showAlert(type,message){ //Uyarı veya başarılı mesajı yayınlayacak
    const alert = document.createElement("div");
    
    alert.className =`alert alert-${type}`;

    alert.textContent = message;

    firstCardBody.appendChild(alert);

    //setTimeout

    setTimeout(() => {
        alert.remove();
    }, 3000);


}

function addTodoToUI(newTodo){ //String değerini list item olarak UI a ekleyecek

    //List Item oluşturma

    const listItem = document.createElement("li");

    //Link oluşturma

    const link = document.createElement("a");
    link.href = "#";
    link.innerHTML =  "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";

    //Text Node ekleme

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //Todo liste list itemı ekleme

    todoList.appendChild(listItem);

    todoInput.value = "";

}