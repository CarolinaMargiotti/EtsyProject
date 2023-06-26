import { CategoriesList } from "./ICategories";
import { jewelryAndAccessoriesCategories } from "./subcategories/jewelryAndAccessoriesCategories";
import { clothingAndShoesCategories } from "./subcategories/clothingAndShoesCategories";

export const Categories: CategoriesList[] = [
	{
		...jewelryAndAccessoriesCategories,
	},
	{
		...clothingAndShoesCategories,
	},
];
