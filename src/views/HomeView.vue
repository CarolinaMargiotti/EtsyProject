<template>
	<div>
		<section
			class="w-full bg-toastedYellow text-center text-4xl alongatedBackground"
		>
			<div class="py-5">
				Welcome to Etsy, <a href="#" class="underline">Carolina!</a>
			</div>
		</section>
		<div class="px-headerPad">
			<BecauseYouViewed
				:isBigShowcase="true"
				:viewedItem="viewedItem"
				:similarItems="similarItems"
			/>
			<RecentActivity />
		</div>
	</div>
</template>

<script lang="ts">
import RecentActivity from "@/components/RecentActivity.vue";
import BecauseYouViewed from "@/components/BecauseYouViewed.vue";
import { Component, Vue } from "vue-property-decorator";
import IProduct from "@/models/IProduct";

@Component({
	components: { RecentActivity, BecauseYouViewed },
})
export default class HomeView extends Vue {
	public viewedItem: IProduct = {
		id: 11,
		price: 1,
		isFavorite: false,
		imageUrl: "placeholderItem.webp",
	};

	public similarItems: IProduct[] = [
		{
			id: 12,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
		},
		{
			id: 13,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
		},
		{
			id: 14,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
		},
		{
			id: 15,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
		},
		{
			id: 16,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
		},
		{
			id: 17,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
		},
	];
}
</script>
<style>
.alongatedBackground::after {
	content: "";
	position: absolute;
	height: 40vh;
	width: 100%;
	left: 0;
	background-color: #fdebd2;
	z-index: -1;
}
</style>
