export interface IPokemon {
	name: string
	url: string
}

export interface IPokemonResult {
	count: number
	next: string
	previous: any
	results: Array<IPokemon>
}

export interface IPokemonAbility {
	ability: IPokemon
	is_hidden: boolean
	slot: number
}

export interface IPokemonGameIndice {
	game_index: number
	version: IPokemon
}

export interface IPokemonInfo {
	id: number
	name: string
	order: number
	species: IPokemon
	location_area_encounters: string
	abilities: Array<IPokemonAbility>
	forms: IPokemon
	game_indices: Array<IPokemonGameIndice>
	base_experience: number
	height: number
	weight: number
}
