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
