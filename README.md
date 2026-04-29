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

## Philosophy

WebTasky was built as a demonstration of "Back to Basics" web development. By leveraging native browser APIs like <dialog> and FormData, it achieves a modern user experience with zero external runtime dependencies.

---

*Made with care by Benjy*
