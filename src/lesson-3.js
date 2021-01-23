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

// Initialize promise, check response, catch error, and use finally method to remove loading state.
fetch(`${API_URL}films`)
  .then((response) => {
    if (!response.ok) {
      throw Error('Unsuccessful response');
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
