<template>
	<section>
		<div class="flex py-4">
			<div class="w-80">
				<div
					v-for="(
						subCategoryColumn, index
					) in itemArrays?.firstColumn"
					:key="index"
				>
					<DropdownButton :item="subCategoryColumn" />
				</div>
			</div>
			<div class="w-80">
				<div
					v-for="(
						subCategoryColumn, index
					) in itemArrays?.secondColumn"
					:key="index"
				>
					<DropdownButton :item="subCategoryColumn" />
				</div>
			</div>
			<div class="w-80">
				<div
					v-for="(
						subCategoryColumn, index
					) in itemArrays?.thirdColumn"
					:key="index"
				>
					<DropdownButton :item="subCategoryColumn" />
				</div>
			</div>
		</div>
	</section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { DropDownThreeListsInterface } from "@/models/ICategories";
import DropdownButton from "./DropdownButton.vue";

@Component({
	components: { DropdownButton },
})
export default class DropDownThreeLists extends Vue {
	@Prop()
	public readonly divide!: boolean;

	@Prop()
	public readonly itemArrays!: DropDownThreeListsInterface;
}
</script>
