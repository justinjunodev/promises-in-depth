// Required DOM Elements
const results = document.querySelector('.results');
results.innerText = 'View the console.';

// Create a new function and return new promise with Promise constructor.
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

console.log('Right Away');

sleep(1000)
  .then(() => console.log('After 1s'))
  .then(() => sleep(1000))
  .then(() => console.log('After 2s'));
