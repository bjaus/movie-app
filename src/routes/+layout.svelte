<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	//import Footer from '$lib/components/Footer.svelte';
</script>

<main class="relative text-white bg-black min-h-screen">
	<Navbar />
	<div class="absolute bg-black top-20 w-full">
		<slot />
	</div>
	<!-- <Footer /> -->
</main>
