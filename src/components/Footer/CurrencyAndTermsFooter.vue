<template>
	<div class="flex justify-center bg-bluePurple py-5 text-white">
		<div
			class="flex lg:justify-between items-center flex-col lg:flex-row lg:w-8/12"
		>
			<IconButton class="z-20 w-max px-5 py-2">
				<div class="font-bold">
					{{ country }} | {{ language }} | $({{ currency }})
				</div>
			</IconButton>
			<div
				class="flex flex-col md:flex-row items-center md:items-start mt-4 text-xs lg:mt-0"
			>
				<span class="lg:mr-5 mb-1 w-max">@ 2023 Etsy, Inc.</span>
				<div class="flex justify-evenly">
					<a href="#" class="underline md:mr-5 mr-2">Terms of Use</a>
					<a href="#" class="underline md:mr-5 mr-2">Privacy</a>
					<a href="#" class="underline md:mr-5 mr-2"
						>Interest-based-ads</a
					>
					<a href="#" class="underline md:mr-5 mr-2">Local Shops</a>
					<a href="#" class="underline">Regions</a>
				</div>
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
