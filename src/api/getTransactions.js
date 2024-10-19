import { getAuthToken } from './auth.js';  // Import funkcji getAuthToken

async function getTransactions(accountId) {
    const apiUrl = `https://api-sandbox.commerzbank.com/securities-api/v4/accounts/${accountId}/transactions`;
    const token = await getAuthToken();  // Uzyskaj token

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const transactions = await response.json();
        console.log('Transactions:', transactions);
    } else {
        const errorDetails = await response.text();
        console.error('Error fetching transactions', response.status, response.statusText);
        console.error('Error details:', errorDetails);
    }
}

// Uruchom funkcję getTransactions, podając prawidłowy accountId
getTransactions('pseudo-100123456700-mized');  // Zastąp prawdziwym account-id
