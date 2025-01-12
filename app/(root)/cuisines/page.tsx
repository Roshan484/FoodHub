import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Utensils, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
	title: "Explore Cuisines | FoodHub",
	description:
		"Discover a world of flavors with our diverse range of cuisines. From Italian to Indian, find your favorite dishes on FoodHub.",
};

const cuisines = [
	{
		name: "Italian",
		image:
			"https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
		slug: "italian",
		popularDishes: ["Pizza", "Pasta", "Risotto"],
		averageRating: 4.7,
		numberOfRestaurants: 42,
		averageDeliveryTime: "30-45",
	},
	{
		name: "Chinese",
		image:
			"https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
		slug: "chinese",
		popularDishes: ["Dim Sum", "Kung Pao Chicken", "Fried Rice"],
		averageRating: 4.5,
		numberOfRestaurants: 38,
		averageDeliveryTime: "35-50",
	},
	{
		name: "Indian",
		image:
			"https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
		slug: "indian",
		popularDishes: ["Curry", "Biryani", "Naan"],
		averageRating: 4.6,
		numberOfRestaurants: 35,
		averageDeliveryTime: "40-55",
	},
	{
		name: "Mexican",
		image:
			"https://images.unsplash.com/photo-1613514785940-daed77c35faa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
		slug: "mexican",
		popularDishes: ["Tacos", "Burritos", "Guacamole"],
		averageRating: 4.4,
		numberOfRestaurants: 30,
		averageDeliveryTime: "25-40",
	},
	{
		name: "Japanese",
		image:
			"https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
		slug: "japanese",
		popularDishes: ["Sushi", "Ramen", "Tempura"],
		averageRating: 4.8,
		numberOfRestaurants: 28,
		averageDeliveryTime: "35-50",
	},
	{
		name: "Thai",
		image:
			"https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
		slug: "thai",
		popularDishes: ["Pad Thai", "Green Curry", "Tom Yum"],
		averageRating: 4.5,
		numberOfRestaurants: 25,
		averageDeliveryTime: "30-45",
	},
];

export default function CuisinesPage() {
	return (
		<MaxWidthWrapper className="px-4 py-8">
			<h1 className="text-4xl font-bold mb-8 text-center">Explore Cuisines</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{cuisines.map((cuisine) => (
					<div
						key={cuisine.slug}
						className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
					>
						<div className="relative h-48">
							<Image
								src={cuisine.image}
								alt={`${cuisine.name} cuisine`}
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-30" />
							<h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
								{cuisine.name}
							</h2>
						</div>
						<div className="p-4">
							<div className="flex items-center justify-between mb-2">
								<div className="flex items-center">
									<Star className="h-5 w-5 text-yellow-400 mr-1" />
									<span className="font-semibold">{cuisine.averageRating}</span>
								</div>
								<Badge variant="secondary" className="font-semibold">
									{cuisine.numberOfRestaurants} Restaurants
								</Badge>
							</div>
							<div className="mb-4">
								<h3 className="text-sm font-semibold mb-2">Popular Dishes:</h3>
								<div className="flex flex-wrap gap-2">
									{cuisine.popularDishes.map((dish) => (
										<Badge key={dish} variant="outline">
											{dish}
										</Badge>
									))}
								</div>
							</div>
							<div className="flex items-center justify-between mb-4">
								<div className="flex items-center text-sm text-gray-600">
									<Utensils className="h-4 w-4 mr-1" />
									<span>{cuisine.numberOfRestaurants} Options</span>
								</div>
								<div className="flex items-center text-sm text-gray-600">
									<Clock className="h-4 w-4 mr-1" />
									<span>{cuisine.averageDeliveryTime} min</span>
								</div>
							</div>
							<Link href={`/cuisines/${cuisine.slug}`} passHref>
								<Button className="w-full">
									Explore {cuisine.name} Cuisine
								</Button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</MaxWidthWrapper>
	);
}
