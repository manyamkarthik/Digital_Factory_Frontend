import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: !!localStorage.getItem('token'),  
    loading: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      registerUser(state) {
          state.isAuthenticated = true;
          state.loading = false;
        },
        loginUser(state) {
            state.isAuthenticated = true;
            state.loading = false;
        },
        logoutUser(state) {
            state.isAuthenticated = false;
            state.loading = false;
        },
        loadUser(state) {
            state.loading = false;
        }
    }
})

export const {registerUser, loginUser, logoutUser, loadUser} = authSlice.actions;
export default authSlice.reducer;