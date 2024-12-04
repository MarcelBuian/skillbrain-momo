import TaskCard from "./task-card/TaskCard";
import "./TaskViewer.css";

function TaskViewer() {
    const data = [
        {
            id: "T-1",
            name: "Create a Design System for Enum Workspace.",
            status: "Todo",
            dueDate: new Date(2022, 5, 23),
        },
        {
            id: "T-2",
            name: "12 Create a Design System for Enum Workspace.",
            status: "In Progress",
            dueDate: new Date(2022, 7, 24),
        },
        {
            id: "T-3",
            name: "13 Create a Design System for Enum Workspace.",
            status: "Complete",
            dueDate: new Date(2022, 6, 13),
        },
        {
            id: "T-4",
            name: "Create a Design System for Enum Workspace.",
            status: "Todo",
            dueDate: new Date(2022, 5, 23),
        },
        {
            id: "T-5",
            name: "13 Create a Design System for Enum Workspace.",
            status: "Complete",
            dueDate: new Date(2022, 6, 13),
        },
        {
            id: "T-6",
            name: "Create a Design System for Enum Workspace.",
            status: "Todo",
            dueDate: new Date(2022, 5, 23),
        },
        {
            id: "T-6",
            name: "Create a Design System for Enum Workspace.",
            status: "Todo",
            dueDate: new Date(2022, 5, 23),
        },
        {
            id: "T-3",
            name: "13 Create a Design System for Enum Workspace.",
            status: "Complete",
            dueDate: new Date(2022, 6, 13),
        },
        {
            id: "T-4",
            name: "Create a Design System for Enum Workspace.",
            status: "Todo",
            dueDate: new Date(2022, 5, 23),
        },
        {
            id: "T-5",
            name: "13 Create a Design System for Enum Workspace.",
            status: "Complete",
            dueDate: new Date(2022, 6, 13),
        },
        {
            id: "T-6",
            name: "Create a Design System for Enum Workspace.",
            status: "Todo",
            dueDate: new Date(2022, 5, 23),
        },
        {
            id: "T-6",
            name: "Create a Design System for Enum Workspace.",
            status: "Todo",
            dueDate: new Date(2022, 5, 23),
        },
    ]

    return (
        <div className="app-container">
            {data.map((item, index) => (
                <TaskCard
                    key={item.id}
                    id={item.id}
                    status={item.status}
                    name={item.name}
                    dueDate={item.dueDate}
                />
            ))}
        </div>

    );
}

export default TaskViewer;
