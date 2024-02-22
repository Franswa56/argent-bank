import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../redux/Actions/AuthActions';
import Modal from '../Modal/Modal';

function SignForm() {

  const [isModalOpen, setIsModalOpen] = useState(false);

// Redux part
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Vérifie si l'utilisateur est déjà connecté au chargement du composant
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(login());
    } else {

    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche l'envoi du formulaire

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username, 
          password: password,
        }),
      });

      const data = await response.json();

      if (data.body && data.body.token) { 
        localStorage.setItem('token', data.body.token); 
        dispatch(login()); 
      } else {
        // Si la réponse ne contient pas de token
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      setIsModalOpen(true);
    }
  };

  if (loggedIn) {
    return <Navigate to="/user" replace={true} />; // Redirigez vers la page de l'utilisateur si connecté
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {isModalOpen && (
      <Modal
        onClose={() => setIsModalOpen(false)}
        text="Nom d'utilisateur ou mot de passe incorrect."
      >
      </Modal>
    )}
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignForm;

