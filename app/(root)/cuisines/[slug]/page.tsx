import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
	Star,
	Clock,
	Heart,
	MapPin,
	BadgeCheck,
	Leaf,
	Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const cuisinesData = {
	italian: {
		name: "Italian Cuisine",
		description:
			"Savor the flavors of Italy with our selection of pasta, pizza, and more.",
		image:
			"https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
		popularDishes: [
			{
				name: "Margherita Pizza",
				image:
					"https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
				restaurant: {
					name: "La Piazza",
					location: "Downtown",
					rating: 4.8,
					reviews: 234,
					verified: true,
					deliveryTime: "20-30",
					minOrder: 15,
				},
				price: 18.99,
				preparationTime: "15-20",
				dietary: ["Vegetarian"],
				spiciness: "Mild",
			},
			{
				name: "Spaghetti Carbonara",
				image:
					"https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
				restaurant: {
					name: "Pasta Paradise",
					location: "Westside",
					rating: 4.6,
					reviews: 189,
					verified: true,
					deliveryTime: "25-35",
					minOrder: 20,
				},
				price: 16.99,
				preparationTime: "20-25",
				dietary: [],
				spiciness: "Medium",
			},
			{
				name: "Tiramisu",
				image:
					"https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
				restaurant: {
					name: "Dolce Vita",
					location: "City Center",
					rating: 4.9,
					reviews: 156,
					verified: true,
					deliveryTime: "15-25",
					minOrder: 10,
				},
				price: 8.99,
				preparationTime: "5-10",
				dietary: ["Vegetarian"],
				spiciness: "Hot",
			},
		],
	},
	// ... other cuisines
};

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const cuisine = cuisinesData[params.slug as keyof typeof cuisinesData];
	if (!cuisine) {
		return {
			title: "Cuisine Not Found",
		};
	}
	return {
		title: `${cuisine.name} | FoodHub`,
		description: cuisine.description,
	};
}

export default function CuisinePage({ params }: { params: { slug: string } }) {
	const cuisine = cuisinesData[params.slug as keyof typeof cuisinesData];

	if (!cuisine) {
		notFound();
	}

	return (
		<MaxWidthWrapper className="container mx-auto px-4 py-4">
			<div className="relative h-56 mb-2 rounded-lg overflow-hidden">
				<Image
					src={cuisine.image}
					alt={cuisine.name}
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<h1 className="text-4xl font-bold text-white">{cuisine.name}</h1>
				</div>
			</div>
			<p className="text-base mb-8">{cuisine.description}</p>
			<h2 className="text-2xl font-bold mb-6">Popular Dishes</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{cuisine.popularDishes.map((dish) => (
					<div
						key={dish.name}
						className="rounded-xl overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow duration-200"
					>
						<div className="relative">
							<Image
								src={dish.image}
								alt={dish.name}
								width={400}
								height={300}
								className="w-full h-48 object-cover"
							/>
							<Button
								variant="ghost"
								size="icon"
								className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white/90"
							>
								<Heart className="h-5 w-5" />
								<span className="sr-only">Add to favorites</span>
							</Button>
						</div>
						<div className="p-4">
							<div className="flex items-start justify-between gap-2 mb-3">
								<div>
									<h3 className="text-xl font-semibold line-clamp-1">
										{dish.name}
									</h3>
									<div className="flex items-center gap-1 mt-1">
										<Link
											href={`/restaurants/${dish.restaurant.name.toLowerCase().replace(/\s+/g, "-")}`}
											className="text-sm font-medium hover:underline flex items-center gap-1"
										>
											{dish.restaurant.name}
											{dish.restaurant.verified && (
												<BadgeCheck className="h-4 w-4 text-blue-500" />
											)}
										</Link>
									</div>
								</div>
								<div className="text-right">
									<div className="text-lg font-bold">${dish.price}</div>
									<div className="text-sm text-muted-foreground">
										Min. ${dish.restaurant.minOrder}
									</div>
								</div>
							</div>

							<div className="flex items-center gap-4 mb-3">
								<div className="flex items-center text-sm">
									<Star className="h-4 w-4 text-yellow-400 mr-1" />
									<span className="font-medium">{dish.restaurant.rating}</span>
									<span className="text-muted-foreground ml-1">
										({dish.restaurant.reviews})
									</span>
								</div>
								<div className="flex items-center text-sm">
									<Clock className="h-4 w-4 mr-1" />
									<span>{dish.restaurant.deliveryTime} mins</span>
								</div>
								<div className="flex items-center text-sm">
									<MapPin className="h-4 w-4 mr-1" />
									<span>{dish.restaurant.location}</span>
								</div>
							</div>

							<div className="flex flex-wrap gap-2 mb-4">
								{dish.dietary.includes("Vegetarian") && (
									<Badge
										variant="secondary"
										className="bg-green-100 text-green-800 flex items-center gap-1"
									>
										<Leaf className="h-3 w-3" />
										Vegetarian
									</Badge>
								)}
								{dish.spiciness && (
									<Badge
										variant="secondary"
										className={`flex items-center gap-1 ${
											dish.spiciness === "Mild"
												? "bg-yellow-100 text-yellow-800"
												: dish.spiciness === "Medium"
													? "bg-orange-100 text-orange-800"
													: "bg-red-100 text-red-800"
										}`}
									>
										<Flame
											className={`h-3 w-3 ${
												dish.spiciness === "Mild"
													? "text-yellow-500"
													: dish.spiciness === "Medium"
														? "text-orange-500"
														: "text-red-500"
											}`}
										/>
										{dish.spiciness}
									</Badge>
								)}
							</div>

							<div className="flex items-center gap-2">
								<Button className="flex-1">Add to Cart</Button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="mt-8">
				<Link href="/cuisines" className="text-blue-600 hover:underline">
					← Back to All Cuisines
				</Link>
			</div>
		</MaxWidthWrapper>
	);
}
