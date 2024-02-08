
import './designs/css/main.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import UserPage from './pages/UserPage';
import { Provider } from 'react-redux';
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;