<template>
	<div id="hero" class="grid grid-cols-2">
		<div class="div1 w-full relative h-screen">

			<div class="boxHero text-5xl h-44 leading-snug font-bold">
				Rzeczy niemożliwe<br/>
				robimy od ręki.<br/>
				Na cuda<span class=" bg-gray-400 pl-4 pr-4 ">trzeba poczekać </span>
				<h4 class="podpis pl-14 text-xl font-medium">~ Radosław Dąbrowski</h4>
			</div>

		</div>
		<div class="div2 w-full relative h-screen">

			<div class="boxImg absolute right-1/3 bottom-1/3">
				<img :src="imageUrl" alt="car">
				<div class="boxImgBg"></div>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	 props: {
		imageUrl: {
			type: String,
			default: ''
		}
	},
	mounted() {
		this.boxtart()
	},
	methods: {
		boxtart() {
			const gsap = this.$gsap
			gsap.from('.boxHero', {y: 20, opacity: 0, duration: 0.5, ease: 'power2.inOut'}, '+=.5')
			gsap.from('.podpis', {x:50, opacity:0, duration:0.7, ease: 'power2.inOut'}, '+=.5')
			gsap.from('.boxImg', {bottom: 70, opacity: 0, duration: 1, ease: 'power4.inOut',}, '-=.2')
			gsap.from('.boxImgBg', {x:'-40', top:0, duration:1, ease: 'power4.inOut'}, '-=.3')
		}
	}
}
</script>

<style lang="scss" scoped>
	.boxHero{
		width: 640px;
		position: absolute;
		right: 10%;
		top: 50%;
		transform: translateY(-50%);
	}

	.boxImg{
		transform: translateY(30%);
	
		.boxImgBg{
			z-index: -1;
			width: 100%;
			height: 100%;
			position: absolute;
			left: 40px;
			bottom: 40px;
			background-color: #DB9B9B;
		}
	}
</style>