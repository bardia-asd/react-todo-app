import Button from "./ui/Button";
import { Circle, CircleCheckBig } from "lucide-react";

export default function TodoStatsFilters({
    activeTasks,
    completedTasks,
    filters,
    currentFilter,
    onFilterChange,
}) {
    return (
        <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-2">
                <span className="flex items-center gap-1 py-0.5 px-2 border border-gray-300 rounded-full text-sm">
                    <Circle size={12} />
                    {activeTasks} Active
                </span>
                <span className="flex items-center gap-1 py-0.5 px-2 border border-gray-300 rounded-full text-sm">
                    <CircleCheckBig size={12} />
                    {completedTasks} Completed
                </span>
            </div>

            <div className="flex gap-2">
                {filters.map((f) => (
                    <Button
                        key={f}
                        variant={currentFilter === f ? "primary" : "secondary"}
                        onClick={() => onFilterChange(f)}>
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                    </Button>
                ))}
            </div>
        </div>
    );
}
