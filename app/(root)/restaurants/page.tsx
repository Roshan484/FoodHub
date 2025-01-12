import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { RestaurantCard } from "@/components/cards/resturant-card";

export const metadata: Metadata = {
	title: "Restaurants | FoodHub Nepal",
	description:
		"Discover and order from the best restaurants in Nepal. Explore a wide variety of cuisines and enjoy convenient food delivery or pickup with FoodHub.",
};

const restaurants = [
	{
		id: "1",
		name: "Nepali Flavors",
		image:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		cuisine: "Nepali",
		rating: 4.8,
		reviewCount: 320,
		priceRange: "$$",
		deliveryTime: "30-45",
		isOpen: true,
		popularDishes: ["Momo", "Dal Bhat", "Sel Roti"],
	},
	{
		id: "2",
		name: "Himalayan Bites",
		image:
			"https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
		cuisine: "Tibetan",
		rating: 4.6,
		reviewCount: 180,
		priceRange: "$$$",
		deliveryTime: "40-55",
		isOpen: true,
		popularDishes: ["Thukpa", "Tingmo", "Shabhaley"],
	},
	{
		id: "3",
		name: "Kathmandu Kitchen",
		image:
			"https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		cuisine: "Newari",
		rating: 4.7,
		reviewCount: 250,
		priceRange: "$$",
		deliveryTime: "35-50",
		isOpen: false,
		popularDishes: ["Bara", "Choila", "Yomari"],
	},
];

export default function RestaurantsPage() {
	return (
		<MaxWidthWrapper className="py-8">
			<div className="space-y-8">
				<div>
					<h1 className="text-4xl font-bold mb-4">Restaurants in Pokhara</h1>
					<p className="text-muted-foreground">
						Discover the best food Pokhara has to offer
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-4">
					<div className="relative flex-grow">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search restaurants or cuisines"
							className="pl-10"
						/>
					</div>
					<Button variant="outline">
						<SlidersHorizontal className="mr-2 h-4 w-4" />
						Filters
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{restaurants.map((restaurant) => (
						<RestaurantCard key={restaurant.id} {...restaurant} />
					))}
				</div>
			</div>
		</MaxWidthWrapper>
	);
}
