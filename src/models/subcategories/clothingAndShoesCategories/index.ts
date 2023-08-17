import { DropDownCategoriesTypeInterface } from "@/models/ICategories";
import { womensCategories } from "./womensCategories";
import { mensCategories } from "./mensCategories";
import { kidsAndBabysCategories } from "./kidsAndBabysCategories";
import { bagsAndPurses } from "./bagsAndPurses";

export const clothingAndShoesCategories: DropDownCategoriesTypeInterface = {
	text: "Clothing & Shoes",
	link: "#",
	type: "link",
	dropdownType: "DropDownCategoriesType",
	subcategories: [
		{
			text: "All Clothing & Shoes",
			link: "#",
			type: "link",
		},
		{
			...womensCategories,
		},
		{
			...mensCategories,
		},
		{
			...kidsAndBabysCategories,
		},
		{
			...bagsAndPurses,
		},
	],
};
