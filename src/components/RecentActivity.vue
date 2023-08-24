<template>
	<div>
		<section class="w-full bg-toastedYellow text-center text-4xl">
			<div class="py-5">
				Welcome to Etsy, <a href="#" class="underline">Carolina!</a>
			</div>
		</section>
		<section class="px-headerPad">
			<div class="flex justify-between items-end pb-4">
				<label class="text-3xl font-bold">Your recent activity</label>
				<div class="text-base text-muted">
					<a href="#" class="underline">Recently viewed</a>
					and
					<a href="#" class="underline">favorited items</a>
				</div>
			</div>

			<div class="grid grid-cols-5 gap-3">
				<DisplayItem
					v-for="product in activityProducts"
					:key="product.id"
					:id="product.id"
					:price="product.price"
					:isFavorite="product.isFavorite"
					:imageUrl="product.imageUrl"
				/>
			</div>
		</section>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DisplayItem from "./DisplayItem.vue";
import IProduct from "@/models/IProduct";

@Component({ components: { DisplayItem } })
export default class RecentActivity extends Vue {
	public activityProducts: IProduct[] = [
		{
			id: 1,
			price: 55,
			isFavorite: true,
			imageUrl: "placeholderItem.webp",
		},
		{
			id: 2,
			price: 55,
			discountedPrice: 75,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
		},
		{
			id: 3,
			price: 55,
			isFavorite: true,
			imageUrl: "placeholderItem.webp",
		},
		{
			id: 4,
			price: 55,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
		},
		{
			id: 5,
			price: 34,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
		},
		{
			id: 6,
			price: 55,
			discountedPrice: 75,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
		},
		{
			id: 7,
			price: 55,
			isFavorite: false,
			imageUrl: "placeholderItem.webp",
		},
		{
			id: 8,
			price: 55,
			isFavorite: true,
			imageUrl: "placeholderItem.webp",
		},
		{
			id: 9,
			price: 55,
			isFavorite: true,
			imageUrl: "placeholderItem.webp",
		},
		{
			id: 10,
			price: 55,
			isFavorite: true,
			imageUrl: "placeholderItem.webp",
		},
	];
}
</script>
