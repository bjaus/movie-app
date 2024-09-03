<script lang="ts">
	import type { PageServerData } from './$types';
	import placeholder from '$lib/assets/placeholder.jpeg';

	export let data: PageServerData;

	let { movie, trailers, similiar } = data;
</script>

<div class="flex flex-col gap-8">
	<div class="relative w-full overflow-hidden">
		<div class="relative w-full h-[80vh] lg:h-[90vh]">
			<img
				class="w-full min-h-[300px] object-cover"
				src={movie.backdrop_path
					? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
					: placeholder}
				alt="backdrop"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded"></div>
			<div
				class="absolute sm:bottom-[8rem] bottom-0 left-0 sm:flex gap-4 px-4 cursor-pointer mt-40"
			>
				<img
					class="md:w-[250px] sm:w-[250px] w-[150px] opacity-95"
					src={movie.poster_path
						? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
						: placeholder}
					alt="poster"
				/>
				<div class="flex flex-col gap-2">
					<h1 class="lg:text-6xl md:text-5xl sm:text-4xl text-2xl text-white">
						{movie.title} ({movie.release_date.split('-')[0]})
					</h1>
					<div
						class="flex flex-col mt-2 lg:text-xl md:text-lg sm:text-md text-slate-300 sm:gap-3 gap-1"
					>
						<p class="lg:text-3xl md:text-2xl text-xl text-zinc-400 line-clamp-3">
							{movie.tagline}
						</p>
						<p class="lg:text-xl md:text-lg text-md text-zinc-400 line-clamp-3">{movie.overview}</p>
						{#if movie.genres}
							<p class="lg:text-xl md:text-lg text-md text-zinc-400 line-clamp-3">
								Genres: {#each movie.genres as genre, index}
									<span
										>{genre.name}
										{#if index != movie.genres.length - 1}
											,&nbsp
										{/if}
									</span>
								{/each}
							</p>
						{/if}
						<p class="lg:text-xl md:text-lg text-md text-zinc-400 line-clamp-3">
							Released: {movie.release_date}
						</p>
						<p class="lg:text-xl md:text-lg text-md text-zinc-400 line-clamp-3">
							Language: {movie.original_language}
						</p>
						<p class="lg:text-xl md:text-lg text-md text-zinc-400 line-clamp-3">
							Rating: {movie.vote_average.toFixed(2)}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="sm:px-24 px-4 mb-2">
		<h2 class="text-xl sm:text-3xl self-start font-bold text-yellow-400 mb-4">Watch Trailers</h2>
		<div class="sm:flex flex-wrap justify-around gap-y-10 gap-x-2 overflow-x-auto mt-4">
			{#if trailers.length > 0}
				{#each trailers.slice(0, 6) as trailer}
					<div class="w-full sm:w-[80vw] md:w-[30vw] lg:w-[25vw]">
						<iframe
							title={trailer.name}
							width="100%"
							height="100%"
							allowfullscreen
							src={`https://www.youtube.com/embed/${trailer.key}`}
							frameborder="0"
						></iframe>
						<p class="mt-4">{trailer.name}</p>
					</div>
				{/each}
			{:else}
				<p class="text-gray-400">No Trailers Available</p>
			{/if}
		</div>
	</div>
</div>
