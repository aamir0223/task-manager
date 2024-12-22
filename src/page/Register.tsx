import React from "react";
import RegisterForm from "../Component/Auth/RegisterForm";


const Register = () => {
  return (
    <div className="register">
      <div className='register-left'>

        <h2>Create Your Account</h2>
        <p>Welcome! To get started with managing your tasks, please create a new account. By registering, you’ll be able to securely log in and access your personalized task management system. It's simple, quick, and the first step toward an organized and productive workflow. Fill in the details below to set up your account and start managing your tasks today!</p>
        <RegisterForm />
      </div>
      <div className='register-right'>
        <img src="./task.png" alt="Task Image" />

      </div>

    </div>
  );
};

export default Register;
