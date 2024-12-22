import React, { useEffect } from "react";


import { logout } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetTasks } from "../redux/slices/taskSlice";
import TaskForm from "../Component/Tasks/TaskForm";
import TaskFilter from "../Component/Tasks/TaskFilter";
import TaskList from "../Component/Tasks/TaskList";

const Tasks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("loggedInUser") || "";
  // const parsedUser = JSON.parse(loggedInUser)
  useEffect(() => {

    if (!loggedInUser) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetTasks());
    navigate("/login");
  };

  console.log("parsedUser", loggedInUser)
  return (
    <div className="tasks">
      <div className="top-row">
        <h1 className="title">Edstruments</h1>
        <div className="top-row-right">
          <h1>{loggedInUser?.slice(0, 2)}</h1>

          <button className="logout-btn" onClick={handleLogout}>
            <span className="icon">&#10132;</span>
            <span className="text">Logout</span>
          </button>
        </div>
      </div>
      <div className="second-row">
        <h2 className="title">Task Management</h2>
        <div className="second-row-right">
          <TaskFilter />
          <TaskForm />
        </div>
      </div>



      <TaskList />
    </div>
  );
};

export default Tasks;
