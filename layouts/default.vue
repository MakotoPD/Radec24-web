<template>
	<div class="scroll-smooth">
		<Menu />
		<slot />
		<Footer/>
	</div>
</template>

<script>
</script>

<style>
*{
  font-family: 'Poppins', sans-serif;
}

body{
	color: #2A2D34;
	background-color: #F5F5F5;
	overflow-y: scroll;
	overflow-x: hidden
}
</style>
