export default function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
    className = "",
    ...props
}) {
    const variants = {
        primary:
            "bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 disabled:hover:bg-blue-600",
        secondary:
            "bg-white border border-gray-300 text-gray-900 px-4 py-1.5 hover:bg-gray-50",
        danger: "bg-red-600 text-white px-4 py-1.5 hover:bg-red-700",
        icon: "w-8 h-8 p-0 text-gray-600 hover:bg-gray-100 rounded-sm",
        success: "w-8 h-8 p-0 text-green-600 hover:bg-green-50 rounded-sm",
        edit: "w-8 h-8 p-0 text-blue-600 hover:bg-blue-50 rounded-sm",
        trash: "w-8 h-8 p-0 text-red-600 hover:bg-red-50 rounded-sm",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`flex items-center justify-center gap-2 rounded-lg transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-auto ${variants[variant]} ${className}`}
            disabled={disabled}
            {...props}>
            {children}
        </button>
    );
}
