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
Promise.allSettled([
  queryAPI('films').then((f) => `${f.length} films`),
  queryAPI('planets').then((p) => `${p.length} planets`),
  queryAPI('species').then((s) => `${s.length} species`),
  queryAPI('vehicles').then((v) => `${v.length} vehicles`),
])
  .then((data) => {
    const statistics = data
      .filter((result) => result.status === 'fulfilled')
      .map((result) => result.value);
    results.innerText =
      statistics.length === 0
        ? 'Failed to load statistics.'
        : statistics.join('\n');
  })
  .catch((error) => {
    console.warn(error);
    results.innerText = ':(';
  })
  .finally(() => {
    loading.remove();
  });
