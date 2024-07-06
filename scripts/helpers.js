export function getCurrentDate(timestamp = Date.now()) {
    const today = new Date(timestamp);
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();
  
    return `${day}/${month}/${year}`;
}

export const api_key = "a14e2c13-f18b-4d90-bb26-9dabe48cf3ab";
