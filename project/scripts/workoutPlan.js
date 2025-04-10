// This module handles the display of random workouts on the webpage.

import { getRandomItem } from './utils.js';

export function displayRandomWorkout(workouts) {
    const container = document.querySelector('#Workout-container');
    container.innerHTML = '';

    const randomWorkout = getRandomItem(workouts);
    const workoutCard = createWorkoutCard(randomWorkout);

    container.appendChild(workoutCard);
}

function createWorkoutCard(workout) {
    const card = document.createElement('section');
    card.classList.add('work-card'); 

    const name = document.createElement('h3');
    name.textContent = workout.name;

    const focus = document.createElement('p');
    focus.textContent = `Focus Area: ${workout.focusArea}`;

    const duration = document.createElement('p');
    duration.textContent = `Duration: ${workout.duration} minutes`;

    const difficulty = document.createElement('p');
    difficulty.textContent = `Difficulty: ${workout.difficulty}`;

    const description = document.createElement('p');
    description.textContent = workout.description;

    const learnMoreBtn = document.createElement('a');
    learnMoreBtn.textContent = 'Learn More';
    learnMoreBtn.href = workout.link;
    learnMoreBtn.target = '_blank';
    learnMoreBtn.classList.add('learn-more-button');

    card.appendChild(name);
    card.appendChild(focus);
    card.appendChild(duration);
    card.appendChild(difficulty);
    card.appendChild(description);
    card.appendChild(learnMoreBtn);

    return card;
}
