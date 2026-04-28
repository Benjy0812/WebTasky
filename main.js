document.addEventListener('DOMContentLoaded', () => {
  let tasks = []
  const addTaskButton = document.getElementById('addTaskBtn')
  const removeTaskButton = document.getElementById('removeTaskBtn')

  const taskModal = document.getElementById('taskModal')
  const taskForm = document.getElementById('taskForm')
  const cancelTaskBtn = document.getElementById('cancelTaskBtn')

  addTaskButton.addEventListener('click', () => {
    taskModal.showModal()
  })

  cancelTaskBtn.addEventListener('click', () => {
    taskModal.close()
  })

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(taskForm)
    const title = formData.get('title')
    const description = formData.get('description')
    const timeDate = formData.get('datetime')

    if (title) {
      const taskCard = document.createElement('li')
      taskCard.classList.add('task-item')

      const taskTitle = document.createElement('h3')
      taskTitle.textContent = title
      taskCard.appendChild(taskTitle)

      if (description) {
        const taskDesc = document.createElement('p')
        taskDesc.textContent = description
        taskCard.appendChild(taskDesc)
      }

      if (timeDate) {
        const taskTime = document.createElement('p')
        taskTime.innerHTML = `Time and Date: <time class="due-date" datetime="${timeDate}">${timeDate.replace('T', ' / ')}</time>`
        taskCard.appendChild(taskTime)
      }

      const deleteBtn = document.createElement('button')
      deleteBtn.classList.add('delete-button')
      deleteBtn.textContent = 'Remove'
      deleteBtn.addEventListener('click', () => {
        taskCard.remove()
      })
      taskCard.appendChild(deleteBtn)

      const tasksContainer = document.getElementById('tasksContainer')
      tasksContainer.appendChild(taskCard)

      taskForm.reset()
    }
  })

  removeTaskButton.addEventListener('click', () => {
    const taskItems = document.querySelectorAll('.task-item')
    if (taskItems.length > 0) {
      const lastTask = taskItems[taskItems.length - 1]
      tasksContainer.removeChild(lastTask)
    } else {
      alert('No tasks to remove!')
    }
  })
})
