import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, markTaskComplete } from "../../redux/slices/taskSlice";
import TaskEditForm from "./TaskEditForm";



interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);  // Type `isEditing` as a boolean
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  const handleMarkComplete = () => {
    dispatch(markTaskComplete(task.id));
  };


  const getRandomGradient = () => {
    const gradients = [
      "linear-gradient(45deg, #FFEBEB, #FFFFFF)",
      "linear-gradient(45deg, #FFFAF1, #FFFFFF)",
      "linear-gradient(45deg, #F3E7FF, #FFFFFF)",
      "linear-gradient(45deg, #FDE2E2, #F8F8F8)",
      "linear-gradient(45deg, #FAD0C4, #F8F8F8)"
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  return (
    <div
      className="task"
      style={{ background: getRandomGradient() }}
    >
      <TaskEditForm task={task} setIsEditing={setIsEditing} isEditing={isEditing} />

      <div className="text">
        <p
          className={task.completed ? "para para-completed" : "para"}
        >
          {task.title}
        </p>
        <div className="btn-group">
          <button onClick={handleMarkComplete} className="complete">
            {task.completed ? "Undo" : "Complete"}
          </button>
          <div className="right">
            {!task.completed && (
              <button onClick={() => setIsEditing(true)} className="edit" >Edit</button>
            )}
            <button className="dele" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TaskItem;


const gradients = [
  "linear-gradient(45deg, #FFEBEB, #FFFFFF)",
  "linear-gradient(45deg, #FFFAF1, #FFFFFF)",
  "linear-gradient(45deg, #F3E7FF, #FFFFFF)",
  "linear-gradient(45deg, #FDE2E2, #F8F8F8)",
  "linear-gradient(45deg, #FAD0C4, #F8F8F8)"
];

const buttonColors = [
  "#FFB6C1",
  "#FF8C00",
  "#8FBC8F",
  "#32CD32",
  "#DDA0DD",
];

