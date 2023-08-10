export interface NavItem {
	text: string;
	link: string;
	type: string;
}

export interface Subcategories extends NavItem {
	firstColumn?: NavItem[];
	secondColumn?: NavItem[];
}

export interface DropDownCategoriesTypeInterface extends NavItem {
	dropdownType: string;
	subcategories?: Subcategories[];
}

export interface DropDownThreeListsInterface extends NavItem {
	dropdownType: string;
	firstColumn?: NavItem[];
	secondColumn?: NavItem[];
	thirdColumn?: NavItem[];
}
