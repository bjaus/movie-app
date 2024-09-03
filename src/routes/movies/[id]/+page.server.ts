import { TMDBClient } from '$lib/clients/tmdb';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, locals, params }) => {
	const tmdb = new TMDBClient({ token: locals.accessToken, fetch });
	const moviePromise = tmdb.getMovieById(params.id);
	const similarPromise = tmdb.getSimilarMovies(params.id);
	const trailersPromise = tmdb.getMovieTrailers(params.id);
	return {
		movie: await moviePromise,
		trailers: await trailersPromise,
		similar: await similarPromise
	};
};
