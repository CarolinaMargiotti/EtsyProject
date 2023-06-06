<template>
	<a
		:href="link"
		class="flex justify-between py-1.5"
		@mouseover="hoveredButton"
	>
		<div>{{ text }}</div>
		<i class="fa-regular fa-chevron-right"></i>
	</a>
</template>
<script lang="ts">
import NavLinkButtonClass from "./NavLinkButtonClass";
import { Component } from "vue-property-decorator";

@Component({})
export default class ArrowButton extends NavLinkButtonClass {}
</script>
