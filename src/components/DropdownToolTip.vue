<template>
	<div
		class="dropdownTooltip bg-white rounded-lg"
		:class="{ blueTooltipTip: tooltipColorIsBlue }"
	>
		<div class="dropdownItems">
			<ProfiledropdownContent />
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import NotificationDropdownContent from "./Header/NotificationDropdownContent.vue";
import ProfiledropdownContent from "./Header/ProfiledropdownContent.vue";

@Component({
	components: { ProfiledropdownContent },
})
export default class DropdownToolTip extends Vue {
	@Prop()
	public tooltipColorIsBlue!: boolean;
}
</script>
<style>
.dropdownTooltip {
	position: absolute;
	width: max-content;
	transform: translateY(1rem);
	box-shadow: 0px 0px 2px black;
	top: 100%;
	right: -32%;
}

.dropdownTooltip::after {
	content: "";
	position: absolute;
	border-top: 1px solid gray;
	border-left: 1px solid gray;
	top: 0;
	right: 22%;
	transform: translateY(-55%) rotate(45deg);
	display: block;
	background-color: white;
	width: 1rem;
	height: 1rem;
}

.whiteTooltipTip::after {
	background-color: white;
}

.blueTooltipTip::after {
	background-color: rgb(191 219 254);
}
</style>
