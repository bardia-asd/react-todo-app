import { Plus } from "lucide-react";

export default function TodoForm({ value, onChange, onSubmit }) {
    return (
        <form
            onSubmit={onSubmit}
            className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
            <div className="flex flex-wrap gap-2">
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Add a new task"
                    className="flex-1 bg-gray-100 px-3 py-1 rounded-lg border border-gray-200 focus:outline-0 focus:ring-4 focus:ring-gray-300 transition-all duration-200"
                />
                <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-auto disabled:hover:bg-blue-600 disabled:text-gray-200"
                    disabled={!value.trim()}>
                    <Plus size={20} />
                    <span className="hidden sm:inline-block">Add Task</span>
                </button>
            </div>
        </form>
    );
}
