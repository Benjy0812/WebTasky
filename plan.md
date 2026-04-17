# 🧠 Vanilla JS To-Do App — Step-by-Step Plan (No Code)

## 🎯 Goal

Build a simple to-do app using only HTML, CSS, and JavaScript where you can:

- Add tasks
- See tasks on the screen
- Mark tasks as done
- Delete tasks
- (Optional) Save tasks in the browser

---

# 🧱 STEP 1 — Plan your structure (think first)

Before coding, decide:

### What your app needs:

- An input box (for typing tasks)
- A button (to add task)
- A list area (to show tasks)

### Mental model:

User types → clicks button → task gets added → list updates

---

# 🏗️ STEP 2 — Create your basic layout (HTML idea)

You should have:

- A text input field
- An “Add” button
- A container (like a list) where tasks will appear

Think:

> “Where does user type?”  
> “Where do tasks show up?”

---

# 🎨 STEP 3 — Basic styling (CSS idea)

Keep it simple:

- Center the app
- Make input and button look clean
- Add spacing between tasks
- Make “done tasks” look different (later)

Focus on:

> clean, readable UI — not perfection

---

# 🧠 STEP 4 — Understand your data (VERY IMPORTANT)

You need a place in JavaScript to store tasks.

Think:

- A list (array) of tasks
- Each task has:
  - text (what user wrote)
  - done status (true/false)

Example idea (no code thinking):

> “My app remembers tasks in memory”

---

# ⌨️ STEP 5 — Capture user input

When user types and clicks “Add”:

You need to:

- Read what is written in the input box
- Store it temporarily

Think:

> input field → gives you text → you save it

---

# ➕ STEP 6 — Add task to your list

When user submits:

- Take input text
- Create a new task object
- Add it to your task list (array)

Then:

> Clear the input field so user can type again

---

# 🖥️ STEP 7 — Render tasks to the screen

Now you show tasks visually:

For each task in your list:

- Create a visual element
- Show the text
- Add buttons (done / delete)

Important idea:

> Your UI is a reflection of your data list

---

# 🔄 STEP 8 — Update UI after every change

Every time something happens:

- add task
- delete task
- mark done

You must:

- Clear the display
- Rebuild it from the updated list

Think:

> “UI always matches the list”

---

# ✅ STEP 9 — Mark task as done

When user clicks a task or checkbox:

- Find that task in your list
- Change its “done” status

Then:

- Re-render the list
- Visually show it as completed

---

# 🗑️ STEP 10 — Delete tasks

When user clicks delete:

- Remove that task from your list
- Update the UI again

Think:

> “Remove from data → update screen”

---

# 💾 STEP 11 (Optional) — Save data in browser

So tasks don’t disappear when page reloads:

You:

- Save your task list in browser storage after every change
- When page loads:
  - Load saved tasks back into your list
  - Render them immediately

---

# 🔁 FINAL FLOW (IMPORTANT)

Your app loop is:

1. User types task
2. Clicks add
3. Task goes into list
4. UI updates
5. User interacts (done/delete)
6. List changes
7. UI updates again

---

# 🧠 WHAT YOU’RE LEARNING HERE

If you finish this, you understand:

- DOM manipulation
- State (data → UI)
- Event handling
- Basic app architecture

This is the foundation of React/Svelte later.

---

# 🚀 SUCCESS CRITERIA

Your app is done when:

- You can add unlimited tasks
- You can delete tasks
- You can mark tasks as done
- UI always matches your data
