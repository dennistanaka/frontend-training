document.querySelector('form').addEventListener('submit', handleSubmitForm)
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck)

function handleSubmitForm(e) {
  e.preventDefault()
  let input = document.querySelector('input')
  if (input.value != '')
    addTodo(input.value)
  input.value = ''
}

function handleClickDeleteOrCheck(e) {
  if (e.target.name == 'todos__select') {
    checkTodo(e)
  }

  if (e.target.name == 'todos__delete') {
    deleteTodo(e)
  }
}

function addTodo(todo) {
  let ul = document.querySelector('ul')
  let li = document.createElement('li')
  li.innerHTML = `
    <span class="todos__item">${todo}</span>
    <button name="todos__select"><i class="fas fa-check-square"></i></button>
    <button name="todos__delete"><i class="fas fa-trash"></i></button>
  `
  li.classList.add('todos__list-item')
  ul.appendChild(li)
}

function checkTodo(e) {
  let item = e.target.parentNode
  if (item.style.textDecoration == 'line-through') {
    item.style.textDecoration = 'none'
  } else {
    item.style.textDecoration = 'line-through'
  }
}

function deleteTodo(e) {
  let item = e.target.parentNode

  item.addEventListener('transitionend', function () {
    item.remove()
  })

  item.classList.add('todos__list-item--fade')
}
