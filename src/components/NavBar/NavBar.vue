<template>
	<header
		class="pt-2 px-headerPad border-b-2 border-solid border-b-lightGray relative bg-white"
		style="z-index: 2"
	>
		<TopBar />
		<nav :class="`flex justify-between`">
			<div
				v-for="(nav, index) in navOptions"
				:key="index"
				class="pb-3"
				@mouseover="mouseHoverOnNavLink(index)"
				@mouseleave="mouseOutOnNavLink()"
			>
				<router-link :to="nav.url">{{ nav.name }}</router-link>
			</div>
		</nav>
		<DropDownNav
			:hoveredNav="hoveredNav"
			:shouldShow="shouldShowDropDown"
			:divide="true"
		/>
	</header>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "../Logo.vue";
import Input from "./SearchBar.vue";
import TopBar from "./TopBar.vue";
import DropDownNav from "./DropDownNav.vue";

@Component({
	components: { Logo, Input, TopBar, DropDownNav },
})
export default class NavBar extends Vue {
	public hoveredNav: number = -1;

	public mouseHoverOnNavLink(index: number) {
		this.hoveredNav = index;
	}

	mouseOutOnNavLink() {
		setTimeout(() => {
			this.hoveredNav = -1;
		}, 1000);
	}

	public get shouldShowDropDown() {
		return this.hoveredNav != -1;
	}

	public navOptions = [
		{
			url: "/",
			name: "Jewelry & Accessories",
		},
		{
			url: "/",
			name: "Clothing & Shoes",
		},
		{
			url: "/",
			name: "Home & Living",
		},
		{
			url: "/",
			name: "Wedding & Party",
		},
		{
			url: "/",
			name: "Toys & Entertainment",
		},
		{
			url: "/",
			name: "Art & Collectibles",
		},
		{
			url: "/",
			name: "Craft Supplies & Tools",
		},
		{
			url: "/",
			name: "Vintage",
		},
	];
}
</script>
