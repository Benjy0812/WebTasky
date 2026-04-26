document.addEventListener('DOMContentLoaded', () => {
  let tasks = []
  const addTaskButton = document.getElementById('add-task')
  const removeTaskButton = document.getElementById('remove-task')
  const taskBox = document.getElementById('task-box')

  const taskDialog = document.getElementById('add-task-dialog')
  const taskForm = document.getElementById('add-task-form')
  const cancelTaskBtn = document.getElementById('cancel-task-btn')

  addTaskButton.addEventListener('click', () => {
    taskDialog.showModal()
  })

  cancelTaskBtn.addEventListener('click', () => {
    taskDialog.close()
  })

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = document.getElementById('task-title-input').value
    const description = document.getElementById('task-description-input').value
    const datetime = document.getElementById('task-datetime-input').value

    if (title && description && datetime) {
      const taskCard = document.createElement('li')
      const taskId = tasks.length

      taskCard.className = 'task-card'
      taskCard.setAttribute('data-task-id', taskId)
      taskCard.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p>Time and Date: <time class="due-date" datetime="${datetime}">${new Date(datetime).toLocaleString()}</time></p>
        <button class="btn-trash" aria-label="Delete task">
          <img src="/public/assets/icons/trash.svg" alt="Trash">
        </button>
      `
      taskBox.appendChild(taskCard)

      const btnTrash = taskCard.querySelector('.btn-trash')
      btnTrash.addEventListener('click', () => {
        console.log('Trash clicked!')
        taskBox.removeChild(taskCard)
      })

      tasks.push({ title, description, datetime })
      taskForm.reset()
      taskDialog.close()
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
