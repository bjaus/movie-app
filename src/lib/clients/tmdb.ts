const BASE_URL = 'https://api.themoviedb.org/3';

interface TMDBConfig {
	token: string;
	fetch: typeof fetch;
}

interface RequestOptions {
	method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	body?: Record<string, unknown> | null;
	headers?: HeadersInit;
	params?: Record<string, string | number>;
}

export class TMDBClient {
	private token: string;
	private fetch: typeof fetch;

	constructor(config: TMDBConfig) {
		this.token = config.token;
		this.fetch = config.fetch;
	}

	async getUpcomingMovies(language: string = 'en', page: number = 1): Promise<Array<Movie>> {
		const data = await this.request<MovieListResponse>('movie/upcoming', {
			method: 'GET',
			params: { language, page }
		});
		return data.results;
	}

	async getTopRateMovies(language: string = 'en', page: number = 1): Promise<Array<Movie>> {
		const data = await this.request<MovieListResponse>('movie/top_rated', {
			method: 'GET',
			params: { language, page }
		});
		return data.results;
	}

	async getMovieById(id: string, language: string = 'en'): Promise<Movie> {
		return this.request<Movie>(`movie/${id}`, {
			method: 'GET',
			params: { language }
		});
	}

	async getMovieTrailers(id: string, language: string = 'en-US'): Promise<Array<MovieTrailer>> {
		const data = await this.request<MovieTrailerListResponse>(`movie/${id}/videos`, {
			method: 'GET',
			params: { language }
		});
		return data.results;
	}

	async getSimilarMovies(
		id: string,
		language: string = 'en',
		page: number = 1
	): Promise<Array<Movie>> {
		const data = await this.request<MovieListResponse>(`movie/${id}/similar`, {
			method: 'GET',
			params: { language, page }
		});
		return data.results;
	}

	private async request<T>(
		endpoint: string,
		{ method = 'GET', body = null, headers = {}, params = {} }: RequestOptions = {}
	): Promise<T> {
		const url = new URL(`${BASE_URL}/${endpoint}`);
		url.search = new URLSearchParams(params as Record<string, string>).toString();

		const response = await this.fetch(url.toString(), {
			method,
			body: body ? JSON.stringify(body) : null,
			headers: {
				...headers,
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.token}`
			}
		});
		if (!response.ok) {
			throw new Error(`Failed to fetch from TMDB: ${response.statusText}`);
		}

		return response.json() as Promise<T>;
	}
}

export interface MovieListResponse {
	results: Array<Movie>;
}

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection?: string;
	budget?: number;
	genres?: Array<MovieGenres>;
	homepage?: string;
	id: number;
	imdb_id?: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: Array<MovieProductionCompany>;
	production_countries: Array<MovieProductionCountry>;
	release_date: string;
	revenue?: number;
	runtime?: number;
	spoken_languages?: Array<MovieSpokeLanguage>;
	status?: string;
	tagline?: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

interface MovieGenres {
	id: number;
	name: string;
}

interface MovieProductionCompany {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

interface MovieProductionCountry {
	iso_3166_1: string;
	name: string;
}

interface MovieSpokeLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}

interface MovieTrailerListResponse {
	results: Array<MovieTrailer>;
}

interface MovieTrailer {
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
	iso_639_1: string;
	iso_3166_1: string;
}
