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
		<div class="flex mt-3">
			<DisplayItem
				:id="viewedItem.id"
				:price="viewedItem.price"
				:imageUrl="viewedItem.imageUrl"
				:isFavorite="viewedItem.isFavorite"
				:size="displaySizes.LG"
				class="mr-3"
			/>
			<div class="grid grid-cols-3 gap-3">
				<DisplayItem
					:id="viewedItem.id"
					:price="viewedItem.price"
					:imageUrl="viewedItem.imageUrl"
					:isFavorite="viewedItem.isFavorite"
					:size="displaySizes.MD"
				/>
				<DisplayItem
					:id="viewedItem.id"
					:price="viewedItem.price"
					:imageUrl="viewedItem.imageUrl"
					:isFavorite="viewedItem.isFavorite"
					:size="displaySizes.MD"
				/>
				<DisplayItem
					:id="viewedItem.id"
					:price="viewedItem.price"
					:imageUrl="viewedItem.imageUrl"
					:isFavorite="viewedItem.isFavorite"
					:size="displaySizes.MD"
				/>
				<DisplayItem
					:id="viewedItem.id"
					:price="viewedItem.price"
					:imageUrl="viewedItem.imageUrl"
					:isFavorite="viewedItem.isFavorite"
					:size="displaySizes.MD"
				/>
				<DisplayItem
					:id="viewedItem.id"
					:price="viewedItem.price"
					:imageUrl="viewedItem.imageUrl"
					:isFavorite="viewedItem.isFavorite"
					:size="displaySizes.MD"
				/>
				<DisplayItem
					:id="viewedItem.id"
					:price="viewedItem.price"
					:imageUrl="viewedItem.imageUrl"
					:isFavorite="viewedItem.isFavorite"
					:size="displaySizes.MD"
				/>
			</div>
		</div>
	</section>
</template>
<script lang="ts">
import IProduct from "@/models/IProduct";
import { Component, Prop, Vue } from "vue-property-decorator";
import DisplayItem from "./DisplayItem.vue";
import { Sizes } from "@/models/ESize";

@Component({ components: { DisplayItem } })
export default class BecauseYouViewed extends Vue {
	@Prop()
	public viewedItem!: IProduct;

	public displaySizes: typeof Sizes = Sizes;
}
</script>
