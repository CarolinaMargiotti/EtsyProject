<template>
	<header
		class="border-b-2 border-solid border-b-lightGray relative bg-white z-10 flex justify-center"
	>
		<section class="w-full lg:w-pageContent">
			<NavModal v-if="shouldShowModal" @closeModal="closeModal()" />
			<TopBar @openModal="openModal()" />
			<BottomBar />
		</section>
	</header>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "../Logo.vue";
import Input from "./SearchBar.vue";
import TopBar from "./TopBar.vue";
import NavModal from "./NavModal.vue";
import BottomBar from "./BottomBar.vue";

@Component({
	components: { Logo, Input, TopBar, NavModal, BottomBar },
})
export default class NavBar extends Vue {
	public shouldShowModal: boolean = false;

	public openModal(): void {
		this.shouldShowModal = true;
	}

	public closeModal(): void {
		this.shouldShowModal = false;
	}
}
</script>
