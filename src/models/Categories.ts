import { CategoriesList } from "./ICategories";

export const Categories: CategoriesList[] = [
	{
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
				subcategories: [
					[
						{
							text: "Hats & Caps",
							link: "#",
							type: "heading",
						},
						{
							text: "Baseball & Trucker Hats",
							link: "#",
							type: "normal",
						},
						{
							text: "Beanies & Winter Hats",
							link: "#",
							type: "normal",
						},
						{
							text: "Sun Hats",
							link: "#",
							type: "normal",
						},
						{
							text: "Hair Accessories",
							link: "#",
							type: "heading",
						},
						{
							text: "Headbands",
							link: "#",
							type: "normal",
						},
						{
							text: "Fascinators & Mini Hats",
							link: "#",
							type: "normal",
						},
						{
							text: "Barrettes & Clips",
							link: "#",
							type: "normal",
						},
						{
							text: "Ties & Elastics",
							link: "#",
							type: "normal",
						},
						{
							text: "Wreaths & Tiaras",
							link: "#",
							type: "normal",
						},
					],
					[
						{
							text: "Sunglasses & Eyewear",
							link: "#",
							type: "heading",
						},
					],
				],
			},
			{
				text: "Bags & Purses",
				link: "#",
				type: "arrow",
			},
			{
				text: "Necklaces",
				link: "#",
				type: "arrow",
			},
			{
				text: "Rings",
				link: "#",
				type: "arrow",
			},
			{
				text: "Earrings",
				link: "#",
				type: "arrow",
			},
			{
				text: "Bracelets",
				link: "#",
				type: "arrow",
			},
			{
				text: "Body Jewelry",
				link: "#",
				type: "arrow",
			},
			{
				text: "All Jewelry",
				link: "#",
				type: "link",
			},
		],
	},
];
