export interface PokemonData {
	name: string;
	image: string;
}

export interface PokemonSimple {
	name: string;
	id: number;
	image: string;
}

export type Pokemon = Array<PokemonSimple>;

export interface PokemonDetails {
	types: { type: { name: string } }[];
	name: string;
	height: string;
	weight: string;
	sprites: {
		front_default: string;
		back_default: string;
	};
}
