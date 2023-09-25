<template>
	<div
		v-if="isModalOpen"
		class="lg:hidden backgroundFadeInAnimation fixed bg-transparentBlack h-full w-full box-content z-30"
		id="navModal"
	>
		<div
			class="moveUp bg-white mt-32 h-full overflow-scroll"
			id="modalContent"
		>
			<div class="pt-1">
				<div class="font-bold text-center mt-4 grid grid-cols-3">
					<div class="text-start pl-3">
						<button
							v-if="shouldShowPreviousArrow"
							@click="goToPrevious()"
						>
							<i class="fa-solid fa-chevron-left"></i>
						</button>
					</div>
					<div class="text-xl">
						{{ modalTitle }}
					</div>
					<div class="text-end pr-3">
						<button @click="closeModal()">
							<i class="fa-solid fa-x"></i>
						</button>
					</div>
					<div class="col-span-3 mb-28">
						<div
							v-for="(category, index) in displayCategories"
							:key="index"
						>
							<ArrowButton
								v-if="hasSubcategories(category)"
								:link="category.link"
								:text="category.text"
								@clickedButton="changeCategory(category)"
							/>
							<DropdownButton
								v-else
								class="mb-5"
								:item="category"
								@clickedButton="changeCategory(category)"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Categories } from "@/models/Categories";
import {
	DropDownCategoriesTypeInterface,
	DropDownThreeListsInterface,
} from "@/models/ICategories";
import DropdownButton from "@/components/NavBar/dropdown/DropdownButton.vue";
import ArrowButton from "./buttons/ArrowButton.vue";

@Component({ components: { DropdownButton, ArrowButton } })
export default class NavModal extends Vue {
	@Prop()
	public shouldShowModal!: boolean;

	public isModalOpen: boolean = false;

	public categories: (
		| DropDownCategoriesTypeInterface[]
		| DropDownThreeListsInterface[]
	)[] = [Categories];

	private columnNames: string[] = [
		"firstColumn",
		"secondColumn",
		"thirdColumn",
	];

	public changeCategory(category: any): void {
		if (category?.subcategories) {
			this.categories.push(category?.subcategories);
			return;
		} else if (category?.firstColumn) {
			let dataToPush:
				| DropDownCategoriesTypeInterface[]
				| DropDownThreeListsInterface[] = [];

			this.columnNames.forEach((column) => {
				if (!category?.[column]) return;
				dataToPush = [...dataToPush, ...category[column]];
			});

			if (!dataToPush) return;
			this.categories.push([...dataToPush]);
			return;
		}
	}

	public goToPrevious(): void {
		this.categories.pop();
	}

	public closeModal(): void {
		const navModal = document.getElementById("navModal");
		navModal?.classList.add("backgroundFadeOutAnimation");

		const modalContent = document.getElementById("modalContent");
		modalContent?.classList.add("moveDown");

		setTimeout(() => {
			this.$emit("closeModal");
		}, 95);
	}

	public hasSubcategories(category: any) {
		return category?.subcategories || category?.firstColumn;
	}

	get displayCategories():
		| DropDownCategoriesTypeInterface[]
		| DropDownThreeListsInterface[] {
		if (this.isNoCategoriesSelected) return this.categories[0];
		const lastCategory = this.categories[this.categories.length - 1];
		return lastCategory.slice(1, -1);
	}

	get isNoCategoriesSelected(): boolean {
		return this.categories.length === 1;
	}

	get categoriesTitle(): string {
		return this.categories[this.categories.length - 1][0].text;
	}

	get shouldShowPreviousArrow(): boolean {
		return !this.isNoCategoriesSelected;
	}

	get modalTitle(): string {
		return this.isNoCategoriesSelected
			? "Browse Categories"
			: this.categoriesTitle;
	}

	@Watch("shouldShowModal")
	public shouldShowModalChanged(): void {
		this.isModalOpen = this.shouldShowModal;
	}
}
</script>
