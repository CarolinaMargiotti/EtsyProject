<template>
	<div class="w-full">
		<div @click="changeContentShow">
			<IconButton class="z-10 w-full px-4 py-2" :fitFormingHover="true">
				<div
					class="flex justify-between w-full text-lg font-bold items-center"
				>
					<slot name="title"></slot>
					<div>
						<div v-show="!showContent">
							<i class="fas fa-chevron-down"></i>
						</div>
						<div v-show="showContent">
							<i class="fas fa-chevron-up"></i>
						</div>
					</div>
				</div>
			</IconButton>
		</div>
		<div class="overflow-hidden transition-all">
			<div v-if="showContent" class="px-5 mt-2 appearContent">
				<slot name="content"></slot>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import IconButton from "./IconButton.vue";

@Component({ components: { IconButton } })
export default class Dropdown extends Vue {
	public showContent: boolean = false;

	public changeContentShow(): void {
		this.showContent = !this.showContent;
	}
}
</script>
<style>
.appearContent {
	animation: dropdownContent 0.3s ease-in-out;
}

@keyframes dropdownContent {
	0% {
		opacity: 0;
		transform: translateY(-100%);
	}

	100% {
		opacity: 1;
		transform: translateY(0%);
	}
}
</style>
