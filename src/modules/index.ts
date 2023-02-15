import { Module } from '@nestjs/common'

import { CatsModule } from '../modules/cats/cats.module'

@Module({
	imports: [CatsModule],
})
class MainModule {}

export default MainModule
