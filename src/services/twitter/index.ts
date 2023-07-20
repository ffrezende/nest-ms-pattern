import { Injectable } from '@nestjs/common'
import { IPokemon, IPokemonInfo } from 'src/common/interfaces/pokemon/IPokemon'
import axiosInstance from '../../common/fetcher'

@Injectable()
class TwitterService {
	private BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

	getUserTweets = async (twitterId: string): Promise<IPokemonInfo> => {
		const { data } = await axiosInstance.get<IPokemonInfo>(`${this.BASE_URL}/${twitterId}`)

		return data
	}
}

export default TwitterService
