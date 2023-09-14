<template>
	<div
		class="lg:hidden fixed bg-transparentBlack h-full w-full box-content z-30"
	>
		<div class="bg-white mt-32 h-full">
			<div class="pt-1">
				<div class="font-bold text-center mt-4 grid grid-cols-3">
					<div class="text-start pl-3">
						<button @click="goToPrevious()">
							<i class="fa-solid fa-chevron-left"></i>
						</button>
					</div>
					<div class="col-start-2 text-xl">Browse Categories</div>
					<div class="text-end pr-3">
						<button @click="closeModal()">
							<i class="fa-solid fa-x"></i>
						</button>
					</div>
					<div class="col-span-3">
						<ArrowButton
							v-for="(category, index) in displayCategories"
							:key="index"
							:text="category.text"
							link="#"
							@clickedButton="changeCategory(category)"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Categories } from "@/models/Categories";
import {
	DropDownCategoriesTypeInterface,
	DropDownThreeListsInterface,
} from "@/models/ICategories";
import ArrowButton from "./buttons/ArrowButton.vue";

@Component({ components: { ArrowButton } })
export default class NavModal extends Vue {
	public categories: (
		| DropDownCategoriesTypeInterface[]
		| DropDownThreeListsInterface[]
	)[] = [Categories];

	public closeModal(): void {
		this.$emit("closeModal");
	}

	public goToPrevious(): void {
		this.categories.pop();
	}

	public changeCategory(category: any): void {
		if (category?.subcategories) {
			this.categories.push(category?.subcategories);
			return;
		} else {
			this.categories.push(
				...category?.firstColumn,
				...category?.secondColumn,
				...category?.thirdColumn
			);
			return;
		}
	}

	get displayCategories():
		| DropDownCategoriesTypeInterface[]
		| DropDownThreeListsInterface[] {
		return this.categories[this.categories.length - 1];
	}
}
</script>
