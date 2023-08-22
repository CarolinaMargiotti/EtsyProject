<template>
	<div>
		<section class="w-full bg-toastedYellow text-center text-4xl">
			<div class="py-5">
				Welcome to Etsy, <a href="#" class="underline">Carolina!</a>
			</div>
		</section>
		<section class="px-headerPad">
			<div class="flex justify-between items-end pb-4">
				<label class="text-3xl font-bold">Your recent activity</label>
				<div class="text-base text-muted">
					<a href="#" class="underline">Reecently viewed</a>
					and
					<a href="#" class="underline">favorited items</a>
				</div>
			</div>

			<div class="grid grid-cols-5 gap-3">
				<DisplayItem :id="1" :price="55" />
				<DisplayItem :id="2" :price="55" :discountedPrice="75" />
				<DisplayItem :id="3" :price="55" :isFavorite="true" />
				<DisplayItem :id="4" :price="55" :isFavorite="true" />
				<DisplayItem :id="5" :price="55" :isFavorite="true" />
				<DisplayItem :id="6" :price="55" />
				<DisplayItem :id="7" :price="55" :discountedPrice="75" />
				<DisplayItem :id="8" :price="55" :isFavorite="true" />
				<DisplayItem :id="9" :price="55" :isFavorite="true" />
				<DisplayItem :id="10" :price="55" :isFavorite="true" />
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
