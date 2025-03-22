import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig(() => {
	return {
		plugins: [
			vue(),
			createSvgIconsPlugin({
				iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
				symbolId: 'icon-[name]',
				svgoOptions: {
					plugins: [
						{
							name: 'removeAttrs',
							params: { attrs: ['fill'] },
						},
					],
				},
			}),
			viteMockServe({
				mockPath: 'mock',
				enable: true,
			}),
		],
		server: {
			open: true,
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
			},
		},
	}
})
