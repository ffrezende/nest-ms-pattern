import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common'
import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		error

		const { message } = error
		throw new HttpException(
			{
				error: message,
			},
			HttpStatus.NOT_FOUND,
		)
	},
)

export default axiosInstance
