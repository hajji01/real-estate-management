// src/components/TenantList.js

import React, { useState, useEffect } from 'react';
import api from '../api/api'; // Assurez-vous du bon chemin vers api.js

const TenantList = () => {
    const [tenants, setTenants] = useState([]);

    useEffect(() => {
        const fetchTenants = async () => {
            try {
                const fetchedTenants = await api.fetchTenants();
                setTenants(fetchedTenants);
            } catch (error) {
                console.error('Error fetching tenants:', error);
            }
        };

        fetchTenants();
    }, []);

    return (
        <div>
            <h2>Liste des locataires</h2>
            <ul>
                {tenants.map((tenant) => (
                    <li key={tenant.id}>{tenant.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TenantList;
