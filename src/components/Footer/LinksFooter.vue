<template>
	<div class="flex justify-center bg-grayBlue">
		<div class="grid linksGrid gap-16 text-white pt-10 pb-3 px-7 w-9/12">
			<div>
				<ul class="grid grid-cols-1 gap-4">
					<li>
						<a href="#" class="hover:underline">
							<h5 class="font-bold text-base">Shop</h5>
						</a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Gift cards </a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Etsy Registry </a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Sitemap </a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Etsy blog </a>
					</li>
					<li>
						<a href="#" class="hover:underline">
							Etsy United Kingdom
						</a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Etsy Germany </a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Etsy Canada </a>
					</li>
				</ul>
			</div>
			<div>
				<ul class="grid grid-cols-1 gap-4">
					<li>
						<a href="#" class="hover:underline">
							<h5 class="font-bold text-base">Sell</h5>
						</a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Sell on Etsy </a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Teams </a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Forums </a>
					</li>
					<li>
						<a href="#" class="hover:underline">
							Affiliates & Creators
						</a>
					</li>
				</ul>
			</div>
			<div>
				<ul class="grid grid-cols-1 gap-4">
					<li>
						<a href="#" class="hover:underline">
							<h5 class="font-bold text-base">About</h5>
						</a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Etsy,Inc. </a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Policies </a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Investors </a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Careers </a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Press </a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Impact </a>
					</li>
				</ul>
			</div>
			<div>
				<ul class="grid grid-cols-1 gap-4">
					<li>
						<a href="#" class="hover:underline">
							<h5 class="font-bold text-base">Help</h5>
						</a>
					</li>
					<li>
						<a href="#" class="hover:underline"> Help Center </a>
					</li>
					<li>
						<a href="#" class="hover:underline">
							Privacy Settings
						</a>
					</li>
					<OutlinedButton class="w-max mt-6" :themeWhite="false">
						<div class="md:flex items-center">
							<span
								class="text-grayBlue bg-white px-2 py-1 rounded w-fit mr-2"
							>
								<i class="fa-brands fa-etsy"></i>
							</span>
							<div class="mt-2 md:mt-0">
								Download the Etsy App
							</div>
						</div>
					</OutlinedButton>
					<div class="grid socialMediaGrid text-3xl mt-2">
						<div>
							<IconButton class="z-20 w-max">
								<i
									class="hover:cursor-pointer fa-brands fa-instagram"
								></i>
							</IconButton>
						</div>
						<div>
							<IconButton class="z-20 w-max">
								<i
									class="hover:cursor-pointer fa-brands fa-square-facebook"
								></i>
							</IconButton>
						</div>
						<div>
							<IconButton class="z-20 w-max">
								<i
									class="hover:cursor-pointer fa-brands fa-pinterest"
								></i>
							</IconButton>
						</div>
						<div>
							<IconButton class="z-20 w-max">
								<i
									class="hover:cursor-pointer fa-brands fa-twitter"
								></i>
							</IconButton>
						</div>
						<div>
							<IconButton class="z-20 w-max">
								<i
									class="hover:cursor-pointer fa-brands fa-youtube"
								></i>
							</IconButton>
						</div>
					</div>
				</ul>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import OutlinedButton from "../OutlinedButton.vue";
import IconButton from "../IconButton.vue";

@Component({ components: { OutlinedButton, IconButton } })
export default class LinksFooter extends Vue {}
</script>
<style>
.socialMediaGrid {
	grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
}

.linksGrid {
	grid-template-columns: repeat(3, minmax(0, 1fr)) 1.5fr;
}
</style>
