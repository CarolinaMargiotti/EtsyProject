<template>
	<div class="dropdownTooltip bg-white rounded-lg">
		<div class="dropdownItems p-3">teste</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NotificationDropdownContent from "./Header/NotificationDropdownContent.vue";

@Component({
	components: { NotificationDropdownContent },
})
export default class DropdownToolTip extends Vue {}
</script>
<style>
.dropdownTooltip {
	position: absolute;
	width: max-content;
	transform: translateX(-50%) translateY(1rem);
	box-shadow: 0px 0px 2px black;
	top: 100%;
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
</style>
