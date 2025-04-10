const url = 'https://trystandj.github.io/wdd231/project/data/wellness-qoutes.json';



let allQuotes = [];

async function getQuoteData() {
    const response = await fetch(url); // make sure `url` points to your JSON
    const data = await response.json();
    allQuotes = data.companies; // adjust if your JSON key changes

    displayRandomQuote(allQuotes);
}

getQuoteData();

// Display a single random quote
function displayRandomQuote(quotes) {
    const container = document.querySelector('#quote-container');
    container.innerHTML = ''; // Clear previous quote if any

    const randomQuote = getRandomItem(quotes);
    const quoteCard = createQuoteCard(randomQuote);

    container.appendChild(quoteCard);
}

// Create a quote card element
function createQuoteCard(quoteObj) {
    const card = document.createElement('section');
    card.classList.add('quote-card');

    const quoteText = document.createElement('p');
    quoteText.classList.add('quote-text');
    quoteText.textContent = `"${quoteObj.quote}"`;

    const author = document.createElement('h3');
    author.classList.add('quote-author');
    author.textContent = `— ${quoteObj.author}`;

    const meta = document.createElement('p');
    meta.classList.add('quote-meta');
    meta.textContent = `Year: ${quoteObj.year} | Location: ${quoteObj.location}`;

    card.appendChild(quoteText);
    card.appendChild(author);
    card.appendChild(meta);

    return card;
}

// Get one random item from an array
function getRandomItem(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}
