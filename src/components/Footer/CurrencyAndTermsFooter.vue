<template>
	<div class="flex justify-center bg-bluePurple py-5 text-white">
		<div class="flex justify-between w-8/12">
			<IconButton class="z-20">
				<div class="font-bold">
					{{ country }} | {{ language }} | $({{ currency }})
				</div>
			</IconButton>
			<div class="flex justify-evenly">
				<span class="mr-5">@ 2023 Etsy, Inc.</span>
				<a href="#" class="underline">Terms of Use</a>
				<a href="#" class="underline mr-5">Privacy</a>
				<a href="#" class="underline mr-5">Interest-based-ads</a>
				<a href="#" class="underline mr-5">Local Shops</a>
				<a href="#" class="underline">Regions</a>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import IconButton from "../IconButton.vue";

@Component({ components: { IconButton } })
export default class CurrencyAndTermsFooter extends Vue {
	public country: string = "Canada";
	public language: string = "English (UK)";
	public currency: string = "CAD";
}
</script>
