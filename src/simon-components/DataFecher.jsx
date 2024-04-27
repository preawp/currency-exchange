import  {useEffect} from 'react'
export default function DataFetcher({currency,onDataFetched}){

    useEffect(() => {
        const apiKey=import.meta.env.VITE_API_KEY;
        const apiUrl = `https://v6.exchangerate-api.com/v6/2ebe7335d4f26e853cb8a95b/latest/${currency}`;

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP status ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('data has left')
                onDataFetched(data);
            })
            .catch(error => {
                console.error('Failed to fetch data:', error);
            });
    }, [currency, onDataFetched]);
    return null;

}