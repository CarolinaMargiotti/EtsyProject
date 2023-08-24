<template>
	<RecentActivity />
</template>

<script lang="ts">
import RecentActivity from "@/components/RecentActivity.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: { RecentActivity },
})
export default class HomeView extends Vue {}
</script>
