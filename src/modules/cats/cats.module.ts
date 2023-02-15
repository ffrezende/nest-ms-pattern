import { Module } from '@nestjs/common'
import { CatsController } from '../../controllers'
import { CatsService } from '../../services'

@Module({
	imports: [],
	controllers: [CatsController],
	providers: [CatsService],
})
export class CatsModule {}
