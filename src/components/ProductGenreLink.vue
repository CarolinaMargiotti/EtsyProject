<template>
	<div
		class="flex items-center rounded border border-lightGray py-5 pl-5 cursor-pointer displayClass"
		@click="goToGenre"
	>
		<img
			:src="require(`../assets/img/products/${product.imageUrl}`)"
			alt="viewed item"
			class="rounded-full mt-2"
			:style="{
				width: '60px',
				height: '60px',
			}"
		/>
		<LinkButton :text="product.genre" :link="product.url" />
	</div>
</template>
<script lang="ts">
import LinkButton from "./NavBar/buttons/LinkButton.vue";

import { Component, Prop, Vue } from "vue-property-decorator";
import IProduct from "@/models/IProduct";

@Component({ components: { LinkButton } })
export default class ProductGenreLink extends Vue {
	@Prop()
	public product!: IProduct;

	public goToGenre(): void {
		//...
	}
}
</script>
<style>
.displayClass:hover .linkButton::after {
	margin-left: 0.25rem;
}
</style>
