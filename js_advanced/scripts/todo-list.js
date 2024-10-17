
const jsInputToDoName = document.querySelector('#js-input-to-do-name');
const jsBtnToDoAdd = document.querySelector('#js-btn-add-to-do');
const jsToDoAddResult = document.querySelector('#js-to-do-add-result');
const jsToDoListShow = document.querySelector('#js-to-do-list-show');


const toDoList = [];

jsInputToDoName.addEventListener('keydown', () => {

    if (event.key === 'Enter') {
        addToDo();
    }

});

jsBtnToDoAdd.addEventListener('click', () => {
    addToDo();
});

function showToDoList() {

    jsToDoListShow.innerHTML = '';  

    toDoList.forEach(function (ToDoObject, index) {

        const { name, dueDate } = ToDoObject;

        jsToDoListShow.innerHTML += `<div>${name}</div>
                                    <div>${dueDate}</div>
                                    <button class="bg-danger text-white" onclick="deleteToDo(${index})">Delete</button>
                                    `;

    });
}


function deleteToDo(n) {
    toDoList.splice(n, 1);
    console.log(toDoList);
    showToDoList();
}

function addToDo() {

    const inputToDoDueDate = document.querySelector('#js-input-to-do-due-date');

    const name = jsInputToDoName.value;
    const dueDate = inputToDoDueDate.value;

    if (jsInputToDoName.value.length > 2) {
        toDoList.push({
            name,   // this is simillar to name: name
            dueDate
        }); // this is simillar to dueDate: dueDate);

        jsInputToDoName.value = '';
        jsToDoAddResult.textContent = '';
    }
    else {
        jsToDoAddResult.textContent = 'Error: minimum 2 characters in input.';
    }

    showToDoList();
}