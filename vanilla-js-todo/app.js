document.querySelector('form').addEventListener('submit', handleSubmitForm)

function handleSubmitForm(e) {
  e.preventDefault()
  let input = document.querySelector('input')
  if (input.value != '')
    addTodo(input.value)
  input.value = ''
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
