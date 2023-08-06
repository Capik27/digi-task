<template>
	<a class="logolink">
		<img alt="logo" src="@/assets/logo.svg" />
		<span>Логотип</span>
	</a>
</template>

<script>
export default {
	name: "LogoLink",
	// props: {
	// 	msg: String,
	// },
};
</script>

<style scoped lang="scss">
$c_bg: #e2efff;
.logolink {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	width: 145px;
	height: 48px;
	padding: 0px 24px;
	border-radius: 10px;
	cursor: pointer;

	&:hover {
		background-color: $c_bg;
	}
}
</style>
