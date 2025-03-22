<template>
	<div>
		<h1>Home</h1>
		<div>{{ count }}</div>
		<svg-icon name="bridge" @clickSvg="handleClick" color="red" />
	</div>
</template>

<script setup lang="ts">
import { reqLogin } from '@/api/user'
import { ref } from 'vue'
let count = ref(0)
function handleClick(msg: string) {
	console.log('click', msg)
}
reqLogin({
	username: 'admin',
	password: 'abcd1234!',
}).then(res => {
	console.log(res.data.token, 'login信息')
})
</script>

<style scoped lang="scss"></style>
