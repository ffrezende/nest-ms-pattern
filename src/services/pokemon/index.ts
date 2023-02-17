import { BadRequestException, Injectable } from '@nestjs/common'
import { IPokemon, IPokemonResult } from 'src/common/interfaces/pokemon/IPokemon'
import axiosInstance from '../../common/fetcher'

@Injectable()
class PokemonService {
	private BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

	getPokemon = async (id: string): Promise<any> => {
		const response = await axiosInstance.get(`${this.BASE_URL}/${id}`)

		return response.data
	}

	getPokemons = async (): Promise<Array<IPokemon>> => {
		const {
			data: { results },
		} = await axiosInstance.get(`${this.BASE_URL}`)

		return results
	}
}

export default PokemonService
