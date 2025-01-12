export interface Food {
	id: number;
	name: string;
	restaurant: string;
	price: number;
	image: string;
	rating: number;
	reviews: number;
	prepTime: string;
	taste: "Spicy" | "Savory" | "Sweet" | "Salty" | "Bitter";
	isVeg: boolean;
	category: string;
}

export interface FilterOptions {
	veg: boolean;
	nonVeg: boolean;
	categories: string[];
	priceRange: [number, number];
}

export type SortOption = "price-asc" | "price-desc" | "rating-desc";

export interface SearchOptions {
	query: string;
	type: "dish" | "restaurant";
}
