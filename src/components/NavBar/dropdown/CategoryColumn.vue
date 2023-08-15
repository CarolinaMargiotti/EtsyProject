<template>
	<div class="w-80">
		<div v-for="(category, index) in categories" :key="index">
			<DropdownButton :item="category" />
		</div>
	</div>
</template>
<script lang="ts">
import DropdownButton from "./DropdownButton.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { NavItem } from "@/models/ICategories";

@Component({
	components: { DropdownButton },
})
export default class CategoryColumn extends Vue {
	@Prop()
	public categories!: NavItem[];
}
</script>
