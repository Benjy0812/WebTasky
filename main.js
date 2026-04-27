document.addEventListener('DOMContentLoaded', () => {
  let tasks = []
  const addTaskButton = document.getElementById('add-task')
  const removeTaskButton = document.getElementById('remove-task')
  const tasksList = document.getElementById('tasks-list')

  const taskDialog = document.getElementById('task-dialog')
  const taskForm = document.getElementById('task-form')
  const cancelTaskBtn = document.getElementById('cancel-task-btn')

  addTaskButton.addEventListener('click', () => {
    taskDialog.showModal()
  })

  cancelTaskBtn.addEventListener('click', () => {
    taskDialog.close()
  })

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(taskForm)
    const title = formData.get('title')
    const description = formData.get('description')
    const timeDate = formData.get('datetime')

    if (title) {
      // Create task card
      const taskCard = document.createElement('li')
      taskCard.classList.add('task-card')

      // Add task title
      const taskTitle = document.createElement('h3')
      taskTitle.textContent = title
      taskCard.appendChild(taskTitle)

      // Add description if provided
      if (description) {
        const taskDesc = document.createElement('p')
        taskDesc.textContent = description
        taskCard.appendChild(taskDesc)
      }

      // Add delete button
      const deleteBtn = document.createElement('button')
      deleteBtn.classList.add('btn-trash')
      const trashIcon = document.createElement('img')
      trashIcon.src = '/public/assets/icons/trash.svg'
      trashIcon.alt = 'Delete Task'
      deleteBtn.appendChild(trashIcon)
      deleteBtn.addEventListener('click', () => {
        taskCard.remove()
      })
      // Append task card to task box
      taskCard.appendChild(deleteBtn)

      // Append task card to task list
      tasksList.appendChild(taskCard)

      // When done reset form
      taskForm.reset()
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
