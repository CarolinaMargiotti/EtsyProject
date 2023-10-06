<template>
	<button
		class="outlineButton border-2 rounded-full font-bold py-1 px-4 transition-all hover:shadow-xl"
		:class="{
			'border-black': themeWhite,
			'border-white': !themeWhite,
			'text-black': themeWhite,
			'text-white': !themeWhite,
		}"
		@click="buttonClicked"
	>
		<slot></slot>
	</button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
	components: {},
})
export default class OutlinedButton extends Vue {
	@Prop({ default: true })
	public themeWhite?: boolean;

	public buttonClicked(): void {
		this.$emit("buttonClicked");
	}
}
</script>
<style>
.outlineButton {
	transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.outlineButton:hover {
	transform: scale(103%);
}
</style>
