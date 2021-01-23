// Required DOM Elements
const results = document.querySelector('.results');
results.innerText = 'View the console.';

// Resolves promise after "x" ms.
function resolveAfter(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
}

// Creating new promises.
const promiseA = resolveAfter(1000, 'Promise A');
const promiseB = resolveAfter(5000, 'Promise B');

// Returns the first fulfilled promise.
const fastestPromise = Promise.race([promiseA, promiseB]);

// Logging the result to the console.
fastestPromise.then((value) => console.log(`${value} is fastest.`));
