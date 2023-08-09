import { NavCategories } from "./ICategories";
import { jewelryAndAccessoriesCategories } from "./subcategories/jewelryAndAccessoriesCategories";
import { clothingAndShoesCategories } from "./subcategories/clothingAndShoesCategories";

export const Categories: NavCategories[] = [
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
	},
	{
		text: "Wedding & Party",
		link: "#",
		type: "link",
	},
	{
		text: "Toys & Entertainment",
		link: "#",
		type: "link",
	},
	{
		text: "Art & Collectibles",
		link: "#",
		type: "link",
	},
	{
		text: "Craft Supplies & Tools",
		link: "#",
		type: "link",
	},
	{
		text: "Vintage",
		link: "#",
		type: "link",
	},
];
