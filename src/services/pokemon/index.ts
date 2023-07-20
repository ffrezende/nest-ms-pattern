import { Injectable } from '@nestjs/common'
import { IPokemon, IPokemonInfo } from 'src/common/interfaces/pokemon/IPokemon'
import axiosInstance from '../../common/fetcher'
import { BASE_URL_POKEMON } from 'src/common/constants'

@Injectable()
class PokemonService {
	getPokemon = async (pokemonName: string): Promise<IPokemonInfo> => {
		const { data } = await axiosInstance.get<IPokemonInfo>(`${BASE_URL_POKEMON}/${pokemonName}`)

		return data
	}

	getPokemons = async (offset: string): Promise<Array<IPokemon>> => {
		const limitPerPage = 20
		const offsetPagination = (offset && `?offset=${offset}&limit=${limitPerPage}`) || ''

		const {
			data: { results },
		} = await axiosInstance.get(`${BASE_URL_POKEMON}${offsetPagination}`)

		return results
	}
}

export default PokemonService
