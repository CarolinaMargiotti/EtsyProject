<template>
	<div>
		<section class="w-full bg-toastedYellow text-center text-4xl">
			<div class="py-5">
				Welcome to Etsy, <a href="#" class="underline">Carolina!</a>
			</div>
		</section>
		<div class="px-headerPad">
			<RecentActivity />
			<BecauseYouViewed
				:viewedItem="{
					id: 1,
					price: 1,
					isFavorite: false,
					imageUrl: 'placeholderItem.webp',
				}"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import RecentActivity from "@/components/RecentActivity.vue";
import BecauseYouViewed from "@/components/BecauseYouViewed.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: { RecentActivity, BecauseYouViewed },
})
export default class HomeView extends Vue {}
</script>
