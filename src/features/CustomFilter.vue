<template>
	<div class="customfilter">
		<div
			class="customfilter__header"
			:class="{
				customfilter__header_center:
					!isInput && !boxCheckedNumber && !priceFrom && !priceTo,
			}"
		>
			<p class="customfilter__title">{{ name || "Название" }}</p>
			<a
				v-if="isInput || boxCheckedNumber || priceFrom || priceTo"
				@click.prevent="onClear"
			>
				Очистить
			</a>
		</div>

		<div v-if="pricefilter" class="customfilter__pricefilter">
			<PriceInput prefix="от" ref="priceRefFrom" :onEdit="onPriceFromChange" />
			<span class="customfilter__divider" />
			<PriceInput prefix="до" ref="priceRefTo" :onEdit="onPriceToChange" />
		</div>

		<FilterSearchInput v-if="search" ref="inputRef" :onEdit="onInputChange" />

		<div v-if="count" class="customfilter__fixedsize customfilter__box12">
			<CheckBox
				label="Атрибут"
				count="3"
				:checked="Boolean(index % 2)"
				v-for="(_, index) in boxes"
				:ref="setRef"
				:onCheck="onCheckboxChange"
				:key="index"
			/>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref } from "vue";
import CheckBox from "@/ui/CheckBox.vue";
import FilterSearchInput from "@/ui/FilterSearchInput.vue";
import PriceInput from "@/ui/PriceInput.vue";

export default defineComponent({
	name: "CustomFilter",
	components: {
		CheckBox,
		FilterSearchInput,
		PriceInput,
	},
	props: {
		name: String,
		search: Boolean,
		pricefilter: Boolean,
		count: String,
	},
	setup(props) {
		const inputRef = ref();
		const priceRefFrom = ref();
		const priceRefTo = ref();
		const boxes = new Array(+props.count || 0).fill(null);
		const boxRefs = [];

		const isInput = ref(false);
		const boxCheckedNumber = ref(0);
		const priceFrom = ref(0);
		const priceTo = ref(0);

		const setRef = (el) => {
			if (el) boxRefs.push(el);
		};

		const onClear = () => {
			inputRef.value?.onClear();
			priceRefFrom.value?.onClear();
			priceRefTo.value?.onClear();
			if (+props.count) {
				boxRefs.forEach((ref) => {
					ref?.reset();
				});
			}
		};

		const onInputChange = (state) => {
			isInput.value = state;
		};

		const onPriceFromChange = (value) => {
			priceFrom.value = value;
		};
		const onPriceToChange = (value) => {
			priceTo.value = value;
		};

		const onCheckboxChange = (number) => {
			boxCheckedNumber.value += number;
		};

		const onSubmit = () => {
			// search
		};

		return {
			boxes,
			boxRefs,
			setRef,
			inputRef,
			priceRefFrom,
			priceRefTo,
			onClear,
			onSubmit,
			isInput,
			priceFrom,
			priceTo,
			onInputChange,
			onCheckboxChange,
			onPriceFromChange,
			onPriceToChange,
			boxCheckedNumber,
		};
	},
});
</script>

<style scoped lang="scss">
$max_h: 180px;
.customfilter {
	display: grid;
	align-items: center;
	width: 100%;
	gap: 16px;
	height: fit-content;

	font-family: PT Sans, sans-serif;

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		&_center {
			justify-content: center;
		}

		a {
			color: #aaaaaa;
			cursor: pointer;
			text-decoration: underline;
			font-size: 12px;
			line-height: 12px;
			font-weight: 400;

			&:hover {
				color: #333333;
			}
		}
	}

	&__pricefilter {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}

	&__divider {
		min-width: 10px;
		height: 1px;
		background-color: #d5d5d5;
	}

	&__title {
		font-size: 16px;
		line-height: 20px;
		font-weight: 700;
	}

	&__fixedsize {
		height: fit-content;
		max-height: $max_h;
		overflow-y: auto;
		padding-bottom: 1px;
	}

	&__box12 {
		display: grid;
		gap: 11.5px;
	}
}
</style>
