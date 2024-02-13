import React from 'react';
import './Modal.css';

function Modal({ onClose, text }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{text}</p>
        <button onClick={onClose} className="modal-button">Fermer</button>
      </div>
    </div>
  );
}

export default Modal;