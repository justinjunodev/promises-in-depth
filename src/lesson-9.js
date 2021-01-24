// Endpoint for lesson.
const API_URL = 'https://starwars.egghead.training/';

// Select required DOM elements.
const results = document.querySelector('.results');
const loading = document.querySelector('.loading');

// Set default/ loading state.
loading.innerText = 'Loading ...';

// Fetches api data with passed query param.
async function queryAPI(param) {
  const response = await fetch(`${API_URL}${param}`);
  if (response.ok) {
    return response.json();
  }
  throw Error('Unsuccessful response.');
}

// An asychronous approach to handling multiple requests.
async function main() {
  try {
    const [films, planets] = await Promise.all([
      queryAPI('films'),
      queryAPI('planets'),
    ]);
    results.innerText = `${films.length} films, ${planets.length} planets.`;
  } catch {
    results.innerText = 'There was an error.';
  } finally {
    loading.remove();
  }
}

main();
