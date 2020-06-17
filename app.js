const todoFrom = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

// ini adalah kumpulan event listener 
immadiateLoadEventListener();
function immadiateLoadEventListener() {

    //menambahkan todos dari localStorage dan render di browser
    document.addEventListener("DOMContentLoaded", getTodos);

    // Ini adlaah event untuk menambahka todo
    todoFrom.addEventListener("submit", addTodo);

    // Ini adalah event untuk mengahapus 1 todo
    todoList.addEventListener("click", deleteTodo);

    // ini adalag event yang menghapus  semua todo
    clearButton.addEventListener("click", clearTodos);

    //ini adkaag event untuk menfitler todos
    filterInput.addEventListener("keyup", filterTodos);
}

// Reusable codes
function createTodoElement(value) {
    // membuat element <li> </li>
    const li = document.createElement("li")

    //menambahkan class pada element li
    li.className = "todo-item list-group-item d-flex justify-content-between align-items-center mb-1"

    // menambahkan childrren ke dalam element li
    li.appendChild(document.createTextNode(value))

    //membuat delete button
    const a = document.createElement("a");

    // membuat properti untuk a element 
    a.href = "#";
    a.className = "badge badge-danger delete-todo"

    a.innerHTML = "Delete"

    // menyalipkan element a ke dalam child li
    li.appendChild(a)

    // masukkan elemet li yang telah dibuat 
    // ke dalam element todoList

    todoList.appendChild(li)
}

function getItemFromLocalStorage() {
    let todos;

    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}

//ini adalah DOM function 

function getTodos() {
    const todos = getItemFromLocalStorage();

    todos.forEach((todo) => {
        createTodoElement(todo)
    })
}

// menambah todo 
function addTodo(e) {
    e.preventDefault();

    //use if agar input kosong tidak menerima perintah dan me listmnya di todolist
    if (todoInput.value) { // true jalankan perintah

        createTodoElement(todoInput.value);

        //menambahkan ke storage local 
        addTodoLocalStorage(todoInput.value);

        //memgosongkan value setelah selesai menambahkan text di todolist
        todoInput.value = ""


    } else {
        alert("kamu harus masukkan tulisan jika tidak, kamu tidak bisa melistnya")
    }
}

//buatkan functionnya addTodoLocalStorage yang ada di function addTodos

function addTodoLocalStorage(todoInputValue) {
    const todos = getItemFromLocalStorage();

    //push todoINputValue ke dalam input todos
    todos.push(todoInputValue)

    //mengambil data data local storage olah dan perbarui dan data yang di perbarui itu akan di ambil kembali ke local storage agar valuenya dapat terupdate 
    localStorage.setItem("todos", JSON.stringify(todos))
}


//delete todo
function deleteTodo(e) {
    e.preventDefault();

    if (e.target.classList.contains("delete-todo")) {
        // improve if u want to delete todo *warning*
        if (confirm("apakah anda yakin mengapus ini?")) {
            const parent = e.target.parentElement;

            parent.remove();
            deleteTodoLocalStorage(parent)
        }
    }
}

//mengahpus 1 value bersamaan dengan local storage ketika di refresh tidak akan berubah
function deleteTodoLocalStorage(deleteElement) {
    //mengambil data dari localstorage
    const todos = getItemFromLocalStorage();

    // merubah value dan menghapus
    todos.forEach((todo, index) => {
        if (deleteElement.firstChild.textContent === todo) {
            todos.splice(index, 1)
        }
    })

    //kembalikan ke local storage 
    localStorage.setItem("todos", JSON.stringify(todos));
}


//clear all todos function
function clearTodos() {
    todoList.innerHTML = ""

    clearTodosLocalStorage();
}

function clearTodosLocalStorage() {
    localStorage.clear();
}

//filter todolist
function filterTodos(e) {
    //menyimpan value baru ketika mengetik di todolist 
    const filterText = e.target.value;

    //mengambil semua list todo dengan mengambil class todo-item
    const todoItem = document.querySelectorAll(".todo-item")

    //me loping dengan foreach
    todoItem.forEach((item) => {
        console.log(item)

        //membandingkan dengan tulisan di fitler dan hasil todolist

        //menyimpan masong-masing value ke dalam variabel lagi
        const itemText = item.firstChild.textContent.toLowerCase();

        //JALANKAN LOGIKA untuk membuat fitler huruf
        if (itemText.indexOf(filterText) !== -1) {
            //memberikan sebuah atribut
            item.setAttribute("style", "display: block;")
        } else {
            item.setAttribute("style", "display: none !important")
        }
    })
}

//menyimpan todos ke localstorage dan tidak akan menghilang saat melakukan refresh