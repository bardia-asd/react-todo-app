import { useEffect, useRef, useState } from "react";
import { Pen, Trash2, Check, X } from "lucide-react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Checkbox from "./ui/Checkbox";
import Dialog from "./ui/Dialog";

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
                        <Input
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={handleKeyDown}
                            ref={inputRef}
                            variant="edit"
                        />
                    ) : (
                        <Checkbox
                            id={id}
                            checked={completed}
                            onChange={() => onToggle(id)}
                            label={text}
                        />
                    )}
                </div>
                <div className="flex gap-2 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    {isEditing ? (
                        <>
                            <Button variant="success" onClick={handleEdit}>
                                <Check size={18} />
                            </Button>

                            <Button
                                variant="icon"
                                onClick={() => setIsEditing(false)}>
                                <X size={18} />
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                variant="edit"
                                onClick={() => setIsEditing(true)}>
                                <Pen size={18} />
                            </Button>
                            <Button
                                variant="trash"
                                onClick={() => setShowDeleteDialog(true)}>
                                <Trash2 size={18} />
                            </Button>
                        </>
                    )}
                </div>
            </div>
            <Dialog
                isOpen={showDeleteDialog}
                title="Delete Task"
                description="Are you sure you want to delete this task? This action cannot be undone."
                onClose={() => setShowDeleteDialog(false)}
                actions={[
                    {
                        label: "Cancel",
                        onClick: () => setShowDeleteDialog(false),
                        variant: "secondary",
                    },
                    {
                        label: "Delete",
                        onClick: handleDelete,
                        variant: "danger",
                    },
                ]}
            />
        </>
    );
}
