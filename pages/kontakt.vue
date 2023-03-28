<template>
	<div>
		<div id="hero" class="grid grid-cols-1 md:grid-cols-2 mb-12">
			<div class="div1 w-full relative pl-4 h-96 md:h-screen">

				<div class="boxHero text-2xl sm:text-3xl xl:text-5xl h-44 leading-snug xl:leading-snug font-bold">
					Kontakt
					<h4 class="podpis mt-4 sm:text-lg text-base font-medium max-w-[36rem]">
						<p>RADEC24 REMONTY I WYKOŃCZENIA WNĘTRZ</p>
						<p>RADOSŁAW DĄBROWSKI</p>
					</h4>
					<h4 class="podpis mt-4 sm:text-lg text-base font-medium max-w-[36rem]">
						<p>Ludzisko 56</p>
						<p>88-160 Janikowo</p>
					</h4>

					<h4 class="podpis mt-4 sm:text-lg text-base font-medium max-w-[36rem]">
						<p>tel. 737 444 950</p>
						<p>NIP 5562323231</p>
						<p>REGON 361811180</p>
						<p>E-MAIL radec24@wp.pl</p>
					</h4>

				</div>

			</div>
			<div class="div2 w-full relative h-96 md:h-screen">

				<div class="boxImg absolute w-60 md:w-auto right-24 md:right-1/3 bottom-2/4 md:bottom-1/3">
					<img src="/img/card.png" alt="car">
					<div class="boxImgBg"></div>
				</div>

			</div>
		</div>
	</div>
</template>


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
