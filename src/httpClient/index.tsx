export const fetchData = async () => {
    const response = await fetch("api/backend/data/bubbles1000.usd.json");
    const data = await response.json();
    return data
};