<template>
	<div>
		<div class="coopContainer container mx-auto pb-24">
			<div class="my-cooperation flex items-center mb-8">
				<hr class="hr w-16 sm:w-24 mr-4 sm:mr-6">
				<span class="text-2xl">Współpracuję z</span>
			</div>
			<div class="coopImages flex flex-wrap justify-center items-center">
				<NuxtLink to="http://wim-chb.pl/" target="_blank" class=" w-1/3 sm:w-2/12 px-4">
					<img src="~/assets/companies/wim.png" alt="company">
				</NuxtLink>
				<NuxtLink to="https://knauf.pl/" target="_blank" class=" w-1/3 sm:w-2/12 px-4">
					<img src="~/assets/companies/knauf.png" alt="company">
				</NuxtLink>
				<NuxtLink to="https://www.atlas.com.pl/" target="_blank" class=" w-1/3 sm:w-2/12 px-4">
					<img src="~/assets/companies/atlas.png" alt="company">
				</NuxtLink>
				<NuxtLink to="https://www.rigips.pl/" target="_blank" class=" w-1/3 sm:w-2/12 px-4">
					<img src="~/assets/companies/rigips.png" alt="company">
				</NuxtLink>
				<NuxtLink to="https://www.kerakoll.com/pl/" target="_blank" class=" w-1/3 sm:w-2/12 px-4">
					<img src="~/assets/companies/kerakoll.png" alt="company">
				</NuxtLink>

			</div>
		</div>
	</div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

onMounted(()=>{
	gsap.registerPlugin(ScrollTrigger)
	
	gsap.from('.my-cooperation', {
		x: '-50px',
		opacity: 0,
		duration: .2,
		ease: 'Power1.easeInOut',
		scrollTrigger: {
			trigger: '.coopContainer',
			start: "top center"
		}
	})

	gsap.from('.coopImages', {
		y: '50px',
		opacity: 0,
		duration: .7,
		ease: 'Power1.easeInOut',
		scrollTrigger: {
			trigger: '.coopContainer',
			start: "top center"
		}
	})
})

</script>

<style>
hr.hr{
	border: 1px solid #2A2D34;
}
</style>