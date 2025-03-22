// test.ts

import { MockMethod, MockConfig } from 'vite-plugin-mock'

function createUserList() {
	return [
		{
			userId: 1,
			username: 'admin',
			avator: '',
			password: 'abcd1234!',
			desc: '平台管理员',
			roles: ['平台管理员'],
			buttons: ['cuser.detail'],
			routes: ['home'],
			token: 'Admin Token',
		},
		{
			userId: 2,
			username: 'system',
			password: 'system',
			desc: '系统管理员',
			roles: ['系统管理员'],
			buttons: ['cuser.detail'],
			routes: ['系统管理员'],
			token: 'Test Token',
		},
	]
}

export default [
	{
		url: '/dev-api/user/login',
		method: 'post',
		response: ({ body }) => {
			let { username, password } = body
			const checkUser = createUserList().find(v => {
				return v.username === username && v.password === password
			})
			if (!checkUser) {
				return {
					code: 201,
					data: {
						message: '用户名或密码不正确',
					},
				}
			}
			const { token } = checkUser
			return {
				code: 200,
				data: {
					message: '登录成功',
					token,
				},
			}
		},
	},
	{
		url: '/dev-api/user/info',
		method: 'get',
		response: request => {
			const token = request.headers.token
			const checkUser = createUserList().find(v => v.token === token)
			if (checkUser) {
				return {
					code: 201,
					data: {
						message: '获取用户信息失败',
					},
				}
			}
			return {
				code: 200,
				data: checkUser,
			}
		},
	},
	{
		url: '/dev-api/text',
		method: 'post',
		rawResponse: async (req, res) => {
			let reqbody = ''
			await new Promise(resolve => {
				req.on('data', chunk => {
					reqbody += chunk
				})
				req.on('end', () => resolve(undefined))
			})
			res.setHeader('Content-Type', 'text/plain')
			res.statusCode = 200
			res.end(`hello, ${reqbody}`)
		},
	},
] as MockMethod[]
