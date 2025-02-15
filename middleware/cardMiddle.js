
export async function fetchData(req, res, next) {
    try {
        const api = await fetch('https://picsum.photos/v2/list?limit=9');
        if(!api.ok) throw new Error('Data Fetching failed');
        const cardData = await api.json()
        req.data = cardData;
        next();
    } catch (err) {
        console.log(err);
    }

}; 
