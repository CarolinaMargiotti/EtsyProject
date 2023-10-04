<template>
	<footer>
		<div class="bg-toastedYellow w-full flex items-center flex-col">
			<TopBeigeRippedPaper class="w-full mb-7" style="height: 24px" />
			<BeigeFooterContentVue />
			<TopBlueRippedPaper class="w-9/12 -m-1" />
			<div class="bg-lightBlue w-full text-center font-bold pt-10">
				<div>
					Yes! Send me exclusive offers, unique gift ideas, and
					personalized tips for shopping and selling on Etsy.
				</div>
				<OutlinedButton class="mt-4 mb-8" buttonText="Subscribe" />
			</div>
			<div class="w-full bg-darkerBlue pb-4">
				<TopDarkerBlueRippedPaper class="w-full" style="height: 24px" />
				<div
					class="w-full text-center flex justify-center items-end text-white cursor-help underline decoration-dashed mt-4"
				>
					<RenewableIcon class="h-10 mr-2" />
					<span> Etsy is powered by 100% renewable eletricity. </span>
				</div>
			</div>
		</div>
	</footer>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopBeigeRippedPaper from "@/components/Footer/svgs/TopBeigeRippedPaper.vue";
import TopBlueRippedPaper from "@/components/Footer/svgs/TopBlueRippedPaper.vue";
import TopDarkerBlueRippedPaper from "@/components/Footer/svgs/TopDarkerBlueRippedPaper.vue";
import BeigeFooterContentVue from "./BeigeFooterContent.vue";
import OutlinedButton from "../OutlinedButton.vue";
import RenewableIcon from "./svgs/RenewableIcon.vue";

@Component({
	components: {
		TopBeigeRippedPaper,
		TopBlueRippedPaper,
		TopDarkerBlueRippedPaper,
		BeigeFooterContentVue,
		OutlinedButton,
		RenewableIcon,
	},
})
export default class Footer extends Vue {}
</script>
