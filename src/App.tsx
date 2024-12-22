import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from './page/Login';
import Register from './page/Register';
import Home from './page/home';
import Tasks from './page/Tasks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
