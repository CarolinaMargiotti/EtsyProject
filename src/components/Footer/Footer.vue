<template>
	<footer>
		<div class="bg-toastedYellow w-full flex items-center flex-col">
			<TopBeigeRippedPaper />
			halloo
			<TopBlueRippedPaper class="w-1/2" />
			<div class="bg-lightBlue w-full">teste</div>
			<div class="w-full bg-darkerBlue">
				<TopDarkerBlueRippedPaper />
				eep
			</div>
		</div>
	</footer>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopBeigeRippedPaper from "@/components/Footer/svgs/TopBeigeRippedPaper.vue";
import TopBlueRippedPaper from "@/components/Footer/svgs/TopBlueRippedPaper.vue";
import TopDarkerBlueRippedPaper from "@/components/Footer/svgs/TopDarkerBlueRippedPaper.vue";

@Component({
	components: {
		TopBeigeRippedPaper,
		TopBlueRippedPaper,
		TopDarkerBlueRippedPaper,
	},
})
export default class Footer extends Vue {}
</script>
