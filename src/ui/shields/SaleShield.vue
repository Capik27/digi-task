<template>
	<span class="saleshield"> {{ value }} </span>
</template>

<script>
export default {
	name: "SaleShield",
	props: {
		value: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped lang="scss">
$main: #7397f5;
$text: #fff;
.saleshield {
	text-align: center;
	padding: 8px 10px;
	border: 1px solid $main;
	background-color: $main;
	color: $text;
	border-radius: 4px;
	height: 32px;

	font-family: PT Sans, sans-serif;
	font-size: 14px;
	line-height: 14px;
	font-weight: 700;
}
</style>
