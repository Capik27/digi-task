<template>
	<NavBar />
	<main class="main">
		<SideBar />
		<ItemsLayout />
	</main>
</template>

<script>
import NavBar from "@/widgets/NavBar";
import SideBar from "@/widgets/SideBar";
import ItemsLayout from "@/widgets/ItemsLayout";

export default {
	name: "App",
	components: {
		NavBar,
		SideBar,
		ItemsLayout,
	},
};
</script>

<style lang="scss">
@import "@/fonts/Inter.scss";
@import "@/fonts/PTSans.scss";

* {
	margin: 0;
	outline-color: #6d6d6d;
	outline-width: 2px;

	box-sizing: border-box;
	text-align: center;

	font-family: PT Sans, sans-serif;
	font-size: 16px;
	font-weight: 400;

	color: #393939;

	transition: all 0.2s;
}

body {
	display: flex;
	justify-content: center;
	padding: 0px 100px;

	@media (max-width: 1110px) {
		padding-top: 8px;
	}
	@media (max-width: 560px) {
		padding: 8px 16px;
	}
}

#app {
	width: 100%;
	max-width: 1920px;
	margin-bottom: 36px;
}

.main {
	display: flex;
	gap: 36px;
}

::-webkit-scrollbar {
	width: 3px;
	background-color: transparent;
}

::-webkit-scrollbar-thumb {
	background-color: #cbcbcb;
	border: 0.5px solid #cbcbcb;
	border-radius: 10px;
}

::-webkit-scrollbar-track {
	background-color: transparent;
}
</style>
