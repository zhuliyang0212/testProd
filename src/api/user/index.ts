import request from '@/utils/request'
import type {
	LoginForm,
	LoginResponse,
	UserResponseData,
} from './type'

enum API {
	LOGIN_URL = '/user/login',
	USERINFO_URL = '/user/info',
}

export function reqLogin(data: LoginForm) {
	return request<any, LoginResponse>({
		url: API.LOGIN_URL,
		method: 'post',
		data,
	})
}

export function getUserInfo() {
	return request<any, UserResponseData>({
		url: API.USERINFO_URL,
		method: 'get',
	})
}
