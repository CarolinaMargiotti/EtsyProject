<template>
	<img
		src="../assets/img/placeholderItem.webp"
		alt="placeholder item"
		class="transition-shadow rounded-lg hover:shadow-2xl"
		:style="{
			objectFit: 'cover',
			height: '160px',
			width: '280px',
		}"
	/>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class DisplayItem extends Vue {
	@Prop()
	public price!: number;

	@Prop()
	public discountedPrice?: number;

	@Prop()
	public isFavorite!: boolean;
}
</script>
