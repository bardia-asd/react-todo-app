import { useLocalStorage } from "./useLocalStorage";

export function useLocalStorageTodos() {
    const [todos, setTodos] = useLocalStorage("todo", []);

    const addTodo = (text) => {
        if (!text.trim()) return;

        const newTodo = {
            id: Date.now().toString(),
            text,
            completed: false,
        };

        setTodos([...todos, newTodo]);
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

    return { todos, addTodo, toggleTodo, editTodo, deleteTodo };
}
