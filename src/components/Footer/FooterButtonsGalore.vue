<template>
	<div>
		<OutlinedButton class="w-auto mt-6" :themeWhite="false">
			<div class="md:flex items-center">
				<span
					class="text-grayBlue bg-white px-2 py-1 rounded w-fit mr-2"
				>
					<i class="fa-brands fa-etsy"></i>
				</span>
				<div class="mt-2 md:mt-0">Download the Etsy App</div>
			</div>
		</OutlinedButton>
		<div class="grid socialMediaGrid text-3xl mt-5">
			<div>
				<IconButton class="z-20 w-max">
					<i class="hover:cursor-pointer fa-brands fa-instagram"></i>
				</IconButton>
			</div>
			<div>
				<IconButton class="z-20 w-max">
					<i
						class="hover:cursor-pointer fa-brands fa-square-facebook"
					></i>
				</IconButton>
			</div>
			<div>
				<IconButton class="z-20 w-max">
					<i class="hover:cursor-pointer fa-brands fa-pinterest"></i>
				</IconButton>
			</div>
			<div>
				<IconButton class="z-20 w-max">
					<i class="hover:cursor-pointer fa-brands fa-twitter"></i>
				</IconButton>
			</div>
			<div>
				<IconButton class="z-20 w-max">
					<i class="hover:cursor-pointer fa-brands fa-youtube"></i>
				</IconButton>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import OutlinedButton from "../OutlinedButton.vue";

@Component({ components: { OutlinedButton } })
export default class FooterButtonsGalore extends Vue {}
</script>
<style>
.socialMediaGrid {
	grid-template-columns: repeat(auto-fit, minmax(2rem, 3rem));
	grid-template-rows: repeat(auto-fit, minmax(1rem, 3rem));
}
</style>
