export default function Input({
    value,
    onChange,
    placeholder,
    onKeyDown,
    inputRef,
    variant = "default",
    ...props
}) {
    const variants = {
        default:
            "flex-1 bg-gray-100 px-3 py-1 border-gray-200 focus:ring-4 focus:ring-gray-300",
        edit: "py-1 px-2 rounded-sm border-blue-500 focus:ring-2 focus:ring-blue-600",
    };
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            ref={inputRef}
            className={`w-full rounded-lg border focus:outline-0 transition-all duration-200 ${variants[variant]}`}
            {...props}
        />
    );
}
