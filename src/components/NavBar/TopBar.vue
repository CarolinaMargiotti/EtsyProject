<template>
	<section class="pb-3 flex justify-between">
		<Logo class="mr-2" />
		<SearchBar />
		<div class="w-20 flex justify-center items-center iconHover">
			<i class="h-5 far fa-heart z-10"></i>
		</div>
		<div
			class="w-28 flex justify-center grow relative content-between items-center iconHover"
		>
			<span
				class="notification absolute top-0 right-0 w-6 h-6 pt-1 text-center bg-orange-300 rounded-full border-white border-2"
				>7</span
			>
			<i class="far h-5 fa-bell"></i>
			<i class="ml-3 fa-solid text-gray-400 fa-caret-down"></i>
		</div>
		<div class="flex justify-center items-center w-28 iconHover">
			<img
				src="@/assets/img/default-profile-icon.jpg"
				width="30px"
				height="30px"
				class="rounded-full"
				alt="default icon profile"
			/>
			<i class="ml-3 fa-solid text-gray-400 fa-caret-down"></i>
		</div>
		<div class="flex justify-center items-center w-20 iconHover">
			<i class="h-5 far fa-heart"></i>
		</div>
	</section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchBar from "./SearchBar.vue";
import Logo from "../Logo.vue";

@Component({ components: { SearchBar, Logo } })
export default class TopBar extends Vue {}
</script>
<style>
.iconHover {
	position: relative;
	transition: background-color 0.3s ease;
}

.iconHover::before {
	content: "";
	position: absolute;
	width: 80%;
	height: 80%;
	opacity: 0.5;
	background-color: lightgrey;
	border-radius: 40rem;
	transform: scale(0%);
	transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	z-index: -1;
}

.iconHover:hover::before {
	transform: scale(100%);
}
</style>
