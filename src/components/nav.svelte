<script>
	import { fade } from "svelte/transition";
</script>

<nav class="flex justify-center w-full mb-8">
	<a
		class="uppercase mx-2 text-lg px-2 py-0.5 rounded-md hover:bg-gray-100 duration-300 drop-shadow-md"
		href="/"
		transition:fade>Home</a
	>
	<a
		class="uppercase mx-2 text-lg px-2 py-0.5 rounded-md hover:bg-gray-100 duration-300 drop-shadow-md"
		href="/about"
		transition:fade>About</a
	>
</nav>
