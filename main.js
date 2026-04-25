document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.getElementById('add-task')
  const removeTaskButton = document.getElementById('remove-task')
  const taskBox = document.getElementById('task-box')

  addTaskButton.addEventListener('click', () => {
    const main = prompt('Enter title:')
    const description = prompt('Enter description:')
    const time = prompt('Enter the time and date (e.g., 12:24 / 01.01.2026):')

    if (main && description && time) {
      const taskCard = document.createElement('li')
      taskCard.className = 'task-card'
      taskCard.innerHTML = `
                <h3>Main: ${main}</h3>
                <p>Description: ${description}</p>
                <p>Time and Date: <time class="due-date">${time}</time></p>
            `
      taskBox.appendChild(taskCard)
    }
  })

  removeTaskButton.addEventListener('click', () => {
    const taskCards = document.querySelectorAll('.task-card')
    if (taskCards.length > 0) {
      const lastTask = taskCards[taskCards.length - 1]
      taskBox.removeChild(lastTask)
    } else {
      alert('No tasks to remove!')
    }
  })
})

const btnTrash = document.querySelector('.btn-trash')
const taskCards = document.querySelector('.task-card')

btnTrash.addEventListener('mouseenter', () => {
  taskCards.classList.add('background-red')
  console.log('Hovering trash button', btnTrash, taskCards)
})

btnTrash.addEventListener('mouseleave', () => {
  taskCards.classList.remove('background-red')
  console.log('Not hovering trash button', btnTrash, taskCards)
})
