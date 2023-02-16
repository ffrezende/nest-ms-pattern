import { Controller, Get, Param } from '@nestjs/common'
import { PokemonService } from '../../services'

@Controller('pokemon')
class PokemonController {
	constructor(private readonly pokemonService: PokemonService) {}

	@Get(':id')
	async getPokemon(@Param('id') id: string) {
		return await this.pokemonService.getPokemon(id)
	}

	@Get('names')
	async getPokemons() {
		return await this.pokemonService.getPokemons()
	}
}

export default PokemonController
