const tasks = [
  {task: '1'},
  {task: '2'},
  {task: '3'}

]

function addNewTask() {
  const taskInput = document.getElementById('task-input');

  const ul = document.querySelector('.todo-list-ul');

  const li = document.createElement('li');
  li.classList.add('list-group-item')
  li.onclick = () => {
    li.classList.add('active');
  }

  const button = document.createElement('button');
  button.classList.add('btn', 'btn-success');
  button.innerText = 'Delete';
  button.onclick = () => {
    li.remove()
  }

  li.append(button, taskInput.value)
  ul.append(li)
}

const btn = document.querySelector('.btn-input');
btn.addEventListener('click', addNewTask);

function getToDoList(alltask) {
  const ul = document.querySelector('.todo-list-ul');

  const liElements = alltask.map((element) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item')
    li.onclick = () => {
      li.classList.add('active');
    }

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-success');
    button.innerText = 'Delete';
    button.onclick = () => {
      li.remove()
    }

    li.append(button, element.task)

    return li
  })
  return ul.append(...liElements);
}

getToDoList(tasks);
