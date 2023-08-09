import { NavCategories } from "@/models/ICategories";
import { womensCategories } from "./womensCategories";
import { mensCategories } from "./mensCategories";
import { kidsAndBabysCategories } from "./kidsAndBabysCategories";
import { bagsAndPurses } from "./bagsAndPurses";

export const clothingAndShoesCategories: NavCategories = {
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
			...womensCategories,
		},
		{
			text: "Men's",
			link: "#",
			type: "arrow",
			...mensCategories,
		},
		{
			text: "Kid's & Baby",
			link: "#",
			type: "arrow",
			...kidsAndBabysCategories,
		},
		{
			text: "Bags & Purses",
			link: "#",
			type: "arrow",
			...bagsAndPurses,
		},
	],
};
