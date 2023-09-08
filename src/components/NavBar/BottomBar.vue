<template>
	<div class="hidden lg:block">
		<nav id="navCollection" class="flex justify-between pb-3">
			<div
				v-for="(nav, index) in categories"
				:key="index"
				class="navbar"
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
				width: currentActiveNavWidth + 'px',
				transition: 'all 0.5s',
				top: '0.10rem',
				height: '0.20rem',
			}"
		/>
		<DropDownNav
			:hoveredNav="hoveredNav"
			:shouldShow="isHovering"
			@dropdownHoverChanged="isDropdownHoveringChanged"
		/>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DropDownNav from "./dropdown/DropDownNav.vue";

import { Categories } from "@/models/Categories";
import {
	DropDownCategoriesTypeInterface,
	DropDownThreeListsInterface,
} from "@/models/ICategories";

@Component({ components: { DropDownNav } })
export default class BottomBar extends Vue {
	public isHovering: boolean = false;
	public hoveredNav: number = 0;
	public timeoutOff: boolean = false;
	public categories:
		| DropDownCategoriesTypeInterface[]
		| DropDownThreeListsInterface[] = Categories;

	public isDropdownHovering: boolean = false;

	public offsetValue: number = 0;
	public currentActiveNavWidth: number = 0;

	public navWidths: number[] = [];

	mounted(): void {
		this.calculateNavsWidths();
		this.updateBars();
	}

	public calculateNavsWidths(): void {
		const navs: HTMLCollection = document.getElementsByClassName("navbar");
		let widthSizes: number[] = [];
		for (let index = 0; index < navs.length; index++) {
			widthSizes.push(navs[index].clientWidth);
		}
		this.navWidths = widthSizes;
	}

	public isDropdownHoveringChanged(value: boolean): void {
		this.isDropdownHovering = value;
		this.updateHoveredNavWidth();
	}

	public mouseHoverOnNavLink(index: number): void {
		this.timeoutOff = false;
		this.isHovering = true;
		this.hoveredNav = index;
		this.updateBars();
	}

	public mouseOutOnNavLink(): void {
		this.isHovering = false;
		this.currentActiveNavWidth = 0;

		setTimeout(() => {
			this.timeoutOff = true;
		}, 2000);
	}

	public calculateSpanDividerWidth(): number {
		const navCollection: HTMLElement | null =
			document.getElementById("navCollection");

		if (!navCollection?.clientWidth) return 58;

		const totalNavbarWidth = navCollection?.clientWidth;
		const totalNavsWidth = this.navWidths.reduce(
			(acc, currentValue) => acc + currentValue,
			0
		);

		const spanDividersTotalWidth: number =
			totalNavbarWidth - totalNavsWidth;
		const spanDividerWidth: number =
			spanDividersTotalWidth / (this.navWidths.length - 1);

		return spanDividerWidth;
	}

	public updateBars(): void {
		this.updateHoveredNavWidth();
		this.updateOffsetValue();
	}

	public updateHoveredNavWidth(): void {
		if (!this.isHovering && !this.isDropdownHovering) {
			this.currentActiveNavWidth = 0;
			return;
		}
		this.currentActiveNavWidth = this.navWidths[this.hoveredNav];
	}

	public updateOffsetValue(): void {
		const offsetNavWidths = this.navWidths.slice(0, this.hoveredNav);
		const spanDividerWidth = this.calculateSpanDividerWidth();

		let summed: number = 0;
		offsetNavWidths.forEach((value, index) => {
			summed += value + spanDividerWidth;
		});
		this.offsetValue = summed;
	}
}
</script>
