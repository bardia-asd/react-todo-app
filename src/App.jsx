import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
    const [todos, setTodos] = useState([]);
    const [newTaskText, setNewTaskText] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Date.now(),
            text: newTaskText,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setNewTaskText("");
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const editTodo = (id, newText) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="container max-w-2xl py-8 px-4 mx-auto ">
            <header className="text-center">
                <h1 className="font-semibold text-3xl mb-2">My Tasks</h1>
                <p className="text-slate-500">
                    Stay organized and get things done
                </p>
            </header>

            <main className="mt-10">
                <TodoForm
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    onSubmit={addTodo}
                />

                <div className="space-y-3 mt-6">
                    {todos.length === 0 ? (
                        <div className="py-10 bg-white rounded-lg border border-gray-200 text-center">
                            <p className="text-gray-400">
                                No tasks yet. Add one to get started!
                            </p>
                        </div>
                    ) : (
                        todos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                id={todo.id}
                                text={todo.text}
                                completed={todo.completed}
                                onToggle={toggleTodo}
                                onEdit={editTodo}
                                onDelete={deleteTodo}
                            />
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
