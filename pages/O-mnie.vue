<template>
	<div>
		<div id="hero" class="grid grid-cols-1 md:grid-cols-2 mb-12">
			<div class="div1 w-full relative pl-4 h-96 md:h-screen">

				<div class="boxHero text-2xl sm:text-3xl xl:text-5xl h-44 leading-snug xl:leading-snug font-bold">
					O mnie
					<h4 class="podpis mt-4 sm:text-lg text-base font-medium max-w-[36rem]">
						{{ about.desc }}
					</h4>
				</div>

			</div>
			<div class="div2 w-full relative h-96 md:h-screen">

				<div class="boxImg absolute w-60 md:w-auto right-24 md:right-1/3 bottom-2/4 md:bottom-1/3">
					<img src="/img/car_omnie.png" alt="car">
					<div class="boxImgBg"></div>
					<div class="checkedCompany">
						<img src="/img/sprawdzona-firma.png" alt="Sprawdzona firma">
					</div>
				</div>

			</div>
		</div>
		<div class="mb-16">
			<div class="container mx-auto flex flex-col space-y-6">
				<p>{{ about.first }}</p>
				<p>{{ about.second }}</p>
				<p>{{ about.third }}</p>
				<p>{{ about.fourth }}</p>
				<ul class="list-disc list-inside">
					<li v-for="li in about.list">{{ li.text }}</li>
				</ul>
				<p>{{ about.fifth }}</p>
				<p>{{ about.sixth }}</p>

			</div>
		</div>
	</div>
</template>

<script setup>
import about from '~/static/json/about.json'

</script>

<style scoped>
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
	background-color: #2c2c2c;
}

.boxImg .checkedCompany{
	z-index: 1;
	padding-left: 20px;
	padding-right: 20px;
	padding-top: 10px;
	padding-bottom: 10px;
	width: auto;
	height: auto;
	position: absolute;
	left: -40px;
	bottom: -40px;
	background-color: #9b9b9b;
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
