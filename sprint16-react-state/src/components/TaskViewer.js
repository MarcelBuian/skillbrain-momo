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
            id: "T-7",
            name: "Create a Design System for Enum Workspace.",
            status: "Todo",
            dueDate: new Date(2022, 5, 23),
        },
        {
            id: "T-8",
            name: "13 Create a Design System for Enum Workspace.",
            status: "Complete",
            dueDate: new Date(2022, 6, 13),
        },
        {
            id: "T-9",
            name: "Create a Design System for Enum Workspace.",
            status: "Todo",
            dueDate: new Date(2022, 5, 23),
        },
        {
            id: "T-10",
            name: "13 Create a Design System for Enum Workspace.",
            status: "Complete",
            dueDate: new Date(2022, 6, 13),
        },
        {
            id: "T-11",
            name: "Create a Design System for Enum Workspace.",
            status: "Todo",
            dueDate: new Date(2022, 5, 23),
        },
        {
            id: "T-12",
            name: "Create a Design System for Enum Workspace.",
            status: "Todo",
            dueDate: new Date(2022, 5, 23),
        },
    ]

    const taskCards = [];

    // Iterăm peste array-ul data folosind un for clasic
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        taskCards.push(
            <TaskCard
                key={item.id}
                id={item.id}
                status={item.status}
                name={item.name}
                dueDate={item.dueDate}
            />
        );
    }

    const list = [];
    list.push(<li key="1">HTML</li>);
    list.push(<li key="2">CSS</li>);
    list.push(<li key="5">Javascript</li>);


    return (
        <div className="app-container">
            {taskCards}

            <ul>
                {list}
            </ul>
        </div>
    )
}

export default TaskViewer;
