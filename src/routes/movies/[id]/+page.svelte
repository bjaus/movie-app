<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const movie = data.movie;
	const trailers = data.trailers;
	const similar = data.similar;
</script>

<h1>Movie Details: {JSON.stringify(movie)}</h1>
<h1>Movie Trailers: {JSON.stringify(trailers)}</h1>
<h1>Similar Movies: {JSON.stringify(similar)}</h1>
