<template>
	<section
		v-if="isDropDownVisible && navOptions?.subcategories"
		class="shadow-2xl rounded w-4/6 absolute px-4"
		@mouseenter="dropDownHoverState = true"
		@mouseleave="dropDownHoverState = false"
	>
		<NavItemList :divide="true" :itemArrays="navOptions" />
	</section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NavItemList from "./NavItemList.vue";
import { Categories } from "@/models/Categories";
import { CategoriesList } from "@/models/ICategories";

@Component({
	components: { NavItemList },
})
export default class DropDownNav extends Vue {
	@Prop()
	public readonly shouldShow!: boolean;

	@Prop()
	public readonly hoveredNav!: number;

	public dropDownHoverState: boolean = false;

	public get isDropDownVisible(): boolean {
		return this.shouldShow || this.dropDownHoverState;
	}

	public get navOptions(): CategoriesList {
		return Categories[this.hoveredNav];
	}
}
</script>
