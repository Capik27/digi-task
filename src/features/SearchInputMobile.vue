<template>
	<form
		ref="formRef"
		class="input__container"
		:class="{
			input_active: active,
			input_value: value,
		}"
		@click.prevent="onClick"
	>
		<img
			alt="search"
			src="@/assets/mobile-back.svg"
			class="input__prev"
			@click.prevent="onPrev"
		/>
		<div class="input__parent">
			<input
				@focus="onFocus"
				@focusout="onFocusOut"
				ref="inputRef"
				class="input"
				type="text"
				v-model="value"
				placeholder="Поиск"
			/>
			<span class="input__parent_underline" />
			<div class="input__controls_wrapper">
				<span
					class="input__controls"
					:class="{
						input__controls_skeleton: !value,
					}"
				>
					<div class="input__controls_close" @click="onClear">
						<img alt="close" src="@/assets/delete.svg" />
					</div>
				</span>
				<DefButton color="mobile" @click="onSubmit">Найти</DefButton>
			</div>
		</div>
	</form>
</template>

<script>
import DefButton from "@/ui/buttons/DefButton.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
	name: "SearchInputMobile",
	components: { DefButton },
	setup() {
		const value = ref("");
		const active = ref(false);
		const focused = ref(false);
		const inputRef = ref();
		const formRef = ref();
		const prevValue = [];

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

		const onPrev = () => {
			if (!prevValue.length) return;
			if (value.value === prevValue[prevValue.length - 1]) {
				value.value = prevValue[prevValue.length - 2];
				prevValue.pop();
			} else {
				value.value = prevValue.pop();
			}
		};

		const onClear = () => {
			value.value = "";
		};

		const onSubmit = () => {
			if (value.value) {
				prevValue.push(value.value);
			}

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
			onPrev,
		};
	},
});
</script>

<style scoped lang="scss">
$c_def: #d5d5d5;
$c_hov: #7397f5;
$c_text: #333333;
.input {
	border: none;
	outline: none;
	text-align: left;
	// flex-grow: 1;
	width: 100%;
	min-width: 110px;

	font-family: PT Sans, sans-serif;
	font-size: 16px;
	line-height: 14px;
	font-weight: 400;

	color: $c_text;

	&__parent {
		width: 100%;
		height: 100%;
		display: flex;
		position: relative;
		gap: 8px;

		&_underline {
			width: calc(100% - 1px);
			height: 1px;
			left: 1px;
			bottom: -6px;
			position: absolute;
			border-bottom: 1px solid $c_def;
		}
	}

	&__container {
		width: 100%;
		min-width: 268px;
		display: flex;
		gap: 16px;
		justify-content: flex-start;
		align-items: center;
		height: 38px;
		margin-bottom: 7px;
		cursor: text;

		position: relative;

		&:hover {
			.input__parent_underline {
				border-color: $c_hov;
			}
		}
	}

	&__controls {
		// position: absolute;
		height: 100%;
		// right: 93px;
		display: flex;
		align-items: center;
		gap: 8px;

		&_wrapper {
			display: flex;
			gap: 16px;
		}

		&_close {
			width: 17px;
			height: 17px;
			img {
				width: 17px;
				height: 17px;
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
			visibility: hidden;
		}
	}

	&__prev {
		cursor: pointer;

		&:hover {
			filter: brightness(0);
		}
	}

	&_active {
		.input__parent_underline {
			border-color: $c_hov;
		}
	}

	&_value {
		.input {
			width: calc(100% - 50px);
		}
	}
}
</style>
