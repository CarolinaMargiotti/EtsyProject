<template>
	<button
		class="outlineButton border-2 border-black rounded-full font-bold py-3 px-4 transition-all hover:shadow-xl"
		@click="buttonClicked"
	>
		{{ buttonText }}
	</button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
	components: {},
})
export default class OutlinedButton extends Vue {
	@Prop()
	public buttonText!: string;

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
