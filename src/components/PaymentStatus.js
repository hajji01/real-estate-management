import React, { useState } from 'react';
import { updatePaymentStatus } from '../api';

const PaymentStatus = ({ tenantId }) => {
    const [paid, setPaid] = useState(false);

    const handlePaymentStatusChange = async () => {
        try {
            await updatePaymentStatus(tenantId, !paid);
            setPaid(!paid); // Mettre à jour l'état local après la mise à jour réussie
        } catch (error) {
            console.error('Erreur lors de la mise à jour du statut de paiement :', error);
            // Afficher une erreur à l'utilisateur
        }
    };

    return (
        <div className="payment-status-container">
            <h2>Statut de paiement</h2>
            <label>
                <input type="checkbox" checked={paid} onChange={handlePaymentStatusChange} />
                Paiement effectué ce mois-ci
            </label>
        </div>
    );
};

export default PaymentStatus;
