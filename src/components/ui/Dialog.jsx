import { X } from "lucide-react";
import Button from "./Button";

export default function Dialog({
    isOpen,
    title,
    description,
    onClose,
    actions = [],
    className = "",
}) {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center px-4 bg-gray-900/20 z-40 transition-opacity duration-200 ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}>
            <div
                className={`w-full max-w-xl p-6 rounded-xl bg-white border border-gray-200 transform transition-all duration-200 ${
                    isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}>
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <button
                        className="text-gray-500 cursor-pointer"
                        onClick={onClose}>
                        <X size={18} />
                    </button>
                </div>
                <p className="text-gray-500 text-sm">{description}</p>
                {actions.length > 0 && (
                    <div className="flex justify-end gap-2 mt-3">
                        {actions.map((action, index) => (
                            <Button
                                key={index}
                                variant={action.variant || "primary"}
                                onClick={action.onClick}>
                                {action.label}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
