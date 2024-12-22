import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/slices/taskSlice";
import { Dialog } from "@mui/material";


interface Task {
  id: string;
  title: string;
  completed: boolean;
}


interface TaskEditFormProps {
  task: Task;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: any
}

const TaskEditForm: React.FC<TaskEditFormProps> = ({ task, setIsEditing, isEditing }) => {
  const [newTitle, setNewTitle] = useState<string>(task.title);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTitle.trim()) {
      dispatch(updateTask({ id: task.id, title: newTitle }));
      setIsEditing(false);
    }
  };

  return (
    <Dialog open={isEditing} sx={{
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
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Add a new task"
            required
          />
          <div className="button">
            <button type="submit" className="add">Add Task</button>
            <button onClick={() => setIsEditing(false)} className="cancel">Cancel</button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default TaskEditForm;
