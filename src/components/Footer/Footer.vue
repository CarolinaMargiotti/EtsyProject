<template>
	<footer>
		<RippedPaperFooter />
		<LinksFooter />
	</footer>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import LinksFooter from "./LinksFooter.vue";
import RippedPaperFooter from "./RippedPaperFooter.vue";

@Component({
	components: {
		RippedPaperFooter,
		LinksFooter,
	},
})
export default class Footer extends Vue {}
</script>
