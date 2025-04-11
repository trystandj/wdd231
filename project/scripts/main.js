import { fetchData } from './api.js';
import { displayRandomQuote } from './quoteDisplay.js';
import { displayRandomWorkout } from './workoutPlan.js';
import { displayAllWorkouts } from './allworkout.js';

const quoteURL = 'https://trystandj.github.io/wdd231/project/data/wellness-qoutes.json';
const workoutURL = 'https://trystandj.github.io/wdd231/project/data/workout-plans.json';

async function init() {
  try {
      const quoteData = await fetchData(quoteURL);
      const quoteContainer = document.querySelector('#quote-container');
      if (quoteData && quoteData.qoutes && quoteContainer) {
          displayRandomQuote(quoteData.qoutes);
      }

      const workoutData = await fetchData(workoutURL);
      if (workoutData && workoutData.workouts) {
          const randomWorkoutContainer = document.querySelector('#random-workout-container');
          if (randomWorkoutContainer) {
              displayRandomWorkout(workoutData.workouts);
          }
          
          const allWorkoutContainer = document.querySelector('#all-workout-container');
          if (allWorkoutContainer) {
              displayAllWorkouts(workoutData.workouts);
          }
      }
  } catch (error) {
      console.error("An error occurred while fetching data:", error);
  }
}

window.onload = init;


// Run `init()` when the page is fully loaded
window.onload = function() {
  init();
};
