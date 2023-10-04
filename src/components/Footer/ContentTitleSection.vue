<template>
	<div class="leading-6 text-center lg:text-start">
		<h3 class="font-bold text-2xl pb-5">{{ title }}y</h3>
		<slot></slot>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ContentTitleSection extends Vue {
	@Prop()
	public title!: string;
}
</script>
