import { NavCategories } from "../../ICategories";
import { accessoriesCategories } from "./accessoriesCategories";
import { bagsAndPursesCategories } from "./bagsAndPursesCategories";
import { necklacesCategories } from "./necklacesCategories";
import { ringsCategories } from "./ringsCategories";
import { earringsCategories } from "./earringsCategories";
import { braceletsCategories } from "./braceletsCategories";
import { bodyJewelryCategories } from "./bodyJewelryCategories";

export const jewelryAndAccessoriesCategories: NavCategories = {
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
			...accessoriesCategories,
		},
		{
			text: "Bags & Purses",
			link: "#",
			type: "arrow",
			...bagsAndPursesCategories,
		},
		{
			text: "Necklaces",
			link: "#",
			type: "arrow",
			...necklacesCategories,
		},
		{
			text: "Rings",
			link: "#",
			type: "arrow",
			...ringsCategories,
		},
		{
			text: "Earrings",
			link: "#",
			type: "arrow",
			...earringsCategories,
		},
		{
			text: "Bracelets",
			link: "#",
			type: "arrow",
			...braceletsCategories,
		},
		{
			text: "Body Jewelry",
			link: "#",
			type: "arrow",
			...bodyJewelryCategories,
		},
		{
			text: "All Jewelry",
			link: "#",
			type: "link",
		},
	],
};
