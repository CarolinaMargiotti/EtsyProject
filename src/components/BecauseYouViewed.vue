<template>
	<section id="becauseYouViewed" class="mt-5 mb-5">
		<span class="font-bold"> Because you viewed </span>
		<div>
			<img
				src="../assets/img/products/placeholderItem.webp"
				alt="viewed item"
				class="rounded mt-2"
				:style="{
					width: '60px',
					height: '60px',
				}"
			/>
		</div>
		<div class="gridContent relative mt-3 w-full h-full">
			<DisplayItem class="firstProduct" :product="viewedItem" />
			<DisplayItem
				v-for="item in similarItems"
				:key="item.id"
				:product="item"
			/>
		</div>
	</section>
</template>
<script lang="ts">
import IProduct from "@/models/IProduct";
import { Component, Prop, Vue } from "vue-property-decorator";
import DisplayItem from "./DisplayItem.vue";

@Component({ components: { DisplayItem } })
export default class BecauseYouViewed extends Vue {
	@Prop()
	public viewedItem!: IProduct;

	@Prop()
	public similarItems!: IProduct[];
}
</script>
<style>
.gridContent {
	display: grid;
	grid-template-rows: repeat(2, 12rem);
	grid-template-columns: 2fr repeat(3, 1fr);
	gap: 1rem;
}

.firstProduct {
	grid-row: 1/-1;
	grid-column: 1 / span 1;
}
</style>
