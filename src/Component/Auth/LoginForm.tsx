import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { setTasksForUser } from "../../redux/slices/taskSlice";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("loggedInUser");
  useEffect(() => {
    if (loggedInUser) {
      navigate("/tasks");
    }
  }, [navigate, loggedInUser]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const users: Array<{ username: string; password: string }> = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      dispatch(login({ username }));
      dispatch(setTasksForUser(username));
      localStorage.setItem("loggedInUser", username);
      navigate("/tasks");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <form onSubmit={handleLogin}>

      <div className="field">
        <label>Username</label>
        <input
          type="text"
          value={username}
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label>Password</label>
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: "red", textAlign: "center", fontSize: "14px" }}>{error}</p>}
      <button type="submit">

        Login
        <span className="icon">&#10132;</span>
      </button>


      <p className="already">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
