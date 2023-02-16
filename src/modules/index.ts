import { Module } from '@nestjs/common'

import { CatsModule } from '../modules/cats/cats.module'
import { PokemonModule } from '../modules/pokemon'

@Module({
	imports: [CatsModule, PokemonModule],
})
class MainModule {}

export default MainModule
