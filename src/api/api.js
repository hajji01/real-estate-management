// src/api/api.js

const BASE_URL = 'http://localhost:3001'; // Assurez-vous que c'est le bon port

const api = {
    fetchTenants: async () => {
        try {
            const response = await fetch(`${BASE_URL}/tenants`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching tenants:', error);
            throw error;
        }
    },

    addTenant: async (newTenant) => {
        try {
            const response = await fetch(`${BASE_URL}/tenants`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTenant),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error adding tenant:', error);
            throw error;
        }
    },
};

export default api;
