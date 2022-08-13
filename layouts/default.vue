<template>
	<div>
		<Menu />
		<Nuxt />
		<Footer/>
	</div>
</template>

<script>

import Menu from '~/components/Menu.vue';
import Footer from '~/components/Footer.vue';
export default{
	components: { Menu, Footer }
}
</script>

<style lang="scss">
*{
  font-family: 'Poppins', sans-serif;
}

body{
	color: #2A2D34;
	background-color: #F5F5F5;
}
</style>
