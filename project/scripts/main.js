import { fetchData } from './api.js';
import { displayRandomQuote } from './quoteDisplay.js';

const quoteURL = 'https://trystandj.github.io/wdd231/project/data/wellness-qoutes.json';

async function init() {
    const data = await fetchData(quoteURL);
    if (data && data.qoutes) {
        displayRandomQuote(data.qoutes); 
    }
}


init();
