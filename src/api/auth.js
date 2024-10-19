import fetch from 'node-fetch';  // Import fetch w wersji ES6

// Function to get the Auth Token
export async function getAuthToken() {
    const tokenUrl = 'https://api-sandbox.commerzbank.com/auth/realms/sandbox/protocol/openid-connect/token';

    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'client_id': '5b1a7b85-6177-4c91-a6e6-0fe14061618d',  // Zastąp swoim client ID
            'client_secret': 'c61e350a-6d74-4c93-bb8c-e990a52c9e91',  // Zastąp swoim secret
            'grant_type': 'client_credentials'
        })
    });

    const data = await response.json();
    if (response.ok) {
        return data.access_token;
    } else {
        console.error('Error fetching token:', data);
        throw new Error('Failed to fetch token');
    }
}
