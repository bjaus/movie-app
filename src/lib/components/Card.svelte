<script lang="ts">
	import placeholder from '$lib/assets/placeholder.jpeg';
	import type { Movie } from '$lib/clients/tmdb';

	export let movie: Movie;

	let img_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	function handleImgError(event) {
		event.target.src = placeholder;
	}
</script>

<div
	class="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden max-w-[17rem] cursor-pointer transition-all"
>
	<img
		class="w-full object-cover"
		on:error={handleImgError}
		src={movie.poster_path ? img_path : placeholder}
		alt="poster path"
	/>
	<div class="p-4">
		<h2 class="text-left md:text-[17px] text-sm font-semi-bold line-clamp-1 w-fit hover:underline">
			{movie.title}
		</h2>
	</div>
	<p class="text-yellow-400 flex items-center mt-2 md:text-[15px] text-[13px]">
		Rating: {movie.vote_average.toFixed(2)}
	</p>
	<p class="text-gray-400">Lanuage: {movie.original_language}</p>
	<p class="text-gray-400">Release: {movie.release_date}</p>
</div>
