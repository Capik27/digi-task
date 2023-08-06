<template>
	<a class="itemcard" :disabled="dis">
		<div class="itemcard__imagebox">
			<BestShield />
			<img
				class="itemcard__imagebox_img"
				src="@/assets/item.svg"
				alt="preview"
			/>
			<SaleShield :value="sale" />
		</div>

		<div class="itemcard__labels">
			<p class="itemcard__labels_brand">{{ data.brand || "Бренд" }}</p>
			<p class="itemcard__labels_description">
				{{ data.description }}
			</p>
		</div>
		<p class="itemcard__price" :class="{ itemcard__price_skeleton: dis }">
			<span class="itemcard__price_current">{{ price }}</span>
			<span class="itemcard__price_old">{{ oldPrice }}</span>
		</p>
		<DefButton v-if="!dis" color="blue" class="itemcard__btn">Купить</DefButton>
		<DefButton v-else color="grey" class="itemcard__btn"
			>Сообщить о поступлении</DefButton
		>
	</a>
</template>

<script>
import BestShield from "@/ui/shields/BestShield.vue";
import SaleShield from "@/ui/shields/SaleShield.vue";
import DefButton from "@/ui/buttons/DefButton.vue";
import { defineComponent, computed } from "vue";
export default defineComponent({
	name: "ItemCard",
	components: { DefButton, BestShield, SaleShield },
	props: {
		data: Object,
		dis: Boolean,
	},
	setup(props) {
		const currensy = " " + props.data.currensy;
		const oldPrice = +props.data.price + currensy;
		const sale = Math.round(+props.data.sale * 100) + "%";

		const price = computed(() => {
			let result = props.data.price;
			if (props.data.sale) {
				result = props.data.price - props.data.sale * props.data.price;
			}
			return Math.round(result) + currensy;
		});

		return { oldPrice, price, sale };
	},
});
</script>

<style scoped lang="scss">
$bg: #f8f8fa;
$bg_ligth: rgba(248, 248, 250, 0.5);
$h: 200px;
$gap_main: 16px;
$gap_mobile: 12px;
$card_h_def: 356px;
$card_h_dis: 372px;
$card_h_mob: 360px;
$brand: #aaaaaa;
$text: #333333;
$hover_text: #125bae;
.itemcard {
	display: grid;
	gap: $gap_main;
	height: $card_h_def;

	@media (max-width: 1440px) {
		height: $card_h_dis;
	}
	@media (max-width: 560px) {
		gap: $gap_mobile;
		height: $card_h_mob;
	}

	font-family: PT Sans, sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 16px;

	&[disabled="true"] {
		height: $card_h_dis;

		@media (max-width: 560px) {
			height: $card_h_mob;
		}
		.itemcard__imagebox {
			background-color: $bg_ligth;

			&_img {
				opacity: 0.5;
			}
		}

		&:hover {
			cursor: not-allowed;
			.itemcard__imagebox_img {
				scale: 1;
			}
			.itemcard__labels_description {
				color: $text;
			}
		}
	}

	&:hover {
		cursor: pointer;
		.itemcard__imagebox_img {
			scale: 1.27;
		}
		.itemcard__labels_description {
			color: $hover_text;
		}
	}

	&__imagebox {
		display: grid;
		padding: 12px;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		height: $h;
		align-content: space-between;
		justify-items: start;

		background-color: $bg;

		&_img {
			justify-self: center;
		}
	}

	&__labels {
		p {
			text-align: left;
		}

		&_brand {
			color: $brand;
			margin-bottom: 8px;
		}
		&_description {
			color: $text;

			-ms-text-overflow: ellipsis;
			-o-text-overflow: ellipsis;
			text-overflow: ellipsis;
			overflow: hidden;
			display: -webkit-box;
			display: box;
			word-wrap: break-word;
			-webkit-box-orient: vertical;
			box-orient: vertical;

			-ms-line-clamp: 2;
			-webkit-line-clamp: 2;
			line-clamp: 2;

			@media (max-width: 1440px) {
				-ms-line-clamp: 3;
				-webkit-line-clamp: 3;
				line-clamp: 3;
			}
		}
	}

	&__price {
		display: flex;
		gap: 8px;
		align-items: center;
		font-family: PT Sans, sans-serif;
		text-align: left;

		&_current {
			font-weight: 700;
			line-height: 14px;
		}
		&_old {
			font-weight: 400;
			font-size: 12px;
			line-height: 14px;
			text-decoration-line: line-through;
			color: $brand;
		}

		&_skeleton span {
			color: transparent;
		}
	}

	&__btn {
		justify-self: start;
	}
}
</style>
