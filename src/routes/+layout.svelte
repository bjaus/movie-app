<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main class="relative text-white bg-black min-h-screen">
	<Navbar></Navbar>
	<slot />
</main>
