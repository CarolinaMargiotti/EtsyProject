<template>
	<div class="py-3 px-2 linkButton" @mouseover="hoveredButton">
		<a class="font-bold" :href="link">{{ text }} </a>
	</div>
</template>
<script lang="ts">
import { Component } from "vue-property-decorator";
import NavLinkButtonClass from "./NavLinkButtonClass";

@Component({})
export default class LinkButton extends NavLinkButtonClass {}
</script>
<style>
.linkButton::after {
	content: "\2192";
	font-size: large;
	transition: margin 0.1s ease-in-out;
}

.linkButton:hover::after {
	margin-left: 0.25rem;
}
</style>
