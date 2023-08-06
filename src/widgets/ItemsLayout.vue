<template>
	<section class="content">
		<ItemCard
			v-for="(item, index) in mockData"
			:dis="index === 2"
			:data="item"
			:key="item.id"
		/>
	</section>
</template>

<script>
import ItemCard from "@/features/ItemCard.vue";
import mockData from "@/utils/mockData";

export default {
	name: "ItemsLayout",
	components: {
		ItemCard,
	},
	setup() {
		return { mockData };
	},
};
</script>

<style scoped lang="scss">
$minsize: 165px;
.content {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(332px, 1fr));
	justify-items: start;
	grid-gap: 24px 24px;

	@media (max-width: 1920px) {
		grid-template-columns: repeat(4, minmax($minsize, 1fr));
	}

	@media (max-width: 1260px) {
		grid-template-columns: repeat(3, minmax($minsize, 1fr));
	}

	@media (max-width: 1100px) {
		grid-template-columns: repeat(2, minmax($minsize, 1fr));
	}

	@media (max-width: 560px) {
		grid-template-columns: repeat(2, minmax(140px, 1fr));
		grid-gap: 16px 12px;
	}
	@media (max-width: 340px) {
		grid-template-columns: repeat(1, minmax($minsize, 1fr));
	}
}
</style>
