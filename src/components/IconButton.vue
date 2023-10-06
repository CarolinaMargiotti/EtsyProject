<template>
	<div
		class="iconHover flex items-center mx-1"
		:class="{ 'justify-between': hasCaret }"
	>
		<slot />
		<i
			v-if="hasCaret"
			class="ml-2 fa-solid text-gray-400 fa-caret-down"
		></i>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class IconButton extends Vue {
	@Prop({ default: false })
	public hasCaret?: boolean;
}
</script>
<style>
.iconHover {
	position: relative;
	transition: background-color 0.3s ease;
}

.iconHover::before {
	content: "";
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0.5;
	background-color: lightgrey;
	border-radius: 40rem;
	transform: scale(0%);
	transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	z-index: -1;
}

.iconHover:hover::before {
	transform: scale(180%);
}
</style>
