<template>
	<div class="flex-grow flex w-full relative items-center">
		<input
			type="text"
			class="bg-lighterGray h-searchBar w-full rounded-full rounded-r-none border-r-0 border-2 border-black px-5 p-2 text-base tracking-regular"
			placeholder="Search for anything"
		/>
		<button
			class="bg-lighterGray h-searchBar searchHover rounded-r-full px-5 p-2 border-2 border-l-0 border-black"
		>
			<i class="h-5 fas fa-magnifying-glass"></i>
		</button>
	</div>
</template>
<style>
.searchHover {
	position: relative;
	transition: background-color 0.3s ease;
}

.searchHover::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-top-right-radius: 50rem;
	border-bottom-right-radius: 50rem;
	opacity: 0.5;
	background-color: lightgrey;
	transform: scale(0%);
	transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.searchHover:hover::before {
	transform: scale(100%);
}
</style>
