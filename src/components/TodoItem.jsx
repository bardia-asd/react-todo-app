import { useEffect, useRef, useState } from "react";
import { Pen, Trash2, Check, X } from "lucide-react";

export default function TodoItem({
    id,
    text,
    completed,
    onToggle,
    onEdit,
    onDelete,
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing && inputRef.current) inputRef.current.focus();
    }, [isEditing]);

    const handleEdit = () => {
        if (editText.trim()) {
            onEdit(id, editText);
            setIsEditing(false);
        }
    };

    const handleDelete = () => {
        onDelete(id);
        setShowDeleteDialog(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleEdit();
    };

    return (
        <>
            <div className="group flex items-center justify-between gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                <div className="flex-1">
                    {isEditing ? (
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={handleKeyDown}
                            ref={inputRef}
                            className="w-full py-1 px-2 rounded-sm border border-blue-500 focus:outline-0 focus:ring-2 focus:ring-blue-600 transition-all duration-150"
                        />
                    ) : (
                        <>
                            <input
                                type="checkbox"
                                id={id}
                                checked={completed}
                                onChange={() => onToggle(id)}
                                className="sr-only"
                            />
                            <label
                                htmlFor={id}
                                className="flex items-center gap-2 cursor-pointer">
                                <div
                                    className={`flex items-center justify-center w-4 h-4 border ${
                                        completed
                                            ? "bg-blue-600 border-blue-600"
                                            : "bg-gray-100 border-gray-300"
                                    } rounded-sm transition-all duration-150 shrink-0`}>
                                    {completed && (
                                        <Check
                                            size={14}
                                            className="text-white"
                                        />
                                    )}
                                </div>
                                <span
                                    className={`flex-1 ${
                                        completed
                                            ? "text-gray-400 line-through"
                                            : "text-gray-900"
                                    } transition-all duration-150 select-none`}>
                                    {text}
                                </span>
                            </label>
                        </>
                    )}
                </div>
                <div className="flex gap-2 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    {isEditing ? (
                        <>
                            <button
                                className="w-8 h-8 flex items-center justify-center rounded-sm text-green-600 hover:bg-green-50 transition-colors duration-100"
                                onClick={handleEdit}>
                                <Check size={18} />
                            </button>
                            <button
                                className="w-8 h-8 flex items-center justify-center rounded-sm text-gray-600 hover:bg-gray-100 transition-colors duration-100"
                                onClick={() => setIsEditing(false)}>
                                <X size={18} />
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="w-8 h-8 flex items-center justify-center rounded-sm text-blue-600 hover:bg-blue-50 transition-colors duration-100"
                                onClick={() => setIsEditing(true)}>
                                <Pen size={18} />
                            </button>
                            <button
                                className="w-8 h-8 flex items-center justify-center rounded-sm text-red-600 hover:bg-red-50 transition-colors duration-100"
                                onClick={() => setShowDeleteDialog(true)}>
                                <Trash2 size={18} />
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div
                className={`fixed inset-0 ${
                    showDeleteDialog
                        ? "flex items-center justify-center"
                        : "hidden"
                } px-4 bg-gray-900/20 z-40`}>
                <div className="w-full max-w-xl p-6 rounded-xl bg-white border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold">Delete Task</h3>
                        <button
                            className="text-gray-500 cursor-pointer"
                            onClick={() => setShowDeleteDialog(false)}>
                            <X size={18} />
                        </button>
                    </div>
                    <p className="text-gray-500 text-sm">
                        Are you sure you want to delete this task? This action
                        cannot be undone.
                    </p>
                    <div className="flex justify-end gap-2 mt-3">
                        <button
                            className="border border-gray-300 hover:bg-gray-50 px-4 py-1.5 rounded-lg transition-colors duration-150"
                            onClick={() => setShowDeleteDialog(false)}>
                            Cancel
                        </button>
                        <button
                            className="px-4 py-1.5 rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-150"
                            onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
