const tasks = [
  {task: 'Dinner'},
  {task: 'Gym'},
  {task: 'Walking'},
  {task: 'Drive'},
  {task: 'Singing'}

]

function addNewTask() {
  const taskInput = document.getElementById('task-input');
  const ul = document.querySelector('.uncompleted-todo');

  const li = document.createElement('li');
  li.classList.add('list-group-item')

  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  li.append(checkbox, taskInput.value)
  ul.append(li)
}

const btn = document.querySelector('.btn-input');
btn.addEventListener('click', addNewTask);

function getToDoList(alltask) {
  const ul = document.querySelector('.uncompleted-todo');


  const liElements = alltask.map((element) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item')

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    li.append(checkbox, element.task)

    return li
  })

  return ul.append(...liElements);
}

function removeItem(){
  const list = document.getElementsByTagName('input')
  for (let i = 0; i < list.length; ++i) {
    let task = list[i]
    if (task.checked) {
      task.parentElement.hidden = true
    }
  }
}

function completeTask() {
  const list = document.getElementsByTagName('input')
  for (let i = 0; i < list.length; ++i) {
    let task = list[i]
    if (task.checked) {
      document.getElementById("completed").appendChild(task.parentNode);
      task.remove();
    }
  }
}


getToDoList(tasks);
