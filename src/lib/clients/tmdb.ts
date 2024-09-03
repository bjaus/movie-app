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
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
