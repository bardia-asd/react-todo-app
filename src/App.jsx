import { useState } from "react";
import { useLocalStorageTodos } from "./hooks/useLocalStorageTodos";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
    const [newTaskText, setNewTaskText] = useState("");
    const { todos, addTodo, toggleTodo, editTodo, deleteTodo } =
        useLocalStorageTodos(newTaskText);

    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodo(newTaskText);
        setNewTaskText("");
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
                    onSubmit={handleAddTodo}
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
