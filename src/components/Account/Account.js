import React, { useState, useEffect } from 'react';
import EditModal from '../EditModal/EditModal';

const Account = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);


  const profileFetch = async () => {
    const token = localStorage.getItem('token'); // Récupère le token du localStorage

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST', 
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`); // Lance une erreur si la réponse n'est pas ok
      }

      const data = await response.json();
      console.log(data)

      
      setFirstName(data.body.firstName); 
      setLastName(data.body.lastName);
      setUserName(data.body.userName)

    } catch (error) {
      console.error('Erreur lors de la récupération du profil:', error);
    }
  };

  useEffect(() => {
    profileFetch();
  }, []); 

  const EditButtonClick = () => {
    setIsEditModalOpen(true);
  };

  const handleUserNameUpdate = () => {
    profileFetch();
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName} ( {userName} )</h1>
        <button className="edit-button" onClick={EditButtonClick}>Edit Name</button>
        <EditModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} onUserNameUpdate={handleUserNameUpdate} />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Account;