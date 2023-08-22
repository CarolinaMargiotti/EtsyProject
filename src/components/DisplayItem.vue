<template>
	<div
		alt="placeholder item"
		class="transition-shadow rounded-lg hover:shadow-2xl relative"
		:style="{
			height: '160px',
			width: '255px',
			backgroundImage: `url(${require('../assets/img/placeholderItem.webp')})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
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
				v-if="discountedPrice"
				class="discountPrice pl-1 line-through"
			>
				USD {{ formattedDiscountPrice }}
			</span>
		</div>
		<button
			v-if="favoriteStatus || isItemHovered"
			class="absolute bg-white right-0 py-1 px-2 mt-2 mr-2 rounded-full border border-gray-300"
			:style="{
				animation: 'hoverUp 0.3s',
			}"
			@click="favoriteClicked"
		>
			<div v-show="favoriteStatus">
				<i
					:id="`favoriteButton${id}`"
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

@Component({})
export default class DisplayItem extends Vue {
	@Prop()
	public id!: number;

	@Prop()
	public price!: number;

	@Prop()
	public discountedPrice?: number;

	@Prop()
	public isFavorite!: boolean;

	public favoriteStatus: boolean = false;

	mounted() {
		this.favoriteStatus = this.isFavorite;
	}

	public isItemHovered: boolean = false;

	public favoriteClicked(): void {
		this.favoriteStatus = !this.favoriteStatus;
		this.addPulsateAnimationToIcon();
	}

	public addPulsateAnimationToIcon(): void {
		const element = document.getElementById(`favoriteButton${this.id}`);
		element?.classList.add("favoriteButton");
	}

	public get formattedPrice(): string {
		return this.price.toFixed(2);
	}

	public get formattedDiscountPrice(): string {
		return this.discountedPrice?.toFixed(2) || "";
	}
}
</script>
<style>
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

.favoriteButton {
	animation: pulsateHeart 0.2s cubic-bezier(0.68, -0.6, 0.32, 1.6);
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
</style>
