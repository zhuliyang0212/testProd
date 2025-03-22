import { defineStore } from 'pinia'

export let useHome = defineStore('homeStore', {
	state: () => ({
		count: 0,
	}),
	actions: {},
	getters: {},
})
