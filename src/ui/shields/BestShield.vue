<template>
	<span class="bestshield"
		>Хит продаж <img alt="fire" src="@/assets/fire.svg" />
	</span>
</template>

<script>
export default {
	name: "BestShield",
};
</script>

<style scoped lang="scss">
$main: #f2f2f2;
$text: #333333;
$bg: #fff;
.bestshield {
	display: flex;
	gap: 4px;
	align-items: center;
	text-align: center;
	padding: 0px 8px;
	border: 1px solid $main;
	background-color: $bg;
	color: $text;
	border-radius: 4px;
	height: 32px;

	font-family: PT Sans, sans-serif;
	font-size: 14px;
	line-height: 16px;
	font-weight: 400;
}
</style>
