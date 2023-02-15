import { Injectable } from '@nestjs/common'

@Injectable()
class CatsService {
	getHello(): string {
		return 'Hello World!'
	}
}

export default CatsService
