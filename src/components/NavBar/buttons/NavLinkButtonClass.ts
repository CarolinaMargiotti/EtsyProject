import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class ArrowButton extends Vue {
	@Prop()
	public readonly text!: string;

	@Prop()
	public readonly link!: string;

	public hoveredButton(): void {
		this.$emit("hoveredButton");
	}

	public clickedButton(): void {
		this.$emit("clickedButton");
	}
}
