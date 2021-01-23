// Endpoint for lesson.
const API_URL = 'https://starwars.egghead.training/';

// Select required DOM elements.
const results = document.querySelector('.results');
const loading = document.querySelector('.loading');

// Set default/ loading state.
loading.innerText = 'Loading ...';

// Sort film data and extract title info.
function getFilmTitles(films) {
  return films
    .slice()
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((film) => `${film.episode_id}. ${film.title}`)
    .join('\n');
}

// Initialize promise, return/reject response, catch errors, and remove loading state.
fetch(`${API_URL}films`)
  .then((response) => {
    if (!response.ok) {
      return Promise.reject(new Error('Unsuccessful Response'));
    }
    return response.json().then((films) => {
      results.innerText = getFilmTitles(films);
    });
  })
  .catch((error) => {
    console.warn(error);
    results.innerText = ':(';
  })
  .finally(() => {
    loading.remove();
  });
