<template>
	<div id="app" class="tracking-regular">
		<Header />
		<main>
			<router-view />
		</main>
		<Footer />
	</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Header from "./components/NavBar/Header.vue";
import Footer from "./components/Footer/Footer.vue";

@Component({ components: { Header, Footer } })
export default class App extends Vue {}
</script>
