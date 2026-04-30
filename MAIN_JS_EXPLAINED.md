# WebTasky Logic Explained (`main.js`)

This document provides a line-by-line breakdown of the application logic found in `main.js`.

---

## The Wrapper

```javascript
document.addEventListener('DOMContentLoaded', () => {
```

- **Line 1:** This waits for the HTML document to be fully loaded and parsed before running any JavaScript. This ensures that when we try to find buttons or inputs, they actually exist in the browser.

---

## State and Selections

```javascript
let tasks = []
```

- **Line 2:** An empty array intended to store task data (Note: currently, the app builds the UI directly, but this variable is ready for future features like saving).

```javascript
const addTaskButton = document.getElementById('addTaskBtn')
const removeTaskButton = document.getElementById('removeTaskBtn')
const tasksContainer = document.getElementById('tasksContainer')

const taskModal = document.getElementById('taskModal')
const taskForm = document.getElementById('taskForm')
const cancelTaskBtn = document.getElementById('cancelTaskBtn')
```

- **Lines 3-9:** Here, we "grab" the HTML elements using their `id`. We store them in constants so we can easily interact with them later (adding clicks, reading text, etc.).

---

## Modal Controls

```javascript
addTaskButton.addEventListener('click', () => {
  taskModal.showModal()
})
```

- **Lines 11-13:** When the "Add New Task" button is clicked, we call `.showModal()` on our `<dialog>` element. This is a native browser API that pops up the window and dims the background.

```javascript
cancelTaskBtn.addEventListener('click', () => {
  taskModal.close()
})
```

- **Lines 15-17:** When the "Cancel" button inside the modal is clicked, we close the dialog.

---

## Deleting Individual Tasks (Event Delegation)

```javascript
tasksContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-button')) {
    const taskCard = e.target.closest('.task-item')
    if (taskCard) {
      taskCard.remove()
    }
  }
})
```

- **Lines 19-26:** Instead of adding a listener to every single task (which is slow), we listen to the entire container.
- **`e.target`**: This checks exactly what was clicked.
- **`closest('.task-item')`**: If the delete button was clicked, this finds the parent card that contains it.
- **`.remove()`**: This deletes that specific card from the screen.

---

## Creating and Adding Tasks

```javascript
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
```

- **Lines 28-29:** When the form is submitted, `preventDefault()` stops the page from refreshing (the default browser behavior for forms).

```javascript
const formData = new FormData(taskForm)
const title = formData.get('title')
const description = formData.get('description')
const timeDate = formData.get('datetime')
```

- **Lines 30-33:** `FormData` is a clean way to grab all the values typed into the inputs without selecting every single input field manually.

```javascript
    if (title) {
      const taskCard = document.createElement('li')
      taskCard.classList.add('task-item')
```

- **Lines 35-37:** If the user provided a title, we create a new `<li>` element and give it the CSS class `task-item`.

```javascript
const taskTitle = document.createElement('h3')
taskTitle.textContent = title
taskCard.appendChild(taskTitle)
```

- **Lines 39-41:** We create an `<h3>`, put the user's title inside it, and "stick" it (append) into our card.

```javascript
if (description) {
  const taskDesc = document.createElement('p')
  taskDesc.textContent = description
  taskCard.appendChild(taskDesc)
}
```

- **Lines 43-47:** If the user wrote a description, we create a `<p>` and add it to the card.

```javascript
if (timeDate) {
  const taskTime = document.createElement('p')
  taskTime.innerHTML = `Time and Date: <time class="due-date" datetime="${timeDate}">${timeDate.replace('T', ' / ')}</time>`
  taskCard.appendChild(taskTime)
}
```

- **Lines 49-53:** If a date was picked, we format it (replacing the 'T' separator from the input with a slash) and add it to the card using a `<time>` tag for better accessibility.

```javascript
const deleteBtn = document.createElement('button')
deleteBtn.classList.add('delete-button')
deleteBtn.textContent = 'Remove'
taskCard.appendChild(deleteBtn)
```

- **Lines 55-58:** We create the "Remove" button for this specific task.

```javascript
      tasksContainer.appendChild(taskCard)
      taskForm.reset()
      taskModal.close()
    }
```

- **Lines 60-63:** Finally, we add the finished card to our list on the screen, clear the form, and close the modal.

---

## Bulk Removal

```javascript
removeTaskButton.addEventListener('click', () => {
  const taskItems = document.querySelectorAll('.task-item')
  if (taskItems.length > 0) {
    const lastTask = taskItems[taskItems.length - 1]
    tasksContainer.removeChild(lastTask)
  } else {
    alert('No tasks to remove!')
  }
})
```

- **Lines 66-74:** This handles the "Remove Last Task" button.
- It finds all current tasks, grabs the very last one in the list, and deletes it. If the list is empty, it shows an alert.
