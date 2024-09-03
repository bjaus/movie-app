<script lang="ts">
	import type { PageServerData } from './$types';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	// @ts-expect-error: svelte-carousel doesn't provide type declarations module.
	import Carousel from 'svelte-carousel';
	import Card from '$lib/components/Card.svelte';

	export let data: PageServerData;
	let upcoming = data.upcoming;
	let topRated = data.topRated;

	onMount(() => {
		updateParticlesToShow();
	});

	let particlesToShow = 4;

	function updateParticlesToShow() {
		const width = window.innerWidth;
		if (width >= 1024) {
			particlesToShow = 4;
		} else if (width >= 768) {
			particlesToShow = 3;
		} else {
			particlesToShow = 2;
		}
	}

	let topCarousel: Carousel;
	function handleNextTopCarousel() {
		topCarousel.goToNext();
	}
	function handlePrevTopCarousel() {
		topCarousel.goToPrev();
	}

	let bottomCarousel: Carousel;
	function handleNextBottomCarousel() {
		bottomCarousel.goToNext();
	}
	function handlePrevBottomCarousel() {
		bottomCarousel.goToPrev();
	}
</script>

{#if browser}
	<div class="w-full justify-center bg-black items-center gap-8 text-white">
		<div class="relative w-full">
			<Carousel bind:this={topCarousel} autoplay={true} autoplayDuration={5000} dots={false}>
				<div
					slot="prev"
					on:click={handlePrevTopCarousel}
					role="button"
					tabindex="0"
					on:keydown={(event) => {
						if (event.key === 'Enter' || event.key === ' ') {
							handlePrevTopCarousel();
						}
					}}
				>
					<div
						class="absolute z-40 cursor-pointer bg-white left-4 rounded-full p-2 top-1/3 md:top-1/4 lg:top-1/3 transform -translate-y-1/2"
					>
						<img
							class="w-4 h-4 md:h-5 lg:w-7 lg:h-7"
							src="https://img.icons8.com/material-rounded/24/chevron-left.png"
							alt="chevron-left"
						/>
					</div>
				</div>
				<div
					slot="next"
					on:click={handleNextTopCarousel}
					role="button"
					tabindex="0"
					on:keydown={(event) => {
						if (event.key === 'Enter' || event.key === ' ') {
							handleNextTopCarousel();
						}
					}}
				>
					<div
						class="absolute z-40 cursor-pointer bg-white right-4 rounded-full p-2 top-1/3 md:top-1/4 lg:top-1/3 transform -translate-y-1/2"
					>
						<img
							class="w-4 h-4 md:h-5 lg:w-7 lg:h-7"
							src="https://img.icons8.com/material-rounded/24/chevron-right.png"
							alt="chevron-right"
						/>
					</div>
				</div>
				{#each upcoming as movie}
					<div class="relative w-full h-[70vh] cursor-pointer">
						<img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="backdrop" />
						<div
							class="absolute inset-0 bg-gradient-to-t from-black to to-transparent rounded"
						></div>
						<div
							class="absolute sm:bottom-0 bottom-[6rem] left-0 sm:flex gap-4 items-end px-4 mt-40"
						>
							<img
								class="md:w-[250px] sm:w-[250px] w-[150px] opacity-95"
								src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
								alt="poster"
							/>
							<div class="flex flex-col gap-2">
								<h1 class="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white mx-w-[450px]">
									{movie.title}
								</h1>
								<p class="lg:text-xl md:text-lg text-zinc-400 line-clamp-3">{movie.overview}</p>
								<p class="lg:text-xl md:text-lg text-zinc-400 line-clamp-3">
									Votes: {movie.vote_count}
								</p>
								<p class="lg:text-xl md:text-lg text-zinc-400 line-clamp-3">
									Rating: {movie.vote_average}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</Carousel>
		</div>

		<div class="relative flex items-center mt-24">
			<div class="w-full">
				<Carousel bind:this={bottomCarousel} dots={false} {particlesToShow}>
					<div
						slot="prev"
						on:click={handlePrevBottomCarousel}
						role="button"
						tabindex="0"
						on:keydown={(event) => {
							if (event.key === 'Enter' || event.key === ' ') {
								handlePrevBottomCarousel();
							}
						}}
					>
						<div
							class="absolute z-40 cursor-pointer bg-white left-4 rounded-full p-2 top-1/3 md:top-1/4 lg:top-1/3 transform -translate-y-1/2"
						>
							<img
								class="w-4 h-4 md:h-5 lg:w-7 lg:h-7"
								src="https://img.icons8.com/material-rounded/24/chevron-left.png"
								alt="chevron-left"
							/>
						</div>
					</div>
					<div
						slot="next"
						on:click={handleNextBottomCarousel}
						role="button"
						tabindex="0"
						on:keydown={(event) => {
							if (event.key === 'Enter' || event.key === ' ') {
								handleNextBottomCarousel();
							}
						}}
					>
						<div
							class="absolute z-40 cursor-pointer bg-white right-4 rounded-full p-2 top-1/3 md:top-1/4 lg:top-1/3 transform -translate-y-1/2"
						>
							<img
								class="w-4 h-4 md:h-5 lg:w-7 lg:h-7"
								src="https://img.icons8.com/material-rounded/24/chevron-right.png"
								alt="chevron-right"
							/>
						</div>
					</div>
					{#each upcoming.slice(1) as movie}
						<div class="px-2 cursor-pointer relative">
							<h1 class="absolute z-40 bottom-0 font-extrabold">{movie.title}</h1>
							<div
								class="absolute z-30 inset-0 bg-gradient-to-t opacity-65 from-black to-transparent rounded"
							></div>
							<img
								class="w-full cursor-pointer transition duration-500 ease-in-out transform hover:opacity-100"
								src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
								alt="backdrop"
							/>
						</div>
					{/each}
				</Carousel>
			</div>
		</div>

		<div class="pt-20 sm:px-10 mt-9">
			<div class="p-4 flex flex-col items-center gap-6">
				<h2 class="text-3xl self-start font-bold text-yellow-400 mb-4">Top Rated Movies</h2>
				<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
					{#each topRated as movie}
						<Card {movie} />
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}
