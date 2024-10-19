import { getAuthToken } from './auth.js';  // Import funkcji getAuthToken

async function getAccounts() {
    const apiUrl = 'https://api-sandbox.commerzbank.com/securities-api/v4/accounts';
    const token = await getAuthToken();  // Uzyskaj token

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const accounts = await response.json();
        console.log('Accounts:', accounts);
    } else {
        const errorDetails = await response.text();
        console.error('Error fetching accounts', response.status, response.statusText);
        console.error('Error details:', errorDetails);
    }
}

// Uruchom funkcję getAccounts
getAccounts();
