export default interface IProduct {
	id: number;
	price: number;
	discountedPrice?: number;
	isFavorite: boolean;
	imageUrl: string;
	title?: string;
	stars?: number;
	freeShipping?: boolean;
}
