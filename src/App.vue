<template>
	<div id="app" class="tracking-regular">
		<NavBar />
		<router-view />
	</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NavBar from "./components/NavBar/NavBar.vue";

@Component({ components: { NavBar } })
export default class App extends Vue {}
</script>
