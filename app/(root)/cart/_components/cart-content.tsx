"use client";

import { useState } from "react";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Cart, CartItem } from "@/types/cart";

// This is a mock cart data. In a real application, this would come from a state management solution or API
const initialCart: Cart = {
	restaurants: [
		{
			restaurantId: 1,
			restaurantName: "Nepali Flavors",
			items: [
				{
					id: 1,
					name: "Momo",
					restaurant: "Nepali Flavors",
					price: 150,
					image:
						"https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
					rating: 4.9,
					reviews: 120,
					prepTime: "15-20",
					taste: "Savory",
					isVeg: true,
					category: "Snacks",
					quantity: 2,
				},
			],
		},
		{
			restaurantId: 2,
			restaurantName: "Italian Delights",
			items: [
				{
					id: 2,
					name: "Margherita Pizza",
					restaurant: "Italian Delights",
					price: 300,
					image:
						"https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
					rating: 4.7,
					reviews: 95,
					prepTime: "20-25",
					taste: "Savory",
					isVeg: true,
					category: "Main Course",
					quantity: 1,
				},
			],
		},
	],
};

export default function CartContent() {
	const [cart, setCart] = useState<Cart>(initialCart);

	const updateItemQuantity = (
		restaurantId: number,
		itemId: number,
		newQuantity: number
	) => {
		setCart((prevCart) => ({
			...prevCart,
			restaurants: prevCart.restaurants
				.map((restaurant) => {
					if (restaurant.restaurantId === restaurantId) {
						return {
							...restaurant,
							items: restaurant.items
								.map((item) =>
									item.id === itemId ? { ...item, quantity: newQuantity } : item
								)
								.filter((item) => item.quantity > 0),
						};
					}
					return restaurant;
				})
				.filter((restaurant) => restaurant.items.length > 0),
		}));
	};

	const calculateTotal = (items: CartItem[]) => {
		return items.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const calculateGrandTotal = () => {
		return cart.restaurants.reduce(
			(total, restaurant) => total + calculateTotal(restaurant.items),
			0
		);
	};

	const deliveryFee = 50;
	const grandTotal = calculateGrandTotal();

	return (
		<div className="">
			<h1 className="text-3xl font-bold mb-8 flex items-center">
				<ShoppingCart className="mr-2" />
				Your Cart
			</h1>
			{cart.restaurants.length === 0 ? (
				<Card>
					<CardContent className="pt-6">
						<p className="text-center text-gray-500">Your cart is empty</p>
					</CardContent>
				</Card>
			) : (
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="w-full lg:w-2/3">
						{cart.restaurants.map((restaurant) => (
							<Card
								key={restaurant.restaurantId}
								className="mb-8 dark:bg-muted"
							>
								<CardHeader>
									<CardTitle className="text-xl">
										{restaurant.restaurantName}
									</CardTitle>
								</CardHeader>
								<CardContent>
									{restaurant.items.map((item) => (
										<div
											key={item.id}
											className="flex items-center justify-between py-4 border-b last:border-b-0"
										>
											<div className="flex items-center">
												<Image
													src={item.image}
													alt={item.name}
													width={80}
													height={80}
													className="rounded-md mr-4"
												/>
												<div>
													<h3 className="font-semibold">{item.name}</h3>
													<p className="text-sm text-gray-500 dark:text-gray-300">
														Nrs. {item.price}
													</p>
												</div>
											</div>
											<div className="flex items-center">
												<Button
													variant="outline"
													size="icon"
													onClick={() =>
														updateItemQuantity(
															restaurant.restaurantId,
															item.id,
															item.quantity - 1
														)
													}
													aria-label="Decrease quantity"
												>
													<Minus className="h-4 w-4" />
												</Button>
												<span className="mx-2 min-w-[2ch] text-center">
													{item.quantity}
												</span>
												<Button
													variant="outline"
													size="icon"
													onClick={() =>
														updateItemQuantity(
															restaurant.restaurantId,
															item.id,
															item.quantity + 1
														)
													}
													aria-label="Increase quantity"
												>
													<Plus className="h-4 w-4" />
												</Button>
												<Button
													variant="ghost"
													size="icon"
													className="ml-2 text-red-500"
													onClick={() =>
														updateItemQuantity(
															restaurant.restaurantId,
															item.id,
															0
														)
													}
													aria-label="Remove item"
												>
													<Trash2 className="h-4 w-4" />
												</Button>
											</div>
										</div>
									))}
								</CardContent>
								<CardFooter className="justify-end">
									<p className="font-semibold">
										Subtotal: Nrs. {calculateTotal(restaurant.items)}
									</p>
								</CardFooter>
							</Card>
						))}
					</div>
					<div className="w-full lg:w-1/3">
						<Card className="sticky top-20 dark:bg-muted">
							<CardHeader>
								<CardTitle>Order Summary</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-2">
									<div className="flex justify-between">
										<span>Subtotal</span>
										<span>Nrs. {grandTotal}</span>
									</div>
									<div className="flex justify-between">
										<span>Delivery Fee</span>
										<span>Nrs. {deliveryFee}</span>
									</div>
									<Separator className="my-2" />
									<div className="flex justify-between font-bold">
										<span>Total</span>
										<span>Nrs. {grandTotal + deliveryFee}</span>
									</div>
								</div>
							</CardContent>
							<CardFooter>
								<Button className="w-full">Proceed to Checkout</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			)}
		</div>
	);
}
