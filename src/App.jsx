import { useState } from "react";
import { useLocalStorageTodos } from "./hooks/useLocalStorageTodos";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoStatsFilters from "./components/TodoStatsFilters";

function App() {
    const [newTaskText, setNewTaskText] = useState("");
    const [filter, setFilter] = useState("all");
    const { todos, addTodo, toggleTodo, editTodo, deleteTodo } =
        useLocalStorageTodos(newTaskText);

    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodo(newTaskText);
        setNewTaskText("");
    };

    const activeTasks = todos.filter((todo) => !todo.completed).length;
    const completedTasks = todos.filter((todo) => todo.completed).length;

    const filters = ["all", "active", "completed"];

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    return (
        <div className="container max-w-2xl py-8 px-4 mx-auto ">
            <header className="text-center">
                <h1 className="font-semibold text-3xl mb-2">My Tasks</h1>
                <p className="text-slate-500">
                    Stay organized and get things done
                </p>
            </header>

            <main className="mt-10 space-y-6">
                <TodoForm
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    onSubmit={handleAddTodo}
                />

                <TodoStatsFilters
                    activeTasks={activeTasks}
                    completedTasks={completedTasks}
                    filters={filters}
                    currentFilter={filter}
                    onFilterChange={setFilter}
                />

                <div className="space-y-3">
                    {filteredTodos.length === 0 ? (
                        <div className="py-10 bg-white rounded-lg border border-gray-200 text-center">
                            <p className="text-gray-400">
                                No tasks yet. Add one to get started!
                            </p>
                        </div>
                    ) : (
                        filteredTodos.map((todo) => (
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
