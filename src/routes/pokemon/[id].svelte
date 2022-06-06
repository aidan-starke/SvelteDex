<script context="module" lang="ts">
	import type { PokemonDetails } from "@/types";

	export async function load({ params }: { params: { id: string } }) {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
		const poke = await res.json();

		return { props: { poke } };
	}
</script>

<script lang="ts">
	export let poke = {} as PokemonDetails;

	const type = poke.types[0].type.name;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{poke.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{poke.height}</strong> |
		Weight <strong>{poke.weight}</strong>
	</p>
	<img class="card-image" src={poke.sprites["front_default"]} alt={poke.name} />
</div>
