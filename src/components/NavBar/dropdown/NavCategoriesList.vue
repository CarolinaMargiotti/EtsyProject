<template>
	<section>
		<div class="flex justify-start">
			<div
				:class="`mr-5 py-4 w-96 pr-2 border-r-2 border-gray-200 border-solid h-full`"
			>
				<DropdownComponent
					v-for="(nav, index) in itemArrays.subcategories"
					ref="mainSubcategories"
					:key="index"
					:item="nav"
					:shouldBeActive="shouldHighlightFirst(index)"
					@hoveredButton="hoveredCategory(nav)"
				/>
			</div>
			<div class="flex py-4">
				<div class="w-80">
					<div
						v-for="(
							subCategoryColumn, index
						) in subcategories?.firstColumn"
						:key="index"
					>
						<DropdownComponent :item="subCategoryColumn" />
					</div>
				</div>
				<div class="w-80">
					<div
						v-for="(
							subCategoryColumn, index
						) in subcategories?.secondColumn"
						:key="index"
					>
						<DropdownComponent :item="subCategoryColumn" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { NavCategories, CategoriesList, NavList } from "@/models/ICategories";
import DropdownComponent from "./DropdownComponent.vue";

@Component({
	components: { DropdownComponent },
})
export default class NavCategoriesList extends Vue {
	@Prop()
	public readonly divide!: boolean;

	@Prop()
	public readonly itemArrays!: NavCategories;

	public subcategories: CategoriesList | null = null;
	public didHover: boolean = false;

	mounted(): void {
		//@ts-ignore
		this.subcategories = this.itemArrays.subcategories[1];
	}

	public hoveredCategory(nav: NavList): void {
		this.didHover = true;
		console.log(nav);

		this.subcategories = nav;
	}

	public shouldHighlightFirst(index: number): boolean {
		return index === 1 && !this.didHover;
	}
}
</script>
