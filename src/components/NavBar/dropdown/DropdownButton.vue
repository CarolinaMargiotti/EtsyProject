<template>
	<component
		class="px-2"
		:class="{ 'bg-gray-200': shouldBeActive }"
		:is="navTypes[item.type]"
		v-bind="{
			text: item.text,
			link: item.link,
		}"
		@hoveredButton="componentHovered"
	></component>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import LinkButton from "../buttons/LinkButton.vue";
import ArrowButton from "../buttons/ArrowButton.vue";
import HeadingButton from "../buttons/HeadingButton.vue";
import NormalButton from "../buttons/NormalButton.vue";
import { NavItem } from "@/models/ICategories";

interface ClassTypes {
	link: string;
	arrow: string;
	heading: string;
	normal: string;
}

interface ClassTypes {
	[key: string]: string;
}

@Component({
	components: { LinkButton, ArrowButton, HeadingButton, NormalButton },
})
export default class DropdownComponent extends Vue {
	@Prop()
	public readonly item!: NavItem;

	@Prop()
	public readonly shouldBeActive!: boolean;

	navTypes: ClassTypes = {
		link: "LinkButton",
		arrow: "ArrowButton",
		heading: "HeadingButton",
		normal: "NormalButton",
	};

	public componentHovered(): void {
		this.$emit("hoveredButton", this.item);
	}
}
</script>
