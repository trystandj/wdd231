// Gets random item from an array

export function getRandomItem(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

export function getRandomItems(arr, num) {
    let shuffled = arr.sort(() => 0.5 - Math.random());  
    return shuffled.slice(0, num); 
}
