import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem('loggedInUser') || null, // Changed to store logged-in user
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.username;
      localStorage.setItem('loggedInUser', action.payload.username);
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('loggedInUser');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
