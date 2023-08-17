import { DropDownThreeListsInterface } from "@/models/ICategories";

export const artAndCollectibles: DropDownThreeListsInterface = {
	text: "Art & Collectibles",
	link: "#",
	type: "link",
	dropdownType: "DropDownThreeLists",
	firstColumn: [
		{
			text: "Prints",
			link: "#",
			type: "heading",
		},
	],
	secondColumn: [{ text: "Sculpture", link: "#", type: "heading" }],
	thirdColumn: [
		{
			text: "Collectibles",
			link: "#",
			type: "heading",
		},
	],
};
