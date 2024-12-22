import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => { // Change component name to 'Home' (uppercase)
    const navigate = useNavigate();
    return (
        <div className='home'>
            <div className='top'>
                <h1>Edstruments</h1>
            </div>
            <div className='body'>
                <div className='left'>
                    <h1>Task Management</h1>
                    <p>A Simple and Intuitive Interface for Managing Your Daily Tasks</p>

                    <button onClick={() => navigate("/login")}>

                        <span className="text">Let’s Start</span>
                        <span className="icon">&#10132;</span>
                    </button>
                </div>
                <div className='right'>
                    <img src="./task.png" alt="Task Image" />
                </div>
            </div>

            <div className='bottom'>
                <img src="./task2.png" alt="Task Image" />
            </div>
        </div>
    );
}

export default Home; // Ensure export matches component name
