<template>
	<div>
		<IconButton>
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
