import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTaskFilter } from "../../redux/slices/taskSlice";

const TaskFilter = () => {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const handleFilterChange = (newFilter: any) => {
    setFilter(newFilter);
    dispatch(setTaskFilter(newFilter));
  };

  return (
    <div className="task-filter">

      <button
        onClick={() => handleFilterChange("all")}
        className={filter === "all" ? "active" : ""}
      >
        All Tasks
      </button>
      <button
        onClick={() => handleFilterChange("completed")}
        className={filter === "completed" ? "active" : ""}
      >
        Completed
      </button>
      <button
        onClick={() => handleFilterChange("incomplete")}
        className={filter === "incomplete" ? "active" : ""}
      >
        Incomplete
      </button>
    </div>
  );
};

export default TaskFilter;
