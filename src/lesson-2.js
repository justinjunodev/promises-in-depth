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

// Initialize promise and intentionally calls wrong endpont "movies" instead of "films".
fetch(`${API_URL}movies`)
  .then((response) => {
    // Even if response is bad, it is a response, thus fulfilled. This checks the status code and throws error if not 200.
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
  });
