import { Controller, Get } from '@nestjs/common'
import { CatsService } from '../../services'

@Controller('cats')
class CatsController {
	constructor(private readonly appService: CatsService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello()
	}
}

export default CatsController
