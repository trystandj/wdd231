
import { fetchZenQuote } from "./getqoute.js";
import { cacheItem, getCachedItem } from "./cached.js";

async function loadQuote() {
  let quote = getCachedItem("zenQuote");
  if (!quote) {
    quote = await fetchZenQuote();
    cacheItem("zenQuote", quote);
  }

  if (quote) {
    document.getElementById("quote").textContent = `"${quote.q}"`;
    document.getElementById("author").textContent = `– ${quote.a}`;
  }
}

loadQuote();
