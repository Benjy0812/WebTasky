# WebTasky

[Live Demo](https://benjy0812.github.io/WebTasky)

WebTasky is a lightweight, high-performance task management application built with Vanilla JavaScript and CSS. Designed for simplicity and speed, it provides a clean interface to organize your daily productivity without the overhead of heavy frameworks.

---

## Features

- **Intuitive UI:** Minimalist design focused on task clarity.
- **Dynamic Management:** Add and remove tasks instantly with smooth modal interactions.
- **Rich Task Details:** Capture titles, descriptions, and due dates/times.
- **Responsive Design:** Optimized for both desktop and mobile workflows.
- **Framework-Free:** Pure DOM manipulation for maximum performance.

## Tech Stack

- **Core:** HTML5, CSS3, JavaScript (ES6+)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Runtime:** [Bun](https://bun.sh/)
- **Deployment:** GitHub Pages

---

## Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/benjy0812/WebTasky.git
   cd WebTasky
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

### Development

Run the local development server:
```bash
bun dev
```
To automatically open in your browser:
```bash
bun dev:open
```

### Production Build

Create an optimized build for deployment:
```bash
bun run build
```

---

## Project Structure

```text
├── public/          # Static assets (icons, images, fonts)
├── index.html       # Entry point
├── main.js          # Application logic
├── main.css         # Styling
├── package.json     # Configuration and scripts
└── vite.config.js   # Vite configuration
```

## Philosophy & Learning

WebTasky was built as a hands-on journey into the core of web development. By intentionally avoiding frameworks, this project served as a deep dive into how the web actually works. 

### What I Learned:
- **DOM Mastery:** Learning how to dynamically create, manipulate, and remove elements without a virtual DOM.
- **Native Browser APIs:** Leveraging powerful built-in features like the `<dialog>` element for modals and the `FormData` API for clean input handling.
- **Event-Driven Architecture:** Implementing efficient event delegation by listening for clicks on parent containers rather than individual elements.
- **State vs. UI:** Understanding the fundamental loop of how data changes should reflect in the user interface.

This project proves that you don't need 100kb of libraries to build a responsive, functional, and modern application. It's about mastering the basics to build a stronger foundation for the future.

---

*Made with care by Benjy*

---

### Deep Dive

Check out the [Logic Explained](./MAIN_JS_EXPLAINED.md) guide for a line-by-line breakdown of how the application works!
