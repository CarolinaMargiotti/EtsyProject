export interface NavItem {
	text: string;
	link: string;
	type: string;
}

export interface CategoriesList extends NavItem {
	subcategories?: CategoriesList | CategoriesList[] | CategoriesList[][];
}
