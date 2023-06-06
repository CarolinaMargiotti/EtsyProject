<template>
	<section
		class="bg-green-400 rounded w-4/6 absolute p-4 mt-3.5"
		style="min-height: 500px"
	>
		<NavItemList :divide="true" :itemArrays="navOptions" />
	</section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NavItemList from "./NavItemList.vue";
import { Categories } from "@/models/Categories";

@Component({
	components: { NavItemList },
})
export default class DropDownNav extends Vue {
	public navOptions = Categories[0];
}
</script>
