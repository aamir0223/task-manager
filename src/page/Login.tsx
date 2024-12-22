
import React from 'react'
import LoginForm from '../Component/Auth/LoginForm'




const Login = () => {
  return (
    <div className="login">
      <div className='login-left'>
        <h2>Log In To Your Account</h2>

        <LoginForm />
      </div>
      <div className='login-right'>
        <img src="./task.png" alt="Task Image" />

      </div>
    </div>
  )
}

export default Login
