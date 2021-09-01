const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


todoButton.addEventListener('click', myTodo)
todoList.addEventListener('click',deleteCheck)

function myTodo(e) {
    e.preventDefault();
    const myDiv = document.createElement('div');
    myDiv.classList.add('todo')
    const myLi = document.createElement('li');
    myLi.innerHTML = todoInput.value
    myLi.classList.add('todo-item')
    myDiv.appendChild(myLi)
    // check button
    const checkButton = document.createElement('button')
    checkButton.innerHTML = `<i class = "fas fa-check"></i>`
    checkButton.classList.add('complete-btn')
    myDiv.appendChild(checkButton)
    // trash button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = `<i class = "fas fa-trash"></i>`
    trashButton.classList.add('trash-btn')
    myDiv.appendChild(trashButton)
    todoList.appendChild(myDiv)
    // clear inpt
    todoInput.value = '';
    // delete
 
}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList.contains('trash-btn')) {
        const todo = item.parentElement;
        todo.classList.add('fall')
      
    }
   
    if (item.classList.contains('complete-btn')) {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
     
    }

}
