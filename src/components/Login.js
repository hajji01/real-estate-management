// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate
import './Login.css'; // Assurez-vous d'avoir un fichier CSS correspondant

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Utilisation de useNavigate au lieu de useHistory

    const handleLogin = (e) => {
        e.preventDefault(); // Empêcher le rechargement de la page
        // Logique de vérification du login ici, redirigez ensuite
        navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <h2>Connexion</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default Login;
