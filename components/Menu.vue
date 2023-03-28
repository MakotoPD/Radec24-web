<template>
	<div id="menu" class="relative flex justify-between w-full py-4 px-4">
		<div class="sm:w-36 pr-12 sm:pr-0">
			<img class="logo" src="/img/logo/logo.png" alt="RADEC24.PL">
		</div>
		<nav class="nav hidden md:flex flex-row">
			<NuxtLink to="/" class="px-2 hover:font-semibold">Start</NuxtLink>
			<NuxtLink to="/O-mnie" class="px-2 hover:font-semibold">O mnie</NuxtLink>
			<NuxtLink to="/Kontakt" class="px-2 hover:font-semibold">Kontakt</NuxtLink>
			<NuxtLink to="/Cennik" class="px-2 hover:font-semibold">Cennik</NuxtLink>
			<NuxtLink to="/Referencje" class="px-2 hover:font-semibold">Referencje</NuxtLink>
			<div class="socialMedia relative">
				<p class="px-2">Social Media</p>
				<div class="smList absolute w-[200%] top-5 right-0 px-4 py-6 rounded-xl bg-white shadow-lg">
					<ul class="flex flex-col space-y-2">
						<li class="cursor-pointer hover:font-semibold">Remonty i wykończenia wnętrz</li>
						<li class="cursor-pointer hover:font-semibold">Sufity napinane</li>
						<li class="cursor-pointer hover:font-semibold">Instagram</li>
						<li class="cursor-pointer hover:font-semibold">Youtube</li>
					</ul>
				</div>
			</div>
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

<script setup>
import { gsap } from 'gsap';

onMounted(()=> {
	let menu = () => {
		document.querySelector('.mobileMenu').classList.toggle('hidden')
	}

	gsap.from('.logo', {y: -30, opacity: 0, duration: 1, ease: 'power4.inOut',})
	gsap.from('.nav', {x: 30, opacity: 0, duration: 1, ease: 'power4.inOut'}, '-=0.5')
})


</script>

<style>
	#menu{
		z-index: 99;
	}

	.nuxt-link-exact-active{
		color: red;
	}
	.smList{
		z-index: 99;
		display: none;
	}
	.socialMedia:hover .smList{
		display: block
	}
</style>