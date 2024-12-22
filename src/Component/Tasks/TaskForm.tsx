import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/taskSlice";
import { v4 as uuidv4 } from "uuid"; // For generating unique task IDs

import { Dialog } from "@mui/material";


const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      dispatch(
        addTask({
          id: uuidv4(),
          title: taskTitle,
          completed: false,
        })
      );
      setTaskTitle("");
      setIsAdding(false);
    }
  };
  const handleClose = () => setIsAdding(false);

  return (
    <div>
      <button className="add-button" onClick={() => setIsAdding(true)}><svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
        Add New Task
      </button>


      <Dialog open={isAdding} sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "500px",  // Set your width here
            borderRadius: "10px"
          },
        },
      }} className="dialog-box">
        <div className="content">
          <p>Add New Task</p>
          <form className="task-add" onSubmit={handleSubmit}>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Add a new task"
              required
            />
            <div className="button">
              <button type="submit" className="add">Add Task</button>
              <button onClick={() => setIsAdding(false)} className="cancel">Cancel</button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default TaskForm;
