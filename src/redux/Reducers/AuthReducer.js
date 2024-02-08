import { createReducer } from '@reduxjs/toolkit';



const initialState = {
  loggedIn: false,
};


const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('LOGIN', (state) => {
      state.loggedIn = true;
    })
    .addCase('LOGOUT', (state) => {
      state.loggedIn = false;
    });
});

export default authReducer;