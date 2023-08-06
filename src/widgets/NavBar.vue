<template>
	<header class="header">
		<div class="header__left">
			<LogoLink />
			<NavbarButton>Каталог</NavbarButton>
		</div>
		<SearchField class="header__input" />
		<InfoLinks class="header__links" />
		<div class="header__mobile">
			<SearchInputMobile class="header__mobile_input" />
			<h2 class="header__mobile_category">Название категории</h2>
		</div>
	</header>
</template>

<script>
import LogoLink from "@/ui/LogoLink.vue";
import NavbarButton from "@/ui/buttons/NavbarButton.vue";
import SearchField from "@/features/SearchField.vue";
import SearchInputMobile from "@/features/SearchInputMobile.vue";
import InfoLinks from "@/features/InfoLinks.vue";

export default {
	name: "NavBar",
	components: {
		LogoLink,
		SearchField,
		SearchInputMobile,
		NavbarButton,
		InfoLinks,
	},
};
</script>

<style scoped lang="scss">
$input_max_w: 479px;
.header {
	display: flex;
	align-items: center;
	gap: 24px;
	padding: 12px 0px 12px 0px;
	margin-bottom: 24px;

	font-family: Inter, sans-serif;
	font-size: 16px;
	font-weight: 400;

	@media (max-width: 1440px) {
		padding: 12px 28px;
	}

	@media (max-width: 1100px) {
		flex-direction: column;
		padding: 0px;
		margin-bottom: 0px;

		&__input,
		&__links {
			display: none;
		}
	}

	&__left {
		display: flex;
		gap: 8px;

		@media (max-width: 1100px) {
			display: none;
		}
	}

	&__mobile {
		width: 100%;
		display: none;

		&_input {
			flex-grow: 1;
		}

		&_category {
			padding: 12px 0px 12px 8px;
			font-family: PT Sans, sans-serif;
			font-size: 22px;
			font-weight: 400;
			line-height: 28px;

			text-align: start;
		}

		@media (max-width: 1100px) {
			display: block;
		}
	}

	&__input {
		flex-grow: 1;

		@media (max-width: 1440px) {
			max-width: $input_max_w;
		}
	}
}
</style>
