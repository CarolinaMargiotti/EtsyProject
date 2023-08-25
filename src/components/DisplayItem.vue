<template>
	<div
		alt="placeholder item"
		class="placeholderItem transition-shadow rounded-lg hover:shadow-2xl relative cursor-pointer"
		:style="{
			backgroundImage: `url(${require('../assets/img/products/' +
				product.imageUrl)})`,
		}"
		@mouseleave="isItemHovered = false"
		@mouseenter="isItemHovered = true"
	>
		<div
			class="absolute bottom-0 ml-2 mb-2 bg-white py-1 px-3 rounded-full border border-gray-300 select-none text-sm"
		>
			<span class="currentPrice font-semibold"
				>USD {{ formattedPrice }}
			</span>
			<span
				v-if="product.discountedPrice"
				class="discountPrice pl-1 line-through"
			>
				USD {{ formattedDiscountPrice }}
			</span>
		</div>
		<button
			v-if="favoriteStatus || isItemHovered"
			class="absolute bg-white right-0 py-1 px-2 mt-2 mr-2 rounded-full favoriteButton favoriteHoverUp"
			@click="favoriteClicked"
		>
			<div v-show="favoriteStatus">
				<i
					:id="`favoriteHeart${product.id}`"
					class="fas fa-heart text-red-700"
				></i>
			</div>
			<div v-show="!favoriteStatus">
				<i class="far fa-heart text-gray-600"></i>
			</div>
		</button>
	</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import IProduct from "@/models/IProduct";

@Component({})
export default class DisplayItem extends Vue {
	@Prop()
	public product!: IProduct;

	public favoriteStatus: boolean = false;

	mounted(): void {
		this.favoriteStatus = this.product.isFavorite;
	}

	public isItemHovered: boolean = false;

	public favoriteClicked(): void {
		this.favoriteStatus = !this.favoriteStatus;
		this.addPulsateAnimationToIcon();
	}

	public addPulsateAnimationToIcon(): void {
		const element: HTMLElement | null = document.getElementById(
			`favoriteHeart${this.product.id}`
		);
		element?.classList.add("favoriteHeart");
	}

	public get formattedPrice(): string {
		return this.product.price.toFixed(2);
	}

	public get formattedDiscountPrice(): string {
		return this.product.discountedPrice?.toFixed(2) || "";
	}
}
</script>
<style>
.placeholderItem {
	background-size: cover;
	background-position: center;
	z-index: 1;
}

.favoriteHoverUp {
	animation: hoverUp 0.3s;
}

@keyframes hoverUp {
	0% {
		opacity: 0;
		top: 20px;
	}

	100% {
		opacity: 1;
		top: 0;
	}
}

.favoriteHeart {
	animation: pulsateHeart 0.2s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.favoritebutton {
	z-index: 2;
}

.favoriteButton::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 50%;
	width: 1.8rem;
	height: 1.6rem;
	transition: transform 0.2s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	background-color: #e1e3df;
	z-index: -1;
}

.favoriteButton:hover::before {
	content: "";
	transform: scale(117%);
	animation: pulsateButton 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

@keyframes pulsateHeart {
	0% {
		transform: scale(100%);
	}

	80% {
		transform: scale(120%);
	}

	100% {
		transform: scale(100%);
	}
}

@keyframes pulsateButton {
	0% {
		transform: scale(100%);
	}

	80% {
		transform: scale(120%);
	}

	100% {
		transform: scale(117%);
	}
}
</style>
