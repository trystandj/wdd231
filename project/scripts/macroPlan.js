import { getRandomItems } from './utils.js';

export function displayAllMeals(Macros) {
    const container = document.querySelector('#all-meal-container');
    container.innerHTML = '';  

    const randomMacros = getRandomItems(Macros, 9); 
    randomMacros.forEach((meal) => {
        const mealCard = createMealCard(meal);
        container.appendChild(mealCard); 
    });
}

function createMealCard(meal) {
    const card = document.createElement('section');
    card.classList.add('macro-card');

    const name = document.createElement('h3');
    name.textContent = meal.name;



    const image = document.createElement('img');
    image.src = meal.url;
    image.alt = meal.name;
    image.loading = 'lazy';
    image.width = 400;
    image.height = 250;

    const focus = document.createElement('p');
    focus.classList.add('focus'); // NEW
    focus.innerHTML = `<strong>Focus Area:</strong> ${meal.focusArea}`;
    
    const description = document.createElement('p');
    description.classList.add('description'); // NEW
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
