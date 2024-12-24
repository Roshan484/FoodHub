import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
	{
		id: 1,
		name: "Nepali Cuisine",
		image:
			"https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
	},
	{
		id: 2,
		name: "Indian Delights",
		image:
			"https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: 3,
		name: "Chinese Favorites",
		image:
			"https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1029&q=80",
	},
	{
		id: 4,
		name: "Fast Food",
		image:
			"https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
	},
	{
		id: 5,
		name: "Healthy Options",
		image:
			"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
	},
	{
		id: 6,
		name: "Desserts",
		image:
			"https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
	},
];

export default function FoodCategories() {
	return (
		<section className="py-7 ">
			<div className="container bg-gray-50 dark:bg-muted py-7 rounded-md mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center mb-7 dark:text-white">
					Explore Food Categories
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
					{categories.map((category) => (
						<Card
							key={category.id}
							className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800"
						>
							<CardContent className="p-0">
								<div className="relative h-40">
									<Image
										src={category.image}
										alt={category.name}
										layout="fill"
										objectFit="cover"
									/>
									<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
										<h3 className="text-white text-lg font-semibold text-center">
											{category.name}
										</h3>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
