import { CategoriesList } from "../../ICategories";
import { accessoriesCategories } from "./accessoriesCategories";
import { bagsAndPursesCategories } from "./bagsAndPursesCategories";
import { necklacesCategories } from "./necklacesCategories";
import { ringsCategories } from "./ringsCategories";
import { earringsCategories } from "./earringsCategories";
import { braceletsCategories } from "./braceletsCategories";
import { bodyJewelryCategories } from "./bodyJewelryCategories";

export const jewelryAndAccessoriesCategories: CategoriesList = {
	text: "Jewelry & Accessories",
	link: "#",
	type: "link",
	subcategories: [
		{
			text: "All Jewelry & Accessories",
			link: "#",
			type: "link",
		},
		{
			text: "Accessories",
			link: "#",
			type: "arrow",
			subcategories: accessoriesCategories,
		},
		{
			text: "Bags & Purses",
			link: "#",
			type: "arrow",
			subcategories: bagsAndPursesCategories,
		},
		{
			text: "Necklaces",
			link: "#",
			type: "arrow",
			subcategories: necklacesCategories,
		},
		{
			text: "Rings",
			link: "#",
			type: "arrow",
			subcategories: ringsCategories,
		},
		{
			text: "Earrings",
			link: "#",
			type: "arrow",
			subcategories: earringsCategories,
		},
		{
			text: "Bracelets",
			link: "#",
			type: "arrow",
			subcategories: braceletsCategories,
		},
		{
			text: "Body Jewelry",
			link: "#",
			type: "arrow",
			subcategories: bodyJewelryCategories,
		},
		{
			text: "All Jewelry",
			link: "#",
			type: "link",
		},
	],
};
