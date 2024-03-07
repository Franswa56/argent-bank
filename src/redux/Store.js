import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Reducers/AuthReducer'; 
import UserReducer from './Reducers/userReducer';

const store = configureStore({
  reducer: {
    auth: AuthReducer, 
    user: UserReducer,
  },
});

export default store;