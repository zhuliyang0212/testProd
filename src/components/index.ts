import type { App, Component } from 'vue'

import SvgIcon from './SvgIcon.vue'

const allCom: { [key: string]: Component } = {
	SvgIcon,
}

export default {
	install(app: App) {
		for (let k in allCom) {
			app.component(k, allCom[k])
		}
	},
}
