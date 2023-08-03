<template>
	<a
		ref="link"
		:href="link"
		class="flex justify-between py-1.5 hover:bg-gray-200 px-2"
		@mouseover="hoveredButton"
	>
		<div>{{ text }}</div>
	</a>
</template>
<script lang="ts">
import NavLinkButtonClass from "./NavLinkButtonClass";
import { Component } from "vue-property-decorator";

@Component({})
export default class NormalButton extends NavLinkButtonClass {}
</script>
