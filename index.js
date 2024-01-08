const todoList = [
  // {
  //   name: 'Wash the dishes',
  //   dueDate: '2020-09-11'
  // },
  // {
  //   name: 'Do the shopping',
  //   dueDate: '2020-09-02'
  // }
];

renderTodoList();

// extra code for local storage

//  localStorage.setItem('todoList', JSON.stringify(todoList));

//  let data = JSON.parse(localStorage.getItem('todoList')); 
//  console.log(data);

function renderTodoList() {
  let todoListHTML = '';


  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  })

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}



document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });
  console.log(todoList);

  inputElement.value = ''
  renderTodoList();
}