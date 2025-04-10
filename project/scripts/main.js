import { fetchData } from './api.js';
import { displayRandomQuote } from './quoteDisplay.js';
import { displayRandomWorkout } from './workoutPlan.js';

const quoteURL = 'https://trystandj.github.io/wdd231/project/data/wellness-qoutes.json';

async function init() {
    const data = await fetchData(quoteURL);
    if (data && data.qoutes) {
        displayRandomQuote(data.qoutes); 
    }
    else {
        console.error("No quotes data found.");
    }
    // Fetch and display random workouts
    const workoutURL = 'https://trystandj.github.io/wdd231/project/data/workout-plans.json';
    const workoutData = await fetchData(workoutURL);
    if (workoutData && workoutData.workouts) {
      displayRandomWorkout(workoutData.workouts); 
    }
    else {
        console.error("No workouts data found.");
    }
}


init();
