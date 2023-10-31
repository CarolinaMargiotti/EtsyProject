<template>
	<div class="flex justify-center bg-grayBlue">
		<div
			class="text-white grid linksGrid gap-16 pt-10 pb-7 px-7 lg:w-9/12 w-full"
		>
			<div v-for="(footer, index) in footers" :key="index">
				<ul class="hidden sm:inline">
					<li class="mb-5">
						<h5 class="font-bold text-base">{{ footer.title }}</h5>
					</li>
					<div class="grid grid-cols-1 gap-4 justify-between">
						<li
							v-for="(subfooter, index) in footer.links"
							:key="index"
						>
							<a :href="subfooter.url" class="hover:underline">{{
								subfooter.title
							}}</a>
						</li>
						<div v-if="footer.title === 'Help'">
							<FooterButtonsGalore />
						</div>
					</div>
				</ul>
				<Dropdown class="sm:hidden">
					<template v-slot:title>{{ footer.title }}</template>
					<template v-slot:content>
						<ul class="grid grid-cols-1 gap-7">
							<li
								v-for="(subfooter, index) in footer.links"
								:key="index"
							>
								<a :href="subfooter.url">
									{{ subfooter.title }}
								</a>
							</li>
						</ul>
					</template>
				</Dropdown>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import OutlinedButton from "../OutlinedButton.vue";
import { FooterLinks } from "@/models/FooterLinks";
import { IFooterLinks } from "@/models/IFooterLinks";
import FooterButtonsGalore from "./FooterButtonsGalore.vue";
import Dropdown from "../Dropdown.vue";

@Component({
	components: { OutlinedButton, FooterButtonsGalore, Dropdown },
})
export default class LinksFooter extends Vue {
	public footers: IFooterLinks[] = FooterLinks;
}
</script>
<style>
.linksGrid {
	grid-template-columns: repeat(3, minmax(0, 1fr)) 1.5fr;
}

@media (max-width: 639px) {
	.linksGrid {
		grid-template-columns: 1fr;
	}
}
</style>
