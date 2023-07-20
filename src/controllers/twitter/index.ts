import { Controller, Get, Param } from '@nestjs/common'
import { TwitterService } from '../../services'

@Controller('twitter')
class TwitterController {
	constructor(private readonly twitterService: TwitterService) {}

	@Get(':id')
	async getUserTweets(@Param('id') id: string) {
		return await this.twitterService.getUserTweets(id)
	}
}

export default TwitterController
