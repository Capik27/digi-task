<template>
	<section class="sidebar">
		<div class="sidebar__p1">
			<CategoryLabel count="3" />
			<CategoryLabel count="3" padding />
			<CategoryLabel count="3" padding />
			<CategoryLabel count="3" padding />
		</div>

		<CustomFilter name="Цена" pricefilter />
		<CustomFilter name="Бренд" count="9" search />
		<CustomFilter name="Размер" count="6" />
	</section>
</template>

<script>
import CustomFilter from "@/features/CustomFilter.vue";
import CategoryLabel from "@/ui/CategoryLabel.vue";

export default {
	name: "SideBar",
	components: {
		CustomFilter,
		CategoryLabel,
	},
};
</script>

<style scoped lang="scss">
$size_w: 280px;
$gap_main: 28px;
.sidebar {
	display: grid;
	align-items: center;
	gap: $gap_main;
	min-width: $size_w;
	max-width: $size_w;
	height: fit-content;

	font-family: PT Sans, sans-serif;

	@media (max-width: 1100px) {
		display: none;
	}

	&__title {
		font-size: 16px;
		line-height: 20px;
		font-weight: 700;
	}

	&__p1 {
		display: grid;
		gap: 1px;
	}
}
</style>
