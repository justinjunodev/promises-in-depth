// Endpoint for lesson.
const API_URL = 'https://starwars.egghead.training/';

// Select required DOM elements.
const results = document.querySelector('.results');

// Set default/ loading state.
results.innerText = 'Loading ...';

// Sort film data and extract title info.
function getFilmTitles(films) {
  return films
    .slice()
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((film) => `${film.episode_id}. ${film.title}`)
    .join('\n');
}

// Initialize promise
fetch(`${API_URL}films`)
  .then((response) => response.json())
  .then((films) => {
    results.innerText = getFilmTitles(films);
  });
