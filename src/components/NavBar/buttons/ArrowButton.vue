<template>
	<a
		ref="link"
		:href="link"
		class="flex justify-between py-3 hover:bg-gray-200 px-2"
		@mouseenter="hoveredButton"
		@click="clickedButton"
	>
		<div>{{ text }}</div>
		<i class="fas fa-chevron-right"></i>
	</a>
</template>
<script lang="ts">
import NavLinkButtonClass from "./NavLinkButtonClass";
import { Component } from "vue-property-decorator";

@Component({})
export default class ArrowButton extends NavLinkButtonClass {}
</script>
