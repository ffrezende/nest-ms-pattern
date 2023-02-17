import { BadRequestException } from '@nestjs/common'
import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		const { message } = error
		throw new BadRequestException(message)
	},
)

export default axiosInstance
