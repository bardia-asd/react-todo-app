import { useState } from "react";
import TodoForm from "./components/TodoForm";

function App() {
    const [newTaskText, setNewTaskText] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
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
                    onSubmit={addTodo}
                />
            </main>
        </div>
    );
}

export default App;
