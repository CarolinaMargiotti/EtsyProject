<template>
	<header
		class="pb-3 pt-2 px-headerPad border-b-2 border-solid border-b-lightGray"
	>
		<TopBar />
		<nav class="flex justify-between">
			<router-link v-for="nav in navOptions" :key="nav" :to="nav.url">{{
				nav.name
			}}</router-link>
		</nav>
	</header>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "../Logo.vue";
import Input from "./SearchBar.vue";
import TopBar from "./TopBar.vue";

@Component({
	components: { Logo, Input, TopBar },
})
export default class NavBar extends Vue {
	public navOptions = [
		{
			url: "/",
			name: "Jewelry & Accessories",
		},
		{
			url: "/",
			name: "Clothing & Shoes",
		},
		{
			url: "/",
			name: "Home & Living",
		},
		{
			url: "/",
			name: "Wedding & Party",
		},
		{
			url: "/",
			name: "Toys & Entertainment",
		},
		{
			url: "/",
			name: "Art & Collectibles",
		},
		{
			url: "/",
			name: "Craft Supplies & Tools",
		},
		{
			url: "/",
			name: "Vintage",
		},
	];
}
</script>
