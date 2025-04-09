// /js/api/zenQuotes.js
const ZEN_QUOTES_URL ="https://zenquotes.io/api/random";

export async function fetchZenQuote() {
  try {
    const response = await fetch(ZEN_QUOTES_URL);
    const data = await response.json();
    return data[0]; // { q: "quote", a: "author" }
  } catch (err) {
    console.error("Failed to fetch Zen quote:", err);
    return null;
  }
}
