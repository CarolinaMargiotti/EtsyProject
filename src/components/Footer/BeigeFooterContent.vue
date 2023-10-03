<template>
	<div class="w-full flex flex-col items-center mb-12">
		<h2 class="text-4xl">What is Etsy?</h2>
		<a href="#" class="underline"> Read our wonderfully weird story </a>
		<div class="grid grid-cols-3 mt-10 w-8/12">
			<h3 class="font-bold text-2xl pb-5">A community doing good</h3>
			<h3 class="font-bold text-2xl pb-5">
				Support independent creators
			</h3>
			<h3 class="font-bold text-2xl pb-5">Peace of mind</h3>
			<div class="leading-6">
				Etsy is a global online marketplace, where people come together
				to make, sell, buy, and collect unique items. We’re also a
				community pushing for positive change for small businesses,
				people, and the planet.
				<div class="underline decoration-dashed cursor-help">
					Here are some of the ways we’re making a positive impact,
					together.
				</div>
			</div>
			<div class="leading-6">
				There’s no Etsy warehouse – just millions of people selling the
				things they love. We make the whole process easy, helping you
				connect directly with makers to find something extraordinary.
			</div>
			<div class="leading-6">
				Your privacy is the highest priority of our dedicated team. And
				if you ever need assistance, we are always ready to step in for
				support.
			</div>
		</div>
		<div class="mt-12 text-center">
			<h4 class="font-bold text-xl mb-4">
				Have a question? Well, We've got some answers
			</h4>
			<OutlinedButton class="text-sm" buttonText="Go to Help Center" />
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import OutlinedButton from "../OutlinedButton.vue";

@Component({
	components: { OutlinedButton },
})
export default class BeigeFooterContent extends Vue {}
</script>
