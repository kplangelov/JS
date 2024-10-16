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
    for (let i = 0; i < toDoList.length; i++) {
        jsToDoListShow.innerHTML += `<div id="to-do-${i}">${toDoList[i]} 
                                    <button onclick="deleteToDo(${i})">Delete</button>
                                    </div>`;
    }
}

function deleteToDo(n)
{
    toDoList.splice(n, 1);
    console.log(toDoList);
    showToDoList();
}

function addToDo() {
    if (jsInputToDoName.value.length > 2) {
        toDoList.push(jsInputToDoName.value);
        jsInputToDoName.value = '';
        jsToDoAddResult.textContent = '';
    }
    else {
        jsToDoAddResult.textContent = 'Error: minimum 2 characters in input.';
    }
    console.log(toDoList);
    showToDoList();
}