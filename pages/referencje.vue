<template>
	<div>
		<div class="w-full h-96 flex flex-col items-center justify-center">
			<h1 class="text-2xl sm:text-3xl xl:text-5xl leading-snug xl:leading-snug font-bold">Referencje</h1>
		</div>

		<div class="container mx-auto mb-16">
			<div class="flex flex-wrap flex-col items-center md:items-start md:flex-row space-x-4 space-y-4">
				<a v-for="comp in refs" :href="comp.src" target="_blank" class="w-8/12 md:w-64">
					<img class="mx-auto md:w-64" :src="comp.src" :alt="comp.alt">
				</a>	
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import images from '~/static/json/references.json'

let refs = images['data']
</script>