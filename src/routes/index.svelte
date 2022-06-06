<script lang="ts">
	import type { PokemonSimple, Pokemon } from "@/types";

	import { pokemon } from "@/stores/pokemart";
	import PokeCard from "@/components/poke-card.svelte";

	let searchTerm = "";
	let filteredPokemon: Pokemon;

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((poke: PokemonSimple) =>
				poke.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<svelte:head>
	<title>SvelteDex | Home</title>
</svelte:head>

<h1 class="text-4xl text-center mb-8 tracking-wide font-montserrat">
	SvelteDex
</h1>

<input
	type="text"
	placeholder="Search Pokemon"
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
/>

<div class="grid gap-4 md:grid-cols-2 grid-cols-1 py-4">
	{#each filteredPokemon as poke}
		<PokeCard {poke} />
	{/each}
</div>
