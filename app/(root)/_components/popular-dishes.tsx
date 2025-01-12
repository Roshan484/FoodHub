import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Star,
	ShoppingCart,
	Timer,
	Heart,
	Leaf,
	Drumstick,
	HandPlatter,
} from "lucide-react";

const popularDishes = [
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
	},
	{
		id: 2,
		name: "Dal Bhat",
		restaurant: "Himalayan Bites",
		price: 250,
		image:
			"https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		rating: 4.7,
		reviews: 95,
		prepTime: "25-30",
		taste: "Salty",
		isVeg: true,
		category: "Main Course",
	},
	{
		id: 3,
		name: "Sel Roti",
		restaurant: "Kathmandu Kitchen",
		price: 100,
		image:
			"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
		rating: 4.6,
		reviews: 80,
		prepTime: "10-15",
		taste: "Sweet",
		isVeg: true,
		category: "Breakfast",
	},
	{
		id: 4,
		name: "Choila",
		restaurant: "Spice Route",
		price: 200,
		image:
			"https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
		rating: 4.8,
		reviews: 110,
		prepTime: "20-25",
		taste: "Spicy",
		isVeg: false,
		category: "Appetizer",
	},
];

export default function PopularDishes() {
	return (
		<section className="py-8 ">
			<div className="dark:bg-muted p-2">
				<div className="flex flex-col items-center mb-10">
					<h2 className="text-3xl font-bold mb-2">Popular Dishes</h2>
					<p className="text-muted-foreground text-center">
						Discover the most loved dishes from our local cuisine
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{popularDishes.map((dish) => (
						<Card
							key={dish.id}
							className="group overflow-hidden hover:shadow-lg transition-all duration-300"
						>
							<div className="relative">
								<Image
									src={dish.image}
									alt={`${dish.name} dish`}
									width={400}
									height={300}
									className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
								/>
								<Badge
									variant="secondary"
									className="absolute top-3 right-3 bg-black/75 text-white"
								>
									{dish.category}
								</Badge>
							</div>
							<CardContent className="px-3 py-2">
								<div className="flex justify-between items-start mb-2">
									<div>
										<h3 className="font-semibold text-lg">{dish.name}</h3>
										<p className="text-sm flex items-center gap-1 text-muted-foreground">
											<HandPlatter className="h-4 w-4 text-blue-500" />
											{dish.restaurant}
										</p>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-xl font-bold">Nrs. {dish.price}</span>
									</div>
								</div>

								<div className="flex items-center gap-2 mb-3">
									<div className="flex items-center">
										<Star className="h-4 w-4 text-yellow-400 fill-current" />
										<span className="ml-1 font-medium">{dish.rating}</span>
									</div>
									<span className="text-muted-foreground text-sm">
										({dish.reviews} reviews)
									</span>
									<div className="flex items-center ml-auto">
										<Timer className="h-4 w-4 text-muted-foreground" />
										<span className="ml-1 text-sm text-muted-foreground">
											{dish.prepTime} min
										</span>
									</div>
								</div>

								<div className="flex items-center gap-2 mb-2">
									<Badge
										variant="outline"
										className={`flex items-center gap-1 ${
											dish.taste === "Spicy"
												? "bg-red-100 text-red-800 border-red-200"
												: dish.taste === "Savory"
													? "bg-orange-100 text-orange-800 border-orange-200"
													: dish.taste === "Sweet"
														? "bg-yellow-100 text-yellow-800 border-yellow-200"
														: dish.taste === "Salty"
															? "bg-blue-100 text-blue-800 border-blue-200"
															: dish.taste === "Bitter"
																? "bg-green-100 text-green-800 border-green-200"
																: "bg-gray-100 text-gray-800 border-gray-200"
										}`}
									>
										{dish.taste}
									</Badge>
									{dish.isVeg ? (
										<Badge
											variant={"outline"}
											className="text-sm flex items-center gap-1.5 bg-green-100 text-green-800 "
										>
											<Leaf className="h-4 w-4 text-green-500" />
											<span className="text-xs">Veg</span>
										</Badge>
									) : (
										<Badge
											variant={"outline"}
											className="text-sm flex items-center gap-1.5 bg-red-100 text-red-800 "
										>
											<Drumstick className="h-4 w-4 text-red-500" />
											<span className="text-xs">Non-Veg</span>
										</Badge>
									)}
								</div>
							</CardContent>
							<CardFooter className="px-2 py-2 flex items-center gap-2">
								<Button className="w-full flex items-center justify-center gap-2">
									<ShoppingCart className="h-4 w-4" />
									Add to Cart
								</Button>
								<Button
									variant="outline"
									className="w-10 flex items-center justify-center gap-2"
								>
									<Heart className="h-4 w-4" />
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
