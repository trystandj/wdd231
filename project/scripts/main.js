import { fetchNutritionData } from './workoutAPI.js';

async function loadNutrition() {
  const input = document.getElementById('food-input').value; // Get text input
  const data = await fetchNutritionData(input); // Fetch nutrition info

  const nameEl = document.getElementById('food-name');
  const descEl = document.getElementById('food-description');

  if (data && data.foods && data.foods.length > 0) {
    const firstFood = data.foods[0];

    nameEl.textContent = `Food: ${firstFood.name}`;
    descEl.textContent = `
      Calories: ${firstFood.calories || 'N/A'}, 
      Protein: ${firstFood.protein || 'N/A'}g, 
      Fat: ${firstFood.fat || 'N/A'}g, 
      Carbs: ${firstFood.carbohydrates || 'N/A'}g
    `;
  } else {
    nameEl.textContent = "No nutrition data found.";
    descEl.textContent = "Try a different food input.";
  }
}

// Load nutrition data when the button is clicked
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('fetch-button').addEventListener('click', loadNutrition);
});
