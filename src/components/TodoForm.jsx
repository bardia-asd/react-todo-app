import { Plus } from "lucide-react";
import Input from "./ui/Input";
import Button from "./ui/Button";

export default function TodoForm({ value, onChange, onSubmit }) {
    return (
        <form
            onSubmit={onSubmit}
            className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
            <div className="flex gap-2">
                <Input
                    value={value}
                    onChange={onChange}
                    placeholder="Add a new task"
                    variant="default"
                />
                <Button
                    type="submit"
                    variant="primary"
                    disabled={!value.trim()}>
                    <Plus size={20} />
                    <span className="hidden sm:inline-block">Add Task</span>
                </Button>
            </div>
        </form>
    );
}
