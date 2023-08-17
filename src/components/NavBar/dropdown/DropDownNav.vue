<template>
	<section
		v-if="isDropDownVisible && doesSubCategoriesExists"
		class="shadow-2xl rounded w-4/6 absolute px-4 bg-white"
		@mouseenter="hoveringDropdownMouseEnter"
		@mouseleave="hoveringDropdownMouseLeave"
		:style="{
			marginTop: '2px',
		}"
	>
		<component
			v-if="navOptions.dropdownType"
			:is="navOptions.dropdownType"
			v-bind="{
				itemArrays: navOptions,
			}"
		></component>
	</section>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import DropDownCategoriesType from "./DropDownCategoriesType.vue";
import DropDownThreeLists from "./DropDownThreeListsType.vue";
import { Categories } from "@/models/Categories";
import {
	DropDownCategoriesTypeInterface,
	DropDownThreeListsInterface,
} from "@/models/ICategories";

@Component({
	components: { DropDownCategoriesType, DropDownThreeLists },
})
export default class DropDownNav extends Vue {
	@Prop()
	public readonly shouldShow!: boolean;

	@Prop()
	public readonly hoveredNav!: number;

	public isHoveringTimeout: boolean = false;

	public dropDownHoverState: boolean = false;

	public get isDropDownVisible(): boolean {
		return (
			this.shouldShow || this.dropDownHoverState || this.isHoveringTimeout
		);
	}

	public get navOptions():
		| DropDownCategoriesTypeInterface
		| DropDownThreeListsInterface {
		return Categories[this.hoveredNav];
	}

	public hoveringDropdownMouseEnter(): void {
		this.dropDownHoverState = true;
		this.$emit("dropdownHoverChanged", true);
	}

	public hoveringDropdownMouseLeave(): void {
		this.dropDownHoverState = false;
		this.$emit("dropdownHoverChanged", false);
	}

	public get doesSubCategoriesExists(): boolean {
		const doesCategoriesHaveSubcategories: boolean = !!(
			this.navOptions as DropDownCategoriesTypeInterface
		)?.subcategories;

		const doesThreeColumnsHaveAtleastOneColumn: boolean = !!(
			this.navOptions as DropDownThreeListsInterface
		)?.firstColumn;

		return (
			!!doesCategoriesHaveSubcategories ||
			!!doesThreeColumnsHaveAtleastOneColumn
		);
	}

	@Watch("shouldShow")
	public isHoveringChanged(): void {
		this.isHoveringTimeout = true;
		setTimeout(() => {
			this.isHoveringTimeout = false;
		}, 1000);
	}
}
</script>
