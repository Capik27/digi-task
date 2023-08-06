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
		<img alt="search" src="@/assets/search.svg" />
		<input
			@focus="onFocus"
			@focusout="onFocusOut"
			ref="inputRef"
			class="input"
			type="text"
			v-model="value"
			placeholder="Поиск по 100 000 товаров"
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
			<DefButton color="primary" @click="onSubmit">Найти</DefButton>
		</span>
	</form>
</template>

<script>
import DefButton from "@/ui/buttons/DefButton.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
	name: "SearchField",
	components: { DefButton },
	setup() {
		const value = ref("");
		const active = ref(false);
		const focused = ref(false);
		const inputRef = ref();
		const formRef = ref();

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
.input {
	border: none;
	outline: none;
	text-align: left;
	// flex-grow: 1;
	width: 100%;
	min-width: 110px;

	font-family: Inter, sans-serif;
	font-size: 16px;
	font-weight: 400;

	&__container {
		width: 100%;
		min-width: 268px;
		display: flex;
		gap: 8px;
		justify-content: flex-start;
		align-items: center;
		border: 1px solid #aaaaaa;
		height: 48px;
		padding: 4px 4px 4px 16px;
		border-radius: 10px;
		cursor: text;

		position: relative;

		&:hover {
			border-color: #73aff4;
		}
	}

	&__controls {
		position: absolute;
		right: 4px;
		display: flex;
		align-items: center;
		gap: 8px;

		&_close {
			width: 20px;
			height: 20px;
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
		border-color: #73aff4;
	}

	&_value {
		.input {
			width: calc(100% - 133px);
		}
	}
}
</style>
