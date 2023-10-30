<template>
	<div class="w-full">
		<IconButton class="z-10 w-full" :fitFormingHover="true">
			<slot name="title"></slot>
		</IconButton>
		<slot name="content"></slot>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import IconButton from "./IconButton.vue";

@Component({ components: { IconButton } })
export default class Dropdown extends Vue {}
</script>
