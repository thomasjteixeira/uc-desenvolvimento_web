async function getMovies(title) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
      "Bearer [YOUR_BEARER_TOKEN]",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

// Usando a função
getMovies("The Matrix Reloaded");
