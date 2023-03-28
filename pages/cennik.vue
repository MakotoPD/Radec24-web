<template>
	<div>
		<div class="w-full h-96 flex flex-col items-center justify-center">
			<h1 class="text-2xl sm:text-3xl xl:text-5xl leading-snug xl:leading-snug font-bold">Cennik</h1>
			<p class="text-center mt-3 font-medium text-xl">
				Różnorodność realizowanych prac nie pozwala na <br/>
				zaproponowanie Państwu jednoznacznego, uniwersalnego cennika.
			</p>
		</div>

		<div class="container mx-auto mb-16">
			<div class="my-cooperation flex items-center mb-8">
				<hr class="hr w-16 sm:w-24 mr-4 sm:mr-6">
				<span class="text-2xl">{{ text.title }}</span>
			</div>
			<div class="flex flex-col space-y-4 mb-8">
				<p>{{ text.first }}</p>
				<p>{{ text.second }}</p>
				<p>{{ text.third }}</p>
				<p>{{ text.fourth }}</p>
				<p>{{ text.fifth }}</p>
				<p>{{ text.sixth }}</p>
			</div>
			
			<p class="text-xl mx-8 md:mx-16">{{ text.last }} <strong>{{ text.lastDecorated }}</strong></p>
		</div>
	</div>
</template>

<script setup>
import text from '~/static/json/cennik.json'


useHead({
	title: 'RADEC24 - Cennik',
})
</script>