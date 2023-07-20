import { Module } from '@nestjs/common'
import { TwitterController } from '../../controllers'
import { TwitterService } from '../../services'

@Module({
	imports: [],
	controllers: [TwitterController],
	providers: [TwitterService],
})
export class TwitterModule {}
