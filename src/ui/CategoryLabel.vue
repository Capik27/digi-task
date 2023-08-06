<template>
	<div
		class="category category__container"
		:class="{ category__checked: state, category__p32: padding }"
		@click.prevent="onClick"
	>
		<div hidden>
			<input class="category__input" type="checkbox" />
		</div>

		<label class="category__label">{{ label || "Название категории" }}</label>
		<span class="category__count" v-if="count">{{ count || "" }}</span>
	</div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
	name: "CategoryLabel",
	props: {
		checked: Boolean,
		label: String,
		count: String,
		padding: Boolean,
		onCheck: Function,
	},
	setup(props) {
		const state = ref(props.checked);

		const onClick = () => {
			state.value = !state.value;
		};
		const reset = () => {
			state.value = false;
		};

		return { state, onClick, reset };
	},
});
</script>

<style scoped lang="scss">
$size_h: 30px;
$c_hov: #7397f5;
$c_text: #333333;
$c_count: #aaaaaa;
$c_bg: #e2efff;
.category {
	font-family: PT Sans, sans-serif;
	font-weight: 400;

	&:hover {
		.category__label {
			color: $c_hov;
		}
	}

	&__container {
		width: 100%;
		height: $size_h;
		border-radius: 5px;
		background-color: transparent;
		cursor: pointer;
		padding-right: 16px;
		padding-left: 8px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__checked {
		color: $c_text;
		background-color: $c_bg;
	}

	&__label {
		cursor: pointer;
		font-size: 14px;
		line-height: 16px;
		color: $c_text;
	}
	&__count {
		color: $c_count;
		font-size: 12px;
		line-height: 14px;
	}
	&__input {
		visibility: hidden;
	}

	&__p32 {
		padding-left: 32px;
	}
}
</style>
