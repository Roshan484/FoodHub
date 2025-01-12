import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, ChefHat } from "lucide-react";

const featuredRestaurants = [
	{
		id: 1,
		name: "Nepali Flavors",
		image:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		rating: 4.8,
		reviews: 256,
		cuisine: "Nepali",
		deliveryTime: "30-45",
		priceRange: "$$",
		popularDish: "Momo",
	},
	{
		id: 2,
		name: "Himalayan Bites",
		image:
			"https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
		rating: 4.6,
		reviews: 256,
		cuisine: "Tibetan",
		deliveryTime: "40-55",
		priceRange: "$$$",
		popularDish: "Thukpa",
	},
	{
		id: 3,
		name: "Kathmandu Kitchen",
		image:
			"https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		rating: 4.7,
		reviews: 256,
		cuisine: "Newari",
		deliveryTime: "35-50",
		priceRange: "$$",
		popularDish: "Bara",
	},
	{
		id: 4,
		name: "Spice Route",
		image:
			"https://images.unsplash.com/photo-1542367592-8849eb950fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
		rating: 4.5,
		reviews: 256,
		cuisine: "Indian",
		deliveryTime: "40-60",
		priceRange: "$$",
		popularDish: "Butter Chicken",
	},
];

export default function FeaturedRestaurants() {
	return (
		<section className="py-8  ">
			<div className="dark:bg-muted p-2 bg-gray-50 rounded-md">
				<h2 className="text-3xl font-bold text-center mb-8">
					Featured Restaurants
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{featuredRestaurants.map((restaurant) => (
						<Card
							key={restaurant.id}
							className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
						>
							<div className="relative">
								<Image
									src={restaurant.image}
									alt={`${restaurant.name} restaurant`}
									width={400}
									height={300}
									className="w-full h-48 object-cover"
								/>
								<Badge
									className="absolute top-2 right-2 bg-white dark:bg-gray-800"
									variant="secondary"
								>
									Featured
								</Badge>
							</div>
							<CardContent className="px-3 py-2">
								<h3 className="font-semibold text-lg mb-2">
									{restaurant.name}
								</h3>

								<div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
									<div className="flex items-center">
										<Clock className="h-4 w-4 mr-1" />
										<span>{restaurant.deliveryTime} min</span>
										<span className="mx-2">•</span>
										<span>{restaurant.priceRange}</span>
									</div>
									<span className="text-sm text-gray-600 dark:text-gray-300">
										{restaurant.cuisine}
									</span>
								</div>
								<div className="flex items-center gap-3 mb-3">
									<span className="flex items-center">
										<Star className="h-5 w-5 text-yellow-400 mr-1" />
										<span className="font-semibold">{restaurant.rating}</span>
									</span>
									<span className="text-sm text-gray-600 dark:text-gray-300">
										({restaurant.reviews} reviews)
									</span>
								</div>
								<Badge className="bg-green-200 text-green-800">
									<ChefHat className="h-4 w-4 mr-1 text-primary" />
									<span>Popular: {restaurant.popularDish}</span>
								</Badge>
							</CardContent>
							<CardFooter className="p-4 border-t">
								<Button asChild className="w-full">
									<Link href={`/restaurants/${restaurant.id}`}>View Menu</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
