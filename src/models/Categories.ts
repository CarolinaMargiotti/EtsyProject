import {
	DropDownCategoriesTypeInterface,
	DropDownThreeListsInterface,
} from "./ICategories";
import { jewelryAndAccessoriesCategories } from "./subcategories/jewelryAndAccessoriesCategories";
import { clothingAndShoesCategories } from "./subcategories/clothingAndShoesCategories";
import { artAndCollectibles } from "./subcategories/artAndCollectibles";

export const Categories:
	| DropDownCategoriesTypeInterface[]
	| DropDownThreeListsInterface[] = [
	{
		...jewelryAndAccessoriesCategories,
	},
	{
		...clothingAndShoesCategories,
	},
	{
		text: "Home & Living",
		link: "#",
		type: "link",
		dropdownType: "DropDownCategoriesTypeInterface",
	},
	{
		text: "Wedding & Party",
		link: "#",
		type: "link",
		dropdownType: "DropDownCategoriesTypeInterface",
	},
	{
		text: "Toys & Entertainment",
		link: "#",
		type: "link",
		dropdownType: "DropDownThreeListsInterface",
	},
	{
		...artAndCollectibles,
	},
	{
		text: "Craft Supplies & Tools",
		link: "#",
		type: "link",
		dropdownType: "DropDownCategoriesTypeInterface",
	},
	{
		text: "Vintage",
		link: "#",
		type: "link",
		dropdownType: "",
	},
];
