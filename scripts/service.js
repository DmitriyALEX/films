import { sortMovies } from './helpers.js';

export function getMovies() {
	return fetch('https://run.mocky.io/v3/e40fd488-958a-4548-8035-58dbaf3695a0')
    .then((res) => res.json())
    .then(sortMovies);
}