<template>
	<div>
		<div>
			<h2 class="font-bold text-base">Updates</h2>
		</div>
		<div
			class="notificationItems w-100 rounded-b-lg flex flex-col items-center"
		>
			<div class="bg-white rounded-full translate-y-2 w-max px-2">
				Seen
			</div>
			<div
				class="bg-slate-200 rounded-b-lg w-full h-96 overflow-y-scroll overflow-hidden"
			>
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NotificationItem from "@/components/Header/NotificationItem.vue";

@Component({ components: { NotificationItem } })
export default class NotificationDropdownContent extends Vue {}
</script>
