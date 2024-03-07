import "./Modal.css";
import { useState } from "react";

function EditModal({ isOpen, onClose, onUserNameUpdate }) {
  const [newUsername, setNewUsername] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page


    if (!newUsername.trim()) {
      alert("Le nom d'utilisateur est requis") // Met à jour le message d'erreur
      return; // Arrête l'exécution de la fonction si newUsername est vide
    }

    const token = localStorage.getItem("token"); // Récupère le token du localStorage

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userName: newUsername,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      onUserNameUpdate();
      onClose(); // Ferme la modale après la mise à jour réussie
    } catch (error) {
      console.error("Erreur lors de la mise à jour du nom d'utilisateur:", error);
    }
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Change User Name</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="New User Name" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} maxLength="16" />
          <button type="submit" className="modal-button">
            Update
          </button>
        </form>
        <button onClick={onClose} className="modal-button">
          Close
        </button>
      </div>
    </div>
  );
}

export default EditModal;
