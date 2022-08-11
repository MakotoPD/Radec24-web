<template>
	<div class="flex justify-between py-4 px-4">
		<div class="w-36">
			<img class="logo" src="~/assets/logo.png" alt="RADEC24.PL">
		</div>
		<nav class="nav">
			<NuxtLink to="/" class="px-2">Start</NuxtLink>
			<NuxtLink to="/O-mnie" class="px-2">O mnie</NuxtLink>
			<NuxtLink to="/Kontakt" class="px-2">Kontakt</NuxtLink>
			<NuxtLink to="/Cennik" class="px-2">Cennik</NuxtLink>
			<NuxtLink to="/Referencje" class="px-2">Referencje</NuxtLink>
			<NuxtLink to="/Social-Media" class="px-2">Social Media</NuxtLink>
		</nav>
	</div>
</template>

<script>
export default {
	mounted() {
		this.animations()
	},
	methods: {
		animations() {
			const gsap = this.$gsap;
			gsap.from('.logo', {y: -30, opacity: 0, duration: 1, ease: 'power4.inOut',})
			gsap.from('.nav', {x: 30, opacity: 0, duration: 1, ease: 'power4.inOut'}, '-=0.5')
		}
	}
}

</script>

<style lang="scss">
	.nuxt-link-exact-active{
		color: red;
	}
</style>