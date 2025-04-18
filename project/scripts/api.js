// api.js
export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}
