<template>
	<p>hello</p>
	<div class="grid">
		<img alt="Vue logo" src="./assets/logo.svg" />
		<img alt="Vue logo" src="./assets/search.svg" />
		<img alt="Vue logo" src="./assets/fire.svg" />
		<img alt="Vue logo" src="./assets/item.svg" />
	</div>

	<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
	name: "App",
	// components: {
	//   HelloWorld
	// }
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.grid {
	display: grid;
	gap: 10px;
}
</style>
