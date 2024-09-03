<script lang="ts">
	import { browser } from '$app/environment';
	import Carousel from 'svelte-carousel';

	let arr = [1, 2, 3, 4, 5];
</script>

<h1>Hello</h1>
{#if browser}
	<Carousel dots={false}>
		{#each arr as item}
			<div>{item}</div>
		{/each}
	</Carousel>
{/if}
