<template>
	<header
		class="pt-2 px-headerPad border-b-2 border-solid border-b-lightGray relative bg-white"
		style="z-index: 2"
	>
		<TopBar />
		<nav :class="`flex justify-between`">
			<div
				v-for="(nav, index) in categories"
				:key="index"
				class="pb-3 navbar"
				@mouseover="mouseHoverOnNavLink(index)"
				@mouseleave="mouseOutOnNavLink()"
			>
				<router-link :to="nav.link">{{ nav.text }}</router-link>
			</div>
		</nav>
		<hr
			class="bg-black relative"
			:style="{
				left: offsetValue + 'px',
				width: hoveredNavWidth + 'px',
				transition: 'all 0.5s',
				top: '0.10rem',
				height: '0.20rem',
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
import { Categories } from "@/models/Categories";
import { CategoriesList } from "@/models/ICategories";

@Component({
	components: { Logo, Input, TopBar, DropDownNav },
})
export default class NavBar extends Vue {
	public isHovering: boolean = false;
	public hoveredNav: number = 0;
	public categories: CategoriesList[] = Categories;

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
		const navs: HTMLCollection = document.getElementsByClassName("navbar");
		let widthSizes: number[] = [];
		for (let index = 0; index < navs.length; index++) {
			widthSizes.push(navs[index].clientWidth);
		}
		return widthSizes;
	}

	public get hoveredNavWidth(): number {
		if (!this.isHovering) return 0;
		return this.navWidths[this.hoveredNav];
	}

	public get offsetValue(): number {
		const offsetNavWidths = this.navWidths.slice(0, this.hoveredNav);

		let summed: number = 0;
		offsetNavWidths.forEach((value, index) => {
			summed += value + 58;
		});
		return summed;
	}
}
</script>
