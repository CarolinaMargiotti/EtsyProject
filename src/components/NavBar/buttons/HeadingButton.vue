<template>
	<a
		ref="link"
		:href="link"
		class="flex justify-between pb-2 text-sm font-semibold hover:bg-gray-200 px-2"
		@mouseover="hoveredButton"
		@click="clickedButton"
	>
		{{ text }}
	</a>
</template>
<script lang="ts">
import { Component } from "vue-property-decorator";
import NavLinkButtonClass from "./NavLinkButtonClass";

@Component({})
export default class HeadingButton extends NavLinkButtonClass {}
</script>
