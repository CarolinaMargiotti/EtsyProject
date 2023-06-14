<template>
	<section>
		<div class="flex justify-start">
			<div
				:class="`mr-5 py-4 w-96 pr-2 border-r-2 border-gray-200 border-solid h-full`"
			>
				<component
					v-for="(nav, index) in itemArrays.subcategories"
					:key="index"
					:class="{ 'bg-gray-200': shouldHighlightFirst(index) }"
					:is="navTypes[nav.type]"
					v-bind="{
						text: nav.text,
						link: nav.link,
					}"
					@hoveredButton="hoveredCategory(nav)"
				></component>
			</div>
			<div
				class="w-80 py-4"
				v-for="(subCategoryColumn, index) in subcategories"
				:key="index"
			>
				<div
					v-for="(subCategoriesItem, index) in subCategoryColumn"
					:key="index"
				>
					<component
						class="px-2"
						:key="index"
						:is="navTypes[subCategoriesItem.type]"
						v-bind="{
							text: subCategoriesItem.text,
							link: subCategoriesItem.link,
						}"
					></component>
				</div>
			</div>
		</div>
	</section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LinkButton from "./LinkButton.vue";
import ArrowButton from "./ArrowButton.vue";
import HeadingButton from "./HeadingButton.vue";
import NormalButton from "./NormalButton.vue";
import { CategoriesList } from "@/models/ICategories";

@Component({
	components: { LinkButton, ArrowButton, HeadingButton, NormalButton },
})
export default class NavItemList extends Vue {
	@Prop()
	public readonly divide!: boolean;

	@Prop()
	public readonly itemArrays!: CategoriesList;

	public subcategories: CategoriesList | null = null;
	public didHover: boolean = false;

	public navTypes: {
		link: string;
		arrow: string;
		heading: string;
		normal: string;
	} = {
		link: "LinkButton",
		arrow: "ArrowButton",
		heading: "HeadingButton",
		normal: "NormalButton",
	};

	mounted() {
		//@ts-ignore
		this.subcategories = this.itemArrays.subcategories[1].subcategories;
	}

	public divideClass(index: number) {
		return this.divide && index == 0
			? "border-r-2 border-black border-solid "
			: "";
	}

	public hoveredCategory(nav: any) {
		this.didHover = true;
		this.subcategories = nav.subcategories;
	}

	public shouldHighlightFirst(index: number) {
		return index === 1 && !this.didHover;
	}
}
</script>
