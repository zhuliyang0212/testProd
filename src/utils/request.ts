import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_API,
	timeout: 10000,
})

// 请求拦截器
request.interceptors.request.use(config => {
	return config
})

// 响应拦截器
request.interceptors.response.use(
	response => {
		return response.data
	},
	error => {
		let message = ''
		let status = error.response.status
		switch (status) {
			case 401:
				message = 'token过期'
				break
			case 403:
				message = '无权访问'
				break
			case 404:
				message = '请求地址错误'
				break
			case 500:
				message = '服务器错误'
				break
			default:
				message = '网络错误'
		}
		ElMessage({
			type: 'error',
			message,
		})
		return Promise.reject(error)
	},
)

export default request
