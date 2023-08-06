<template>
	<button class="btn"><slot /></button>
</template>

<script>
export default {
	name: "NavbarButton",
};
</script>

<style scoped lang="scss">
$c_bg: #e2efff;
.btn {
	cursor: pointer;
	text-align: center;
	padding: 8px 24px;
	border: 1px solid #73aff4;
	background-color: transparent;
	border-radius: 8px;
	height: 48px;

	font-family: Inter, sans-serif;
	font-size: 14px;
	font-weight: 500;

	&:hover {
		background-color: $c_bg;
	}
}
</style>
