import { getRandomItems } from './utils.js';

export function displayAllWorkouts(workouts) {
    const container = document.querySelector('#all-workout-container');
    container.innerHTML = '';  // Clear previous workouts

    const randomWorkouts = getRandomItems(workouts, 10); // Get 3 random workouts
    randomWorkouts.forEach((workout) => {
        const workoutCard = createWorkoutCard(workout);
        container.appendChild(workoutCard); // Append each workout card to the container
    });
}

function createWorkoutCard(workout) {
    const card = document.createElement('section');
    card.classList.add('work-card');

    const name = document.createElement('h3');
    name.textContent = workout.name;

    const focus = document.createElement('p');
    focus.innerHTML = `<strong>Focus Area:</strong> ${workout.focusArea}`;

    const duration = document.createElement('p');
    duration.innerHTML = `<strong>Duration:</strong> ${workout.duration} minutes`;

    const difficulty = document.createElement('p');
    difficulty.innerHTML = `<strong>Difficulty:</strong> ${workout.difficulty}`;

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
