// This module handles the display of random quotes on the webpage.

import { getRandomItem } from './utils.js';

export function displayRandomQuote(quotes) {
    const container = document.querySelector('#quote-container');
    container.innerHTML = '';

    const randomQuote = getRandomItem(quotes);
    const quoteCard = createQuoteCard(randomQuote);

    container.appendChild(quoteCard);
}

function createQuoteCard(qoute) {
    const card = document.createElement('section');
    card.classList.add('quote-card');

    const quoteText = document.createElement('h3');
    quoteText.textContent = `"${qoute.quote}"`;

    const author = document.createElement('p');
    author.textContent = `— ${qoute.author}`;

    const meta = document.createElement('p');
    meta.textContent = `Year: ${qoute.year} Location - ${qoute.location}`;

    card.appendChild(quoteText);
    card.appendChild(author);
    card.appendChild(meta);

    return card;
}
