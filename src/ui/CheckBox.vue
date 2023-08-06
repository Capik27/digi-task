<template>
	<div :class="{ checkbox__container: label }">
		<div class="checkbox__label_wrapper">
			<div
				class="checkbox"
				:class="{ checkbox__checked: state }"
				@click.prevent="onClick"
			>
				<input class="checkbox__input" type="checkbox" />
			</div>
			<label class="checkbox__label" v-if="label">{{ label }}</label>
		</div>
		<span class="checkbox__count" v-if="count">{{ count }}</span>
	</div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
export default defineComponent({
	name: "CheckBox",
	props: {
		checked: Boolean,
		label: String,
		count: String,
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

		watch([state], (next) => {
			if (!props.onCheck) return;
			if (next[0]) {
				props.onCheck(1);
			} else {
				props.onCheck(-1);
			}
		});

		onMounted(() => {
			if (props.onCheck && props.checked) {
				props.onCheck(1);
			}
		});

		return { state, onClick, reset };
	},
});
</script>

<style scoped lang="scss">
$size: 20px;
$c_def: #d5d5d5;
$c_hov: #7397f5;
$c_text: #333333;
$c_count: #aaaaaa;
.checkbox {
	width: $size;
	height: $size;
	border: 1px solid $c_def;
	border-radius: 3px;
	background-color: transparent;
	background-repeat: no-repeat;
	background-position: center;
	cursor: pointer;

	font-family: PT Sans, sans-serif;
	font-weight: 400;

	&:hover {
		border-color: $c_hov;
	}

	&__container {
		width: 100%;
		padding-right: 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__checked {
		border-color: $c_hov;
		background-color: $c_hov;
		background-image: url("@/assets/checked.svg");
	}

	&__label {
		font-size: 14px;
		line-height: 16px;

		color: $c_text;

		&_wrapper {
			display: flex;
			align-items: center;
			gap: 12px;
		}
	}
	&__count {
		color: $c_count;
		font-size: 12px;
		line-height: 14px;
	}
	&__input {
		visibility: hidden;
	}
}
</style>
