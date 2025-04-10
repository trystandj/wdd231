document.getElementById('load-quote').addEventListener('click', async () => {
  try {
    const response = await fetch('https://favqs.com/api/qotd');
    const data = await response.json();

    const quote = data.quote.body;
    const author = data.quote.author;

    document.getElementById('quote').textContent = `"${quote}"`;
    document.getElementById('author').textContent = `— ${author}`;
  } catch (error) {
    console.error("Failed to fetch quote:", error);
    document.getElementById('quote').textContent = "Could not load quote.";
    document.getElementById('author').textContent = "";
  }
});
