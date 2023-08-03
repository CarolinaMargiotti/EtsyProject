<template>
	<a
		ref="link"
		:href="link"
		class="flex justify-between py-3 hover:bg-gray-200 px-2"
		@mouseenter="hoveredButton"
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
