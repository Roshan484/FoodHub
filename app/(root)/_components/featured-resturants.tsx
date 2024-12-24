import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const featuredRestaurants = [
	{
		id: 1,
		name: "Nepali Flavors",
		image:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		rating: 4.8,
		cuisine: "Nepali",
	},
	{
		id: 2,
		name: "Himalayan Bites",
		image:
			"https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
		rating: 4.6,
		cuisine: "Tibetan",
	},
	{
		id: 3,
		name: "Kathmandu Kitchen",
		image:
			"https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		rating: 4.7,
		cuisine: "Newari",
	},
	{
		id: 4,
		name: "Spice Route",
		image:
			"https://images.unsplash.com/photo-1542367592-8849eb950fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
		rating: 4.5,
		cuisine: "Indian",
	},
];

export default function FeaturedRestaurants() {
	return (
		<section className="py-7">
			<div className="container mx-auto dark:bg-muted rounded-md py-5 px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center mb-8">
					Featured Restaurants
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{featuredRestaurants.map((restaurant) => (
						<Card
							key={restaurant.id}
							className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
						>
							<Image
								src={restaurant.image}
								alt={`${restaurant.name} restaurant`}
								width={300}
								height={200}
								className="w-full h-48 object-cover"
							/>
							<CardContent className="p-4">
								<h3 className="font-semibold text-lg mb-2">
									{restaurant.name}
								</h3>
								<div className="flex items-center justify-between">
									<span className="text-yellow-500 flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 mr-1"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
										{restaurant.rating}
									</span>
									<span className="text-gray-600">{restaurant.cuisine}</span>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
