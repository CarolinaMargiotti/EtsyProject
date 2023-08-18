<template>
	<div>
		<section class="w-full bg-toastedYellow text-center text-4xl">
			<div class="py-5">
				Welcome to Etsy, <a href="#" class="underline">Carolina!</a>
			</div>
		</section>
		<section class="px-headerPad">
			<div class="flex justify-between items-end pb-6">
				<label class="text-3xl font-bold">Your recent activity</label>
				<div class="text-base text-muted">
					<a href="#" class="underline">Reecently viewed</a>
					and
					<a href="#" class="underline">favorited items</a>
				</div>
			</div>
			<div>
				<DisplayItem />
			</div>
		</section>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DisplayItem from "./DisplayItem.vue";

@Component({ components: { DisplayItem } })
export default class RecentActivity extends Vue {}
</script>
