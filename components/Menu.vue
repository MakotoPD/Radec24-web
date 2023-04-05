<template>
	<div id="menu" class="relative flex justify-between w-full py-4 px-4">
		<NuxtLink to="/" class="sm:w-36 pr-12 sm:pr-0">
			<nuxt-img loading="lazy" quality="90" class="logo" src="/img/logo/logo.png" alt="RADEC24.PL" />
		</NuxtLink>
		<nav class="nav hidden md:flex flex-row">
			<NuxtLink rel='canonical' to="/" class="px-2 hover:font-semibold">Start</NuxtLink>
			<NuxtLink to="/O-mnie" class="px-2 hover:font-semibold">O mnie</NuxtLink>
			<NuxtLink to="/Kontakt" class="px-2 hover:font-semibold">Kontakt</NuxtLink>
			<NuxtLink to="/Cennik" class="px-2 hover:font-semibold">Cennik</NuxtLink>
			<NuxtLink to="/Referencje" class="px-2 hover:font-semibold">Referencje</NuxtLink>
			<div class="socialMedia relative">
				<p class="px-2">Social Media</p>
				<div class="smList absolute w-[200%] top-5 right-0 px-4 py-6 rounded-xl bg-white shadow-lg">
					<ul class="flex flex-col space-y-2">
						<li class="cursor-pointer hover:font-semibold"><a href="https://www.facebook.com/RADEC24pl/">Facebook - Remonty</a> </li>
						<li class="cursor-pointer hover:font-semibold"><a href="https://www.facebook.com/sufitynapinaneino/">Facebook - Sufity napinane</a> </li>
						<li class="cursor-pointer hover:font-semibold"><a href="https://www.instagram.com/radec24pl/">Instagram</a> </li>
						<li class="cursor-pointer hover:font-semibold"><a href="https://linkedin.com/company/radec24">Linkedin</a> </li>
						<li class="cursor-pointer hover:font-semibold"><a href="https://www.youtube.com/@radec2472">Youtube</a> </li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="md:hidden">
			<button @click="menu()" class="menuBtn p-0 m-0">
				<i class='bx bx-menu-alt-right bx-md'></i>
			</button>
		</div>
		<div class="mobileMenu absolute hidden -left-2 top-16 w-full bg-white z-50">
			<div class="py-2 w-full text-center">
				<NuxtLink to="/" @click="closeMenu()" class="px-2">Start</NuxtLink>
			</div>
			<div class="py-2 w-full text-center">
				<NuxtLink to="/O-mnie" @click="closeMenu()" class="px-2">O mnie</NuxtLink>
			</div>
			<div class="py-2 w-full text-center">
				<NuxtLink to="/Kontakt" @click="closeMenu()" class="px-2">Kontakt</NuxtLink>
			</div>
			<div class="py-2 w-full text-center">
				<NuxtLink to="/Cennik" @click="closeMenu()" class="px-2">Cennik</NuxtLink>
			</div>
			<div class="py-2 w-full text-center">
				<NuxtLink to="/Referencje" @click="closeMenu()" class="px-2">Referencje</NuxtLink>
			</div>
			<div @click="socialmedia()" class="py-2 w-full text-center">
				<p class="px-2">Social Media <i class='bx bx-chevron-down'></i></p>
			</div>
			<div class="socials hidden py-4 flex flex-col items-center space-y-2">
				<NuxtLink class="bg-gray-300/70 w-3/4 text-center" to="https://www.facebook.com/RADEC24pl/" target="_blank">
					Facebook - Remonty
				</NuxtLink>
				<NuxtLink class="bg-gray-300/70 w-3/4 text-center" to="https://www.facebook.com/sufitynapinaneino/" target="_blank">
					Facebook - Sufity napinane
				</NuxtLink>
				<NuxtLink class="bg-gray-300/70 w-3/4 text-center" to="https://www.instagram.com/radec24pl/" target="_blank">
					Instagram
				</NuxtLink>
				<NuxtLink class="bg-gray-300/70 w-3/4 text-center" to="https://linkedin.com/company/radec24" target="_blank">
					Linkedin
				</NuxtLink>
				<NuxtLink class="bg-gray-300/70 w-3/4 text-center" to="https://www.youtube.com/@radec2472" target="_blank">
					Youtube
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup>
import { gsap } from 'gsap';

onMounted(()=> {

	gsap.from('.logo', {y: -30, opacity: 0, duration: 1, ease: 'power4.inOut',})
	gsap.from('.nav', {x: 30, opacity: 0, duration: 1, ease: 'power4.inOut'}, '-=0.5')

	
})
let menu = () => {
	document.querySelector('.mobileMenu').classList.toggle('hidden')
}

let closeMenu = () => {
	document.querySelector('.mobileMenu').classList.add('hidden')
}

let socialmedia = () => {
	document.querySelector('.socials').classList.toggle('hidden')
}
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