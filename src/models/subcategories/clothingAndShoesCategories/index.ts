import { CategoriesList } from "@/models/ICategories";
import { womensCategories } from "./womensCategories";
import { mensCategories } from "./mensCategories";
import { kidsAndBabysCategories } from "./kidsAndBabysCategories";
import { bagsAndPurses } from "./bagsAndPurses";

export const clothingAndShoesCategories: CategoriesList = {
	text: "Clothing & Shoes",
	link: "#",
	type: "link",
	subcategories: [
		{
			text: "All Clothing & Shoes",
			link: "#",
			type: "link",
		},
		{
			text: "Women's",
			link: "#",
			type: "arrow",
			subcategories: womensCategories,
		},
		{
			text: "Men's",
			link: "#",
			type: "arrow",
			subcategories: mensCategories,
		},
		{
			text: "Kid's & Baby",
			link: "#",
			type: "arrow",
			subcategories: kidsAndBabysCategories,
		},
		{
			text: "Bags & Purses",
			link: "#",
			type: "arrow",
			subcategories: bagsAndPurses,
		},
	],
};
