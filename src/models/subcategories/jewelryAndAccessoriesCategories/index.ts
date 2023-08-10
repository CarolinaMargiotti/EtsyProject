import { DropDownCategoriesTypeInterface } from "../../ICategories";
import { accessoriesCategories } from "./accessoriesCategories";
import { bagsAndPursesCategories } from "./bagsAndPursesCategories";
import { necklacesCategories } from "./necklacesCategories";
import { ringsCategories } from "./ringsCategories";
import { earringsCategories } from "./earringsCategories";
import { braceletsCategories } from "./braceletsCategories";
import { bodyJewelryCategories } from "./bodyJewelryCategories";

export const jewelryAndAccessoriesCategories: DropDownCategoriesTypeInterface =
	{
		text: "Jewelry & Accessories",
		link: "#",
		type: "link",
		dropdownType: "DropDownCategoriesType",
		subcategories: [
			{
				text: "All Jewelry & Accessories",
				link: "#",
				type: "link",
			},
			{
				...accessoriesCategories,
			},
			{
				...bagsAndPursesCategories,
			},
			{
				...necklacesCategories,
			},
			{
				...ringsCategories,
			},
			{
				...earringsCategories,
			},
			{
				...braceletsCategories,
			},
			{
				...bodyJewelryCategories,
			},
			{
				text: "All Jewelry",
				link: "#",
				type: "link",
			},
		],
	};
