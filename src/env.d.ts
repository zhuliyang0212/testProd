import { ComponentCustomProperties } from 'vue'

declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$say: () => void // 声明全局方法的类型
	}
}
