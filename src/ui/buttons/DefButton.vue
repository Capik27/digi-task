<template>
	<button
		@click.prevent
		class="btn"
		:class="{
			btn__primary: color === 'primary',
			btn__mobile: color === 'mobile',
			btn__blue: color === 'blue',
			btn__grey: color === 'grey',
		}"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: "DefButton",
	props: {
		color: String,
	},
};
</script>

<style scoped lang="scss">
@import "@/fonts/PTSans.scss";
.btn {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 12px 16px;
	border: 1px solid;
	background-color: transparent;
	border-radius: 4px;
	height: 38px;

	font-family: PT Sans, sans-serif;
	font-size: 14px;
	line-height: 14px;
	font-weight: 700;

	&__blue {
		border-color: #7397f5;
		color: #7397f5;

		&:hover {
			color: #fff;
			background-color: #7397f5;
		}
	}

	&__grey {
		width: 100%;
		border-color: #aaaaaa;
		color: #aaaaaa;

		&:hover {
			color: #fff;
			background-color: #aaaaaa;
		}
	}

	&__primary {
		border-radius: 8px;
		border-color: #73aff4;
		background-color: #73aff4;
		color: #fff;

		&:hover {
			border-color: #4774e7;
			background-color: #4774e7;
		}
	}

	&__mobile {
		border-radius: 5px;
		border-color: #7397f5;
		background-color: #7397f5;
		color: #fff;

		font-size: 16px;
		line-height: 14px;
		font-weight: 400;

		&:hover {
			border-color: #5c83e6;
			background-color: #5c83e6;
		}
	}
}

//7397F5
</style>
