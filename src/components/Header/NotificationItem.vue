<template>
	<div>
		<div class="grid notificationItemTitleGrid gap-3 p-3 pb-4">
			<div>
				<i
					class="fas fa-certificate text-xs text-orange-500 bg-orange-100 p-2 rounded-full"
				></i>
			</div>
			<div class="w-48 text-start text-slate-700">
				laylala has one of your favorites back in stock.
			</div>
			<div class="text-slate-500">7d</div>
			<div class="col-start-2">
				<img
					alt="notification item image"
					src="../../assets/img/products/placeholderItem.webp"
					class="rounded"
					width="80px"
				/>
			</div>
		</div>
		<div class="divider"></div>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class NotificationItem extends Vue {}
</script>

<style>
.notificationItemTitleGrid {
	grid-template-columns: repeat(3, min-content);
}
</style>
