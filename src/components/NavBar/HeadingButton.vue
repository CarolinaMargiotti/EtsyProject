<template>
	<a
		:href="link"
		class="flex justify-between pb-2 text-base font-bold"
		@mouseover="hoveredButton"
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
