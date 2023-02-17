import { Injectable } from '@nestjs/common'
import { IPokemon, IPokemonInfo } from 'src/common/interfaces/pokemon/IPokemon'
import axiosInstance from '../../common/fetcher'

@Injectable()
class PokemonService {
	private BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

	getPokemon = async (pokemonName: string): Promise<IPokemonInfo> => {
		const { data } = await axiosInstance.get<IPokemonInfo>(`${this.BASE_URL}/${pokemonName}`)

		return data
	}

	getPokemons = async (offset: string): Promise<Array<IPokemon>> => {
		const limitPerPage = 20
		const offsetPagination = (offset && `?offset=${offset}&limit=${limitPerPage}`) || ''

		const {
			data: { results },
		} = await axiosInstance.get(`${this.BASE_URL}${offsetPagination}`)

		return results
	}
}

export default PokemonService
