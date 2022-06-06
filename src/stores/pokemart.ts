import type { Pokemon, PokemonData } from "@/types";

import { writable } from "svelte/store";

export const pokemon = writable<Pokemon>([]);

const fetchPokemon = async (): Promise<void> => {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
	const data = await res.json();

	const _pokemon = data.results.map((data: PokemonData, index: number) => ({
		name: data.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${
			index + 1
		}.png`,
	}));
	pokemon.set(_pokemon);
};

void fetchPokemon();
