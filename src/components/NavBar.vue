<template>
	<header
		class="py-3 px-headerPad border-b-2 border-solid border-b-lightGray"
	>
		<section class="pb-3 flex items-center justify-between w-full">
			<Logo class="mr-2" />
			<Input class="mr-8" />
			<div class="mr-5">heart</div>
			<div class="mr-5">bell</div>
			<img
				src="@/assets/img/default-profile-icon.jpg"
				width="30px"
				height="30px"
				class="rounded-full mr-5"
				alt="default icon profile"
			/>
			<div>cart</div>
		</section>
		<nav class="flex justify-between pt-1">
			<router-link to="/">Jewelry & Accessories</router-link>
			<router-link to="/about">Clothing & Shoes</router-link>
			<router-link to="/about">Home & Living</router-link>
			<router-link to="/about">Wedding & Party</router-link>
			<router-link to="/about">Toys & Entertainment</router-link>
			<router-link to="/about">Art & Collectibles</router-link>
			<router-link to="/about">Craft Supplies & Tools</router-link>
			<router-link to="/about">Vintage</router-link>
		</nav>
	</header>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "./Logo.vue";
import Input from "./Input.vue";

@Component({
	components: { Logo, Input },
})
export default class NavBar extends Vue {}
</script>
