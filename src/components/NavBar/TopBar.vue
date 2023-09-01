<template>
	<section class="pb-3 gridTop">
		<Logo />
		<div class="lg:hidden"></div>
		<div class="mobileSearch flex">
			<IconButton class="lg:hidden mr-4 h-max self-center">
				<i class="fas fa-bars"></i>
			</IconButton>
			<SearchBar />
		</div>
		<IconButton>
			<i class="h-5 far fa-heart"></i>
		</IconButton>
		<IconButton :hasCaret="true" class="grow relative content-between">
			<i class="far h-5 fa-bell"> </i>
			<span class="notification absolute text-center font-bold text-xs">
				<div
					class="bg-orange-400 rounded-full border-white border-2 px-1"
				>
					{{ notificationNumbers }}
				</div>
			</span>
		</IconButton>
		<IconButton :hasCaret="true">
			<img
				src="@/assets/img/default-profile-icon.jpg"
				width="30px"
				height="30px"
				class="rounded-full"
				alt="default icon profile"
			/>
		</IconButton>
		<IconButton>
			<i class="h-5 fas fa-cart-shopping"></i>
		</IconButton>
	</section>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SearchBar from "./SearchBar.vue";
import Logo from "../Logo.vue";
import IconButton from "./IconButton.vue";

@Component({ components: { SearchBar, Logo, IconButton } })
export default class TopBar extends Vue {
	@Prop({ default: 7 })
	public notificationNumbers!: number;
}
</script>
<style>
.gridTop {
	display: grid;
	grid-template-columns:
		[full-start logo-start] max-content [logo-end searchbar-start] 1fr [searchbar-end button-start] repeat(
			4,
			[col-start] max-content [col-end]
		)
		[full-end];
	column-gap: 1.3rem;
	align-items: center;
}

.notification {
	transform: translateY(-50%);
	left: 0;
}

@media screen and (max-width: 1024px) {
	.mobileSearch {
		grid-row: 2 / span 1;
		grid-column: 1/-1;
	}
}
</style>
