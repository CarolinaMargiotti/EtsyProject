<template>
	<section id="becauseYouViewed" class="mt-5 mb-5">
		<span class="font-bold"> Because you viewed </span>
		<div class="grid gap-3 grid-flow-col justify-start">
			<img
				v-for="viewedItem in viewedItems"
				:key="viewedItem.id"
				:src="require(`../assets/img/products/${viewedItem.imageUrl}`)"
				alt="viewed item"
				class="rounded hover:shadow-xl cursor-pointer mt-2"
				:style="{
					width: '4rem',
					height: '4rem',
				}"
			/>
		</div>
		<div
			class="relative mt-3 w-full"
			:class="{
				gridContentBig: isBigShowcase,
				gridContentNormal: !isBigShowcase,
			}"
		>
			<DisplayItem
				v-if="isBigShowcase"
				class="firstProduct displayItem"
				:product="similarItems[0]"
			/>
			<DisplayItem
				v-for="item in mainSimilarItems"
				class="displayItem"
				:key="item.id"
				:product="item"
			/>
		</div>
		<div
			v-if="hasGenreLinks"
			class="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
		>
			<ProductGenreLink
				v-for="item in genreSimilarItems"
				class="genreLink"
				:key="item.id"
				:product="item"
			/>
		</div>
	</section>
</template>
<script lang="ts">
import IProduct from "@/models/IProduct";
import ProductGenreLink from "./ProductGenreLink.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import DisplayItem from "./DisplayItem.vue";

@Component({ components: { DisplayItem, ProductGenreLink } })
export default class BecauseYouViewed extends Vue {
	@Prop()
	public viewedItems!: IProduct[];

	@Prop()
	public isBigShowcase?: boolean;

	@Prop()
	public hasGenreLinks?: boolean;

	@Prop()
	public similarItems!: IProduct[];

	public mainSimilarItems: IProduct[] = [];
	public genreSimilarItems: IProduct[] = [];

	public mounted(): void {
		const endOfMainItems = this.isBigShowcase ? 7 : 4;
		const startOfMainItems = this.isBigShowcase ? 1 : 0;

		this.mainSimilarItems = this.similarItems.slice(
			startOfMainItems,
			endOfMainItems
		);

		this.genreSimilarItems = this.similarItems.slice(
			endOfMainItems,
			this.similarItems.length - 1
		);
	}
}
</script>
<style>
.gridContentBig {
	display: grid;
	grid-template-rows: repeat(2, 12rem);
	grid-template-columns: 2fr repeat(3, 1fr);
	gap: 1rem;
}

.gridContentNormal {
	display: grid;
	grid-template-rows: 12rem;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
}

.firstProduct {
	grid-row: 1/-1;
	grid-column: 1 / span 1;
}

@media (max-width: 1024px) {
	.displayItem:nth-child(n + 3):nth-child(-n + 6) {
		display: none;
	}

	.gridContentBig {
		grid-template-columns: 2fr repeat(1, 1fr);
		grid-template-rows: repeat(2, 12rem);
	}

	.gridContentNormal {
		grid-template-columns: repeat(2, 1fr);
	}

	.genreLink:nth-child(n + 3) {
		display: none;
	}
}

@media (max-width: 640px) {
	.gridContentBig {
		grid-template-columns: 1fr;
	}
	.gridContentBig .displayItem:nth-child(n + 2):nth-child(-n + 6) {
		display: none;
	}
	.firstProduct {
		grid-row: 1/1;
		grid-column: 1 / 1;
	}

	.genreLink:nth-child(n + 2) {
		display: none;
	}
}
</style>
