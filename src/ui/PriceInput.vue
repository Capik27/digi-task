<template>
	<form
		ref="formRef"
		class="input__container"
		:class="{
			input_active: active,
			input_value: value,
		}"
		@click.prevent="onClick"
		@submit="onSubmit"
	>
		<span v-if="prefix" class="input__prefix"> {{ prefix }}</span>
		<input
			@focus="onFocus"
			@focusout="onFocusOut"
			ref="inputRef"
			class="input"
			type="text"
			v-model="value"
			placeholder="0 ₽"
		/>
		<span
			class="input__controls"
			:class="{
				input__controls_skeleton: !value,
			}"
		>
			<div class="input__controls_close" @click="onClear">
				<img alt="close" src="@/assets/delete.svg" />
			</div>
			<input type="submit" hidden />
		</span>
	</form>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import formatCurrensy from "@/utils/formatCurrensy";

export default defineComponent({
	name: "PriceInput",
	props: {
		prefix: String,
		onEdit: Function,
	},
	setup(props) {
		const value = ref("");
		const active = ref(false);
		const focused = ref(false);
		const inputRef = ref();
		const formRef = ref();

		watch([value], (next, prev) => {
			const prevNums = prev[0].replace(/\D/g, "");
			let currNums = next[0].replace(/\D/g, "");
			const ending = currNums ? " ₽" : "";

			if (currNums.length > 6) {
				currNums = currNums.substring(0, 6);
			}

			value.value = currNums ? formatCurrensy(currNums) + ending : "";

			if (!props.onEdit) return;
			if (!prevNums && currNums) {
				props.onEdit(true);
			} else if (prevNums && !currNums) {
				props.onEdit(false);
			}
		});

		const setActive = (state) => {
			active.value = state;
		};
		const setFocused = (state) => {
			focused.value = state;
		};

		const onClick = () => {
			inputRef.value.focus();
		};

		const onFocus = () => {
			setFocused(true);

			if (!active.value) {
				setActive(true);
			}
		};

		const onFocusOut = () => {
			setFocused(false);

			// Любой клик сбивает фокус, поэтому нужно перепроверить его через небольшое время
			// Если клик был по элементу в компоненте, то focused будет true и деактивации не будет
			setTimeout(() => {
				if (!focused.value) {
					setActive(false);
				}
			}, 100);
		};

		const onClear = () => {
			value.value = "";
		};

		const onSubmit = () => {
			// search
		};

		return {
			inputRef,
			formRef,
			value,
			active,
			onClick,
			onFocus,
			onFocusOut,
			onClear,
			onSubmit,
		};
	},
});
</script>

<style scoped lang="scss">
$c_prefix: #aaaaaa;
$c_text: #333333;
$c_border: #d5d5d5;
$c_border_hov: #73aff4;
$min_w: 50px;
.input {
	border: none;
	outline: none;
	text-align: left;
	width: 100%;
	min-width: $min_w;
	color: $c_text;

	font-family: PT Sans, sans-serif;
	font-size: 14px;
	line-height: 16px;
	font-weight: 400;

	&__container {
		width: 100%;
		min-width: 100px;
		display: flex;
		gap: 6px;
		justify-content: flex-start;
		align-items: center;
		border: 1px solid $c_border;
		height: 36px;
		padding: 10px 8px;
		border-radius: 4px;
		cursor: text;

		position: relative;

		&:hover {
			border-color: $c_border_hov;
		}
	}

	&__prefix {
		color: $c_prefix;
		font-size: 12px;
		line-height: 14px;
	}

	&__controls {
		position: absolute;
		right: 8px;
		display: flex;
		align-items: center;
		gap: 8px;

		&_close {
			width: 16px;
			height: 16px;
			img {
				width: 16px;
				height: 16px;
			}

			border-radius: 50%;
			cursor: pointer;
			opacity: 0.3;

			&:hover {
				opacity: 1;
			}
		}

		&_skeleton {
			opacity: 0;
			transform: translateX(-30%);
			visibility: hidden;
		}
	}

	&_active {
		border-color: $c_border_hov;
	}

	&_value {
		.input {
			width: calc(100% - 35px);
		}
	}
}
</style>
