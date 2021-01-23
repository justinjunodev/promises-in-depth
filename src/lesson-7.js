// Endpoint for lesson.
const API_URL = 'https://starwars.egghead.training/';

// Select required DOM elements.
const results = document.querySelector('.results');
const loading = document.querySelector('.loading');

// Set default/ loading state.
loading.innerText = 'Loading ...';

// Fetches api data with passed query param.
function queryAPI(param) {
  return fetch(`${API_URL}${param}`).then((response) =>
    response.ok
      ? response.json()
      : Promise.reject(Error('Unsuccessful Response'))
  );
}

// Use Promise.all to fetch/return all responses.
Promise.all([queryAPI('films'), queryAPI('planets'), queryAPI('species')])
  .then(([films, planets, species]) => {
    results.innerText =
      `${films.length} films, ` +
      `${planets.length} planets, and ` +
      `${species.length} species.`;
  })
  .catch((error) => {
    console.warn(error);
    results.innerText = 'Something went wrong . . . ';
  })
  .finally(() => {
    loading.remove();
  });
