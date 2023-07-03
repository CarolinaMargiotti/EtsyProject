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
		<hr
			class="h-1 bg-black relative"
			:style="{
				left: offsetValue + 'px',
				width: hoveredNavWidth + 'px',
				transition: 'all 0.5s',
			}"
		/>
		<DropDownNav
			:hoveredNav="hoveredNav"
			:shouldShow="isHovering"
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
	public isHovering: boolean = false;
	public hoveredNav: number = 0;

	public mouseHoverOnNavLink(index: number): void {
		this.isHovering = true;
		this.hoveredNav = index;
	}

	mouseOutOnNavLink(): void {
		setTimeout(() => {
			this.isHovering = false;
		}, 2000);
	}

	public get navWidths(): number[] {
		return this.navOptions.map((item) => {
			return item.name.length * 7.2;
		});
	}

	public get hoveredNavWidth(): number {
		if (!this.isHovering) return 0;
		return this.navWidths[this.hoveredNav];
	}

	public get offsetValue(): number {
		const offsetNavWidths = this.navWidths.slice(0, this.hoveredNav);

		let summed = 0;
		offsetNavWidths.forEach((value, index) => {
			summed += value + (60 - 1.18 * index);
		});
		return summed;
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
