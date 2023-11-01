<template>
	<footer>
		<RippedPaperFooter />
		<LinksFooter />
		<CurrencyAndTermsFooterVue />
	</footer>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import LinksFooter from "./LinksFooter.vue";
import RippedPaperFooter from "./RippedPaperFooter.vue";
import CurrencyAndTermsFooterVue from "./CurrencyAndTermsFooter.vue";

@Component({
	components: {
		RippedPaperFooter,
		LinksFooter,
		CurrencyAndTermsFooterVue,
	},
})
export default class Footer extends Vue {}
</script>
