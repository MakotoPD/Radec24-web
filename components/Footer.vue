<template>
	<div class="footer bg-gray-800">
		<div class="footerTop flex justify-center items-center py-24">
			<img class="invert w-5/6 md:w-2/6" src="~/assets/logo.png" alt="RADEC24.PL">
		</div>
		<div class="text-center py-8">
			<p class="text-white">
				Copyright © 2022 Radec24. Wszelkie prawa zastrzeżone. | Design & development by <a class="underline" target="_blank" href="https://makoto.vercel.app">Makoto.</a>
			</p>
		</div>
	</div>
</template>


<script>
export default {
	
}
</script>


<style lang="scss" scoped>
	.invert{
		filter: invert(1);
	}

	.footerTop{
		background-image: url('~/assets/Rectangle\ 4.png');
	}
</style>