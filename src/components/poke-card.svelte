<script lang="ts">
	import type { PokemonSimple } from "@/types";

	import { fade } from "svelte/transition";

	export let poke = {} as PokemonSimple;
</script>

<a
	href={`pokemon/${poke.id}`}
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center duration-300"
	transition:fade
>
	<img class="h-40 w-40" src={poke.image} alt={poke.name} />
	<h2 class="uppercase text-xl">{poke.id}. {poke.name}</h2>
</a>
