import axios from 'axios';

const apiUrl = 'http://localhost:3001'; // Assurez-vous de remplacer par votre URL backend

// Requête pour récupérer tous les locataires
export const fetchTenants = async () => {
    try {
        const response = await axios.get(`${apiUrl}/tenants`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des locataires :', error);
        throw error;
    }
};

// Requête pour ajouter un nouveau locataire
export const addTenant = async (newTenant) => {
    try {
        const response = await axios.post(`${apiUrl}/tenants`, newTenant);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout du locataire :', error);
        throw error;
    }
};

// Requête pour mettre à jour le statut de paiement d'un locataire
export const updatePaymentStatus = async (tenantId, status) => {
    try {
        const response = await axios.put(`${apiUrl}/tenants/${tenantId}`, { paymentStatus: status });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour du statut de paiement :', error);
        throw error;
    }
};
