import { getRandomItems } from './utils.js';

export function displayAllMeals(meals) {
    const container = document.querySelector('#all-meal-container');
    container.innerHTML = '';  

    const randomMeals = getRandomItems(meals, 10); 
    randomMeals.forEach((meal) => {
        const mealCard = createMealCard(meal);
        container.appendChild(mealCard); 
    });
}

function createMealCard(meal) {
    const card = document.createElement('section');
    card.classList.add('work-card');

    const name = document.createElement('h3');
    name.textContent = meal.name;

    const focus = document.createElement('p');
    focus.innerHTML = `<strong>Focus Area:</strong> ${meal.focusArea}`;

    const image = document.createElement('img');
    image.src = meal.url;
    image.alt = meal.name;
    image.loading = 'lazy';
    image.width = 400;
    image.height = 250;

    const description = document.createElement('p');
    description.textContent = meal.description;

    const learnMoreBtn = document.createElement('a');
    learnMoreBtn.textContent = 'Learn More';
    learnMoreBtn.href = meal.link;
    learnMoreBtn.target = '_blank';
    learnMoreBtn.classList.add('learn-more-button');

    card.appendChild(name);
    card.appendChild(focus);
    card.appendChild(image);
    card.appendChild(description);
    card.appendChild(learnMoreBtn);

    return card;
}
