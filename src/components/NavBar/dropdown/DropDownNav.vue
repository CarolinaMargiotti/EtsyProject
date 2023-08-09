<template>
	<section
		v-if="isDropDownVisible && navOptions?.subcategories"
		class="shadow-2xl rounded w-4/6 absolute px-4"
		@mouseenter="hoveringDropdownMouseEnter"
		@mouseleave="hoveringDropdownMouseLeave"
	>
		<NavCategoriesList :divide="true" :itemArrays="navOptions" />
	</section>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import NavCategoriesList from "./NavCategoriesList.vue";
import { Categories } from "@/models/Categories";
import { NavCategories } from "@/models/ICategories";

@Component({
	components: { NavCategoriesList },
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

	public get navOptions(): NavCategories {
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

	@Watch("shouldShow")
	public isHoveringChanged(): void {
		this.isHoveringTimeout = true;
		setTimeout(() => {
			this.isHoveringTimeout = false;
		}, 1000);
	}
}
</script>
