import { fetchData } from './api.js';
import { displayRandomQuote } from './quoteDisplay.js';
import { displayRandomWorkout } from './workoutPlan.js';
import { displayAllWorkouts } from './allworkout.js';
import { displayAllMeals } from './macroPlan.js';
import { initNavbarToggle } from './navbarToggle.js';

const quoteURL = 'https://trystandj.github.io/wdd231/project/data/wellness-qoutes.json';
const workoutURL = 'https://trystandj.github.io/wdd231/project/data/workout-plans.json';
const mealURL = 'https://trystandj.github.io/wdd231/project/data/meal-plans.json'; 
 

async function init() {
  try {
      const quoteData = await fetchData(quoteURL);
      const quoteContainer = document.querySelector('#quote-container');
      if (quoteData && quoteData.qoutes && quoteContainer) {
          displayRandomQuote(quoteData.qoutes);
      }
        const mealData = await fetchData(mealURL);
        const mealContainer = document.querySelector('#all-meal-container');
        if (mealData && mealData.Macros && mealContainer) {
          displayAllMeals(mealData.Macros);
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






window.onload = function() {
  init();
};
