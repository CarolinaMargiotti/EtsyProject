<template>
	<div>
		<section
			class="w-full bg-toastedYellow text-center text-4xl alongatedBackground"
		>
			<div class="py-5">
				Welcome to Etsy, <a href="#" class="underline">Carolina!</a>
			</div>
		</section>
		<div class="justify-center mb-7 grid gap-2 px-4 lg:px-0">
			<BecauseYouViewed
				:isBigShowcase="true"
				:viewedItems="[viewedItem, viewedItem]"
				:similarItems="similarItems"
			/>
			<BecauseYouViewed
				:viewedItems="[viewedItem]"
				:similarItems="similarItems"
			/>
			<BecauseYouViewed
				:hasGenreLinks="true"
				:viewedItems="[viewedItem]"
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
		genre: "strawberry beret",
	};

	public similarItems: IProduct[] = [
		{
			id: 12,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
			genre: "strawberry beret",
		},
		{
			id: 13,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
			genre: "strawberry beret",
		},
		{
			id: 14,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
			genre: "strawberry beret",
		},
		{
			id: 15,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
			genre: "strawberry beret",
		},
		{
			id: 16,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
			genre: "strawberry beret",
		},
		{
			id: 17,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
			genre: "strawberry beret",
		},
		{
			id: 18,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
			genre: "strawberry beret",
		},
		{
			id: 19,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
			genre: "strawberry beret",
		},
		{
			id: 20,
			price: 1,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
			genre: "strawberry beret",
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
