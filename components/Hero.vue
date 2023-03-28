<template>
	<div id="hero" class="relative grid grid-cols-1 md:grid-cols-2">
		<div class="div1 w-full relative pl-4 h-96 md:h-screen">

			<div class="boxHero text-2xl sm:text-3xl xl:text-5xl h-44 leading-snug xl:leading-snug font-bold">
				Rzeczy niemożliwe<br/>
				robimy od ręki.<br/>
				Na cuda<span class=" bg-gray-400 pl-4 pr-4 ">trzeba poczekać </span>
				<h4 class="podpis pl-4 sm:pl-8 xl:pl-14 sm:text-lg text-base xl:text-xl font-medium">~ Radosław Dąbrowski</h4>
			</div>

		</div>
		<div class="div2 w-full relative h-96 md:h-screen">

			<div class="boxImg absolute w-64 md:w-auto right-24 md:right-1/3 bottom-2/4 md:bottom-1/3">
				<img :src="imageUrl" alt="car">
				<div class="boxImgBg"></div>
			</div>

		</div>
	</div>
</template>

<script setup>
import { gsap } from 'gsap';


const props = defineProps({
	imageUrl: String,
})

onMounted(() => {
	gsap.from('.boxHero', {y: 20, opacity: 0, duration: 0.5, ease: 'power2.inOut'}, '+=.5')
	gsap.from('.podpis', {x: 50, opacity:0, duration:0.7, ease: 'power2.inOut'}, '+=.5')
	gsap.fromTo('.boxImg', {y: '70%', opacity: 0, duration: 1, ease: 'power4.inOut',},{ y: '30%', opacity: 1 }, '-=.2')
	gsap.from('.boxImgBg', {x:'-40', top:0, duration:1, ease: 'power4.inOut'}, '-=.3')
})
</script>

<style scoped>
	#hero{
		z-index: 0 !important;
	}
	.div2{
		z-index: 0;
	}
	.boxImg{
		transform: translateY(30%);
		z-index: 1;
	}

	.boxImg .boxImgBg{
		z-index: -1;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 40px;
		bottom: 40px;
		background-color: #DB9B9B;
	}

	.boxHero{
		z-index: 4;
		position: relative;
		top: 5rem;
	}


	@media (min-width: 768px) {
		.boxHero{
			z-index: 4;
			width: 500px;
			position: absolute;
			right: unset;
			left: 10%;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	
	@media (min-width: 1280px){
		.boxHero{
			z-index: 4;
			width: 640px;
			position: absolute;
			right: 10%;
			left: unset;
			top: 50%;
			transform: translateY(-50%) translateX(20%) !important;
		}
	}
</style>