<template>
	<div class="links">
		<a href="#" class="links__item">Информация о компании</a>
		<a href="#" class="links__item">Контакты</a>
		<a href="#" class="links__item">Полезные ссылки</a>
	</div>
</template>

<script>
export default {
	name: "InfoLinks",
};
</script>

<style scoped lang="scss">
.links {
	display: flex;
	align-items: center;
	gap: 20px;

	&__item {
		margin: 0;
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		line-height: 17px;

		@media (max-width: 1260px) {
			white-space: normal;
		}

		&:hover {
			color: #125bae;
		}
	}
}
</style>
