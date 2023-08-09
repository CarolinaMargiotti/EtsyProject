export interface NavItem {
	text: string;
	link: string;
	type: string;
}

export interface CategoriesList {
	firstColumn?: NavItem[];
	secondColumn?: NavItem[];
}

export type NavList = NavItem & CategoriesList;

export interface NavCategories extends NavItem {
	subcategories?: NavList[];
}
