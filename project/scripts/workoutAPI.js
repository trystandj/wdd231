export async function fetchNutritionData(text) {
  const apiKey = '9db318319e48fa748ed473baf8050fe8'; // Replace with your Syndigo API key
  const apiUrl = 'https://docx.syndigo.com/api/v1/nlp';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({ text })
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch nutrition data:", err);
    return null;
  }
}
