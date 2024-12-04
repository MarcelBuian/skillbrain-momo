import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";
import React, { useState } from "react";


function TaskCard(props) {

  // Declaram o stare locală pentru message
  const [status, setStatus] = useState(props.status);

  const markAsDone = (newStatus) => {
    console.log("markAsDone! " + props.id);
    setStatus(newStatus)
  };

  const isStatusDone = () => {
    return status === 'Done';
  }

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{props.id}</p>

        {!isStatusDone() && <button onClick={() => markAsDone("Done")}>Mark as done</button>}

        <Badge status={status} />
      </div>
      <div className="card-content">

        {isStatusDone() ? <del>{props.name}</del> : <p>{props.name}</p>}

      </div>
      <div className="card-footer">
        <DateContainer date={props.dueDate} />
      </div>
    </div>
  );
}

export default TaskCard;
