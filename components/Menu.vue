<template>
	<div class="flex justify-between w-full py-4 px-4">
		<div class="sm:w-36 pr-12 sm:pr-0">
			<img class="logo" src="~/assets/logo.png" alt="RADEC24.PL">
		</div>
		<nav class="nav hidden md:block">
			<NuxtLink to="/" class="px-2">Start</NuxtLink>
			<NuxtLink to="/O-mnie" class="px-2">O mnie</NuxtLink>
			<NuxtLink to="/Kontakt" class="px-2">Kontakt</NuxtLink>
			<NuxtLink to="/Cennik" class="px-2">Cennik</NuxtLink>
			<NuxtLink to="/Referencje" class="px-2">Referencje</NuxtLink>
			<NuxtLink to="/Social-Media" class="px-2">Social Media</NuxtLink>
		</nav>
		<div class="md:hidden">
			<button @click="menu()" class="p-0 m-0">
				<i class='bx bx-menu-alt-right bx-md'></i>
			</button>
		</div>
		<div class="mobileMenu absolute hidden -left-2 top-16 w-full bg-white z-50">
			<div class="py-2 w-full text-center">
				<NuxtLink to="/" class="px-2">Start</NuxtLink>
			</div>
			<div class="py-2 w-full text-center">
				<NuxtLink to="/O-mnie" class="px-2">O mnie</NuxtLink>
			</div>
			<div class="py-2 w-full text-center">
				<NuxtLink to="/Kontakt" class="px-2">Kontakt</NuxtLink>
			</div>
			<div class="py-2 w-full text-center">
				<NuxtLink to="/Cennik" class="px-2">Cennik</NuxtLink>
			</div>
			<div class="py-2 w-full text-center">
				<NuxtLink to="/Referencje" class="px-2">Referencje</NuxtLink>
			</div>
			<div class="py-2 w-full text-center">
				<NuxtLink to="/Social-Media" class="px-2">Social Media</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.animations()
	},
	methods: {
		menu(){
			document.querySelector('.mobileMenu').classList.toggle('hidden')
		},

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