<template>
	<svg :width="width" :height="height" @click="clickSvg">
		<use :href="`#${prefix}-${name}`" :fill="color"></use>
	</svg>
</template>

<script setup lang="ts">
defineProps({
	width: {
		type: String,
		default: '20px',
	},
	height: {
		type: String,
		default: '20px',
	},
	prefix: {
		type: String,
		default: 'icon',
	},
	name: {
		type: String,
		default: '',
	},
	color: {
		type: String,
		default: '#181818',
	},
})
const emit = defineEmits<{
	(e: 'clickSvg', message: String): void
}>()
function clickSvg() {
	emit('clickSvg', '点击了svg')
}
</script>

<style scoped lang="scss"></style>
