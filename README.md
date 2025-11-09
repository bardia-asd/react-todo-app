# Todo App

A modern, responsive todo application built with React and Vite. Stay organized and manage your tasks efficiently with an intuitive interface. Features local storage persistence, task filtering, and a clean, minimalist design.

## 🌐 Live Demo

**[View Live Demo](https://react-todo-app-three-beta.vercel.app/)**

## ✨ Features

-   ✅ Add, edit, and delete tasks
-   ✅ Mark tasks as complete/incomplete
-   ✅ Filter tasks by status (All, Active, Completed)
-   ✅ Task statistics (active and completed counts)
-   ✅ Local storage persistence (tasks saved in browser)
-   ✅ Modern, clean UI with Tailwind CSS
-   ✅ Fully responsive design

## 🚀 Technologies Used

-   **React 19** - UI library
-   **Vite** - Build tool and dev server
-   **Tailwind CSS 4** - Utility-first CSS framework
-   **Lucide React** - Icon library
-   **Local Storage** - Data persistence

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd todo-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

-   `npm run dev` - Start the development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview the production build
-   `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components (Button, Input, Dialog, Checkbox)
│   ├── TodoForm.jsx         # Form for adding new tasks
│   ├── TodoItem.jsx         # Individual todo item component
│   └── TodoStatsFilters.jsx # Statistics and filter controls
├── hooks/
│   ├── useLocalStorage.js       # Generic local storage hook
│   └── useLocalStorageTodos.js  # Todo-specific local storage hook
└── App.jsx            # Main application component
```

## 🎯 How to Use

1. **Add a Task**: Type a task in the input field and press Enter or click the add button
2. **Complete a Task**: Click the checkbox next to a task to mark it as complete
3. **Edit a Task**: Click the edit icon to modify a task
4. **Delete a Task**: Click the delete icon to remove a task
5. **Filter Tasks**: Use the filter buttons (All, Active, Completed) to view tasks by status
6. **View Statistics**: See the count of active and completed tasks at the top

## 💾 Data Persistence

All tasks are automatically saved to your browser's local storage, so your tasks will persist even after closing the browser.

## 📝 License

This project is open source and available under the MIT License.
