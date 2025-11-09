import { Check } from "lucide-react";

export default function Checkbox({
    id,
    checked,
    onChange,
    label,
}) {
    return (
        <>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                className="sr-only"
            />
            <label
                htmlFor={id}
                className="flex items-center gap-2 cursor-pointer">
                <div
                    className={`flex items-center justify-center w-4 h-4 border rounded-sm transition-all duration-150 shrink-0 ${
                        checked
                            ? "bg-blue-600 border-blue-600"
                            : "bg-gray-100 border-gray-300"
                    }`}>
                    {checked && <Check size={14} className="text-white" />}
                </div>
                <span
                    className={`flex-1 transition-all duration-150 select-none ${
                        checked ? "text-gray-400 line-through" : "text-gray-900"
                    }`}>
                    {label}
                </span>
            </label>
        </>
    );
}
