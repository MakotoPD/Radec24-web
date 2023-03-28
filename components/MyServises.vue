<template>
	<div>
		<div class="container mx-auto pb-24">
			<div class="my-services flex items-center mb-8">
				<hr class="hr w-16 sm:w-24 mr-4 sm:mr-6">
				<span class="text-2xl">Moje usługi</span>
			</div>
			<div class="w-full grid grid-cols-1 lg:grid-cols-2">
				<div class="imageContainer">
					<div class="box relative w-10/12 sm:w-auto left-4 sm:-left-12 lg:left-0 px-8 py-6 bg-red-300 font-medium z-50">
						<p>
							Oferuję profesjonalne usługi budowlane przeznaczone dla klientów indywidualnych
							oraz wszelkich inwestorów nastawionych na najwyższą jakość wykończenia.
						</p>
					</div>
					<div class="image relative w-10/12 sm:w-auto left-10 lg:left-12 -top-16" style="z-index:-1;">
						<img class="w-full" src="/img/MyServises.png" alt="x">
					</div>
				</div>
				<div class="ofertaContainer lg:flex justify-center w-full h-full lg:pt-8">

					<div class="text-left lg:w-7/12">
						<h4 class="oferta pl-4 sm:pl-0 mb-6 font-bold sm:font-semibold">
							Oferuję usługi takie jak:
						</h4>
						<ul class="lg:text-sm xl:text-base list list-disc list-outside leading-loose pl-5">
							<li>
								sucha zabudowa (ścianki, sufity podwieszane z gk, amstrong, izolacja oraz zabudowa poddasza)
							</li>
							<li>
								gładzie gipsowe,
							</li>
							<li>
								malowanie,
							</li>
							<li>
								dekoracyjne panele 3D, cegiełki, beton architektoniczny,  tynki dekoracyjne itp.
							</li>
							<li>
								elewacje, fasady,
							</li>
							<li>
								prace hydrauliczne,
							</li>
							<li>
								prace elektryczne,
							</li>
							<li>
								układanie glazury, terakoty, gresu, wszelkie montaże łazienkowe, instalacje maty grzejnej, impregnację płytek, montaż luster, uszczelnienia.
							</li>
							<li>
								transport powierzonego towaru na budowę.
							</li>
						</ul>
					</div>
 
				</div>
			</div>
			<div class="dystrybucja py-8 px-4 sm:px-0 lg:pl-12 lg:w-4/5">
				<p>
					Jestem dystrybutorem oraz montażystą Sufitów Napinanych.
					Jest to sufit wykonany z foli która za pomocą wysokiej temperatury powietrza zostaje napięta w specjalne profile.
					Efektem tego jest piękny sufit przypominający taflę szkła. Możliwości sufitu są wielkie a ogranicza nas tylko wyobraźnia.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

onMounted(()=> {

	gsap.registerPlugin(ScrollTrigger); 

	gsap.from('.my-services', {
		x: '-50px',
		opacity: 0,
		duration: .2,
		ease: 'Power1.easeInOut',
		scrollTrigger: {
			trigger: '.container',
			start: "top center"
		}
	})


	gsap.from('.box', {
		x: '20px',
		opacity: 0,
		duration: .2,
		ease: 'Power1.easeInOut',
		scrollTrigger: {
			trigger: '.image',
			start: "top center"
		}
	})

	gsap.from('.image', {
		y: '-20px',
		x: '-40px',
		opacity: 0,
		duration: .5,
		ease: 'Power1.easeInOut',
		scrollTrigger: {
			trigger: '.image',
			start: "center center"
		}
	})

	gsap.from('.oferta', {
		y: '20px',
		opacity: 0,
		duration: .5,
		ease: 'Power1.easeInOut',
		scrollTrigger: {
			trigger: '.ofertaContainer',
			start: "top center"
		}
	})

	gsap.from('.list', {
		x: '20px',
		opacity: 0,
		duration: .5,
		ease: 'Power1.easeInOut',
		scrollTrigger: {
			trigger: '.oferta',
			start: "bottom center"
		}
	})

	gsap.from('.dystrybucja', {
		x: '20px',
		opacity: 0,
		duration: .5,
		ease: 'Power1.easeInOut',
		scrollTrigger: {
			trigger: '.list',
			start: "bottom center"
		}
	})

})

</script>


<style>
hr.hr{
	border: 1px solid #2A2D34;
}
</style>