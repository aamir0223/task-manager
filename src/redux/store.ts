import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import taskReducer from './slices/taskSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,   // Add the authReducer to the store
    tasks: taskReducer,  // You can add other slices here
  },
});

export default store;
