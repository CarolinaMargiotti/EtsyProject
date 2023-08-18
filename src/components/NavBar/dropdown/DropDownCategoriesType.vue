<template>
	<section>
		<div class="flex h-full justify-start">
			<div :class="`w-96`">
				<DropdownButton
					v-for="(nav, index) in itemArrays.subcategories"
					ref="mainSubcategories"
					class="px-4"
					:key="index"
					:item="nav"
					:shouldBeActive="shouldHighlightFirst(index)"
					@hoveredButton="hoveredCategory(nav)"
				/>
			</div>
			<div
				class="bg-gray-300 mr-2 h-96"
				:style="{
					width: '1.45px',
				}"
			></div>
			<div class="flex py-4">
				<CategoryColumn :categories="subcategories?.firstColumn" />
				<CategoryColumn :categories="subcategories?.secondColumn" />
			</div>
		</div>
	</section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
	DropDownCategoriesTypeInterface,
	Subcategories,
} from "@/models/ICategories";
import DropdownButton from "./DropdownButton.vue";
import CategoryColumn from "./CategoryColumn.vue";

@Component({
	components: { DropdownButton, CategoryColumn },
})
export default class DropDownCategoriesType extends Vue {
	@Prop()
	public readonly itemArrays!: DropDownCategoriesTypeInterface;

	public subcategories: Subcategories = {
		link: "",
		text: "",
		type: "",
		firstColumn: [],
	};
	public didHover: boolean = false;

	mounted(): void {
		this.subcategories = (this.itemArrays?.subcategories?.[1] || {
			link: "",
			text: "",
			type: "",
			firstColumn: [],
		}) as Subcategories;
	}

	public hoveredCategory(nav: Subcategories): void {
		this.didHover = true;
		this.subcategories = nav;
	}

	public shouldHighlightFirst(index: number): boolean {
		return index === 1 && !this.didHover;
	}
}
</script>
