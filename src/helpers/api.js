import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3MTM3ZDlmYzM2MTcxNjZlYjExZDNhOGQ0MGFiMCIsInN1YiI6IjY0YTY3NzgzY2FlNjMyMDExZmEzMGNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gEOkQD0FXxUfmOhTCa-454ep2pjfF3H_I2ZZK8BBfzw',
  },
};

async function fetchTrendingMovies() {
  const response = await axios.get('/trending/all/day?language=en-US', options);
  return response.data.results;
}

async function fetchMovieSearch(query) {
  const response = await axios.get(
    `/search/movie?query=${query}&language=en-US`,
    options
  );
  return response.data.results;
}
async function fetchMovieDetails(id) {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);
  return response.data;
}

async function fetchAddition(id, param) {
  const response = await axios.get(
    `movie/${id}/${param}?language=en-US`,
    options
  );
  return response.data;
}

export {
  fetchTrendingMovies,
  fetchMovieSearch,
  fetchMovieDetails,
  fetchAddition,
};
