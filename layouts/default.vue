<template>
	<div>
		<Menu />
		<Nuxt />
	</div>
</template>

<script>

import Menu from '~/components/Menu.vue';
export default{
	components: { Menu }
}
</script>

<style lang="scss">
*{
  font-family: 'Poppins', sans-serif;
}

body{
	color: #2A2D34;
}
</style>
