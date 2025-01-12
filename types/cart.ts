import { Food } from "./food";

export interface CartItem extends Food {
	quantity: number;
}

export interface RestaurantCart {
	restaurantId: number;
	restaurantName: string;
	items: CartItem[];
}

export interface Cart {
	restaurants: RestaurantCart[];
}
