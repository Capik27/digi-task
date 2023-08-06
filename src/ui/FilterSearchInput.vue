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
		<img alt="search" src="@/assets/mobile-search.svg" />
		<input
			@focus="onFocus"
			@focusout="onFocusOut"
			ref="inputRef"
			class="input"
			type="text"
			v-model="value"
			placeholder="Поиск"
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
export default defineComponent({
	name: "FilterSearchInput",
	props: {
		onEdit: Function,
	},
	setup(props) {
		const value = ref("");
		const active = ref(false);
		const focused = ref(false);
		const inputRef = ref();
		const formRef = ref();

		watch([value], (next, prev) => {
			if (!props.onEdit) return;
			if (!prev[0] && next[0]) {
				props.onEdit(true);
			} else if (prev[0] && !next[0]) {
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
.input {
	border: none;
	outline: none;
	text-align: left;
	width: 100%;
	min-width: 110px;

	font-family: PT Sans, sans-serif;
	font-size: 14px;
	line-height: 16px;
	font-weight: 400;

	&__container {
		width: 100%;
		min-width: 100px;
		display: flex;
		gap: 8px;
		justify-content: flex-start;
		align-items: center;
		border: 1px solid #d5d5d5;
		height: 36px;
		padding: 10px 12px;
		border-radius: 4px;
		cursor: text;

		position: relative;

		&:hover {
			border-color: #73aff4;
		}
	}

	&__controls {
		position: absolute;
		right: 12px;
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
		border-color: #73aff4;
	}

	&_value {
		.input {
			width: calc(100% - 50px);
		}
	}
}
</style>
