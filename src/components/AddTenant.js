// src/components/AddTenant.js

import React, { useState } from 'react';
import api from '../api/api'; // Assurez-vous du bon chemin vers api.js

const AddTenant = () => {
    const [name, setName] = useState('');
    const [apartment, setApartment] = useState('');

    const handleAddTenant = async () => {
        const newTenant = {
            name,
            apartment,
        };

        try {
            const addedTenant = await api.addTenant(newTenant);
            console.log('Tenant added successfully:', addedTenant);
            // Réinitialiser les champs après l'ajout réussi si nécessaire
        } catch (error) {
            console.error('Error adding tenant:', error);
        }
    };

    return (
        <div>
            <h2>Ajouter un locataire</h2>
            <form onSubmit={handleAddTenant}>
                <input
                    type="text"
                    placeholder="Nom du locataire"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Appartement"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default AddTenant;
