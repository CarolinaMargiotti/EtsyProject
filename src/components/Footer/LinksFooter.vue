<template>
	<div class="flex justify-center bg-grayBlue">
		<div class="grid grid-cols-4 gap-16 text-white py-10 px-7">
			<div>
				<ul class="grid grid-cols-1 gap-4">
					<li>
						<a href="#">
							<h5 class="font-bold text-base">Shop</h5>
						</a>
					</li>
					<li>
						<a href="#"> Gift cards </a>
					</li>
					<li>
						<a href="#"> Etsy Registry </a>
					</li>
					<li>
						<a href="#"> Sitemap </a>
					</li>
					<li>
						<a href="#"> Etsy blog </a>
					</li>
					<li>
						<a href="#"> Etsy United Kingdom </a>
					</li>
					<li>
						<a href="#"> Etsy Germany </a>
					</li>
					<li>
						<a href="#"> Etsy Canada </a>
					</li>
				</ul>
			</div>
			<div>
				<ul class="grid grid-cols-1 gap-4">
					<li>
						<a href="#">
							<h5 class="font-bold text-base">Sell</h5>
						</a>
					</li>
					<li>
						<a href="#"> Sell on Etsy </a>
					</li>
					<li>
						<a href="#"> Teams </a>
					</li>
					<li>
						<a href="#"> Forums </a>
					</li>
					<li>
						<a href="#"> Affiliates & Creators </a>
					</li>
				</ul>
			</div>
			<div>
				<ul class="grid grid-cols-1 gap-4">
					<li>
						<a href="#">
							<h5 class="font-bold text-base">About</h5>
						</a>
					</li>
					<li>
						<a href="#"> Etsy,Inc. </a>
					</li>
					<li>
						<a href="#"> Policies </a>
					</li>
					<li>
						<a href="#"> Investors </a>
					</li>
					<li>
						<a href="#"> Careers </a>
					</li>
					<li>
						<a href="#"> Press </a>
					</li>
					<li>
						<a href="#"> Impact </a>
					</li>
				</ul>
			</div>
			<div>
				<ul class="grid grid-cols-1 gap-4">
					<li>
						<a href="#">
							<h5 class="font-bold text-base">Help</h5>
						</a>
					</li>
					<li>
						<a href="#"> Help Center </a>
					</li>
					<li>
						<a href="#"> Privacy Settings </a>
					</li>
					<OutlinedButton class="w-fit mt-6" :themeWhite="false">
						<span
							class="text-grayBlue bg-white px-2 py-1 rounded w-fit mr-2"
						>
							<i class="fa-brands fa-etsy"></i>
						</span>
						Download the Etsy App
					</OutlinedButton>
					<div class="grid grid-cols-6 gap-4 text-3xl mt-2">
						<i class="fa-brands fa-instagram"></i>
						<i class="fa-brands fa-square-facebook"></i>
						<i class="fa-brands fa-pinterest"></i>
						<i class="fa-brands fa-twitter"></i>
						<i class="fa-brands fa-youtube"></i>
					</div>
				</ul>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import OutlinedButton from "../OutlinedButton.vue";

@Component({ components: { OutlinedButton } })
export default class LinksFooter extends Vue {}
</script>
