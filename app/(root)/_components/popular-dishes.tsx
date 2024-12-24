import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const popularDishes = [
	{
		id: 1,
		name: "Momo",
		price: 150,
		image:
			"https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
		rating: 4.9,
		reviews: 120,
	},
	{
		id: 2,
		name: "Dal Bhat",
		price: 250,
		image:
			"https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		rating: 4.7,
		reviews: 95,
	},
	{
		id: 3,
		name: "Sel Roti",
		price: 100,
		image:
			"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
		rating: 4.6,
		reviews: 80,
	},
	{
		id: 4,
		name: "Choila",
		price: 200,
		image:
			"https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
		rating: 4.8,
		reviews: 110,
	},
];

export default function PopularDishes() {
	return (
		<section className="py-7 ">
			<div className="container dark:bg-muted rounded-md mx-auto px-4 py-7 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
					Popular Dishes
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{popularDishes.map((dish) => (
						<Card
							key={dish.id}
							className="overflow-hidden hover:shadow-lg transition-shadow duration-300 "
						>
							<Image
								src={dish.image}
								alt={`${dish.name} dish`}
								width={300}
								height={200}
								className="w-full h-48 object-cover"
							/>
							<CardContent className="p-4">
								<h3 className="font-semibold text-lg mb-2 dark:text-white">
									{dish.name}
								</h3>
								<div className="flex items-center justify-between mb-4">
									<span className="text-2xl font-bold text-primary dark:text-primary-400">
										Nrs. {dish.price}
									</span>
									<div className="flex items-center">
										<span className="text-yellow-500 flex items-center mr-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5 mr-1"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											{dish.rating}
										</span>
										<span className="text-gray-600 text-sm dark:text-gray-300">
											({dish.reviews} reviews)
										</span>
									</div>
								</div>
								<Button className="w-full">Add to Cart</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
