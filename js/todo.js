const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

let toDos = [];
const TODOS_KEY = 'todos';

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ''; //value를 비워도 이전 value값이 사라지지 않음. newToDo에 저장됨.
    const newToDoObject = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObject);
    paintToDo(newToDoObject);
    saveToDo();
}

function paintToDo(newToDoObject) {
    const li = document.createElement('li');
    li.id = newToDoObject.id;
    const span = document.createElement('span');
    span.innerText = newToDoObject.text;
    const button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', deleteToDo);

    li.appendChild(span); //li 안에 span넣기
    li.appendChild(button);

    toDoList.appendChild(li);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    console.log(toDos)
    li.remove();
    saveToDo();
}

function saveToDo(){
    localStorage.setItem(
        TODOS_KEY, JSON.stringify(toDos)
    )
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo)
}