<template>
	<section>
		<div class="flex ml-4 pt-4">
			<CategoryColumn :categories="itemArrays?.firstColumn" />
			<CategoryColumn :categories="itemArrays?.secondColumn" />
			<CategoryColumn :categories="itemArrays?.thirdColumn" />
		</div>
	</section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { DropDownThreeListsInterface } from "@/models/ICategories";
import CategoryColumn from "./CategoryColumn.vue";

@Component({
	components: { CategoryColumn },
})
export default class DropDownThreeLists extends Vue {
	@Prop()
	public readonly divide!: boolean;

	@Prop()
	public readonly itemArrays!: DropDownThreeListsInterface;
}
</script>
