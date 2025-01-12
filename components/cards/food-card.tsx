// Replace with actual UI imports
import {
	Drumstick,
	HandPlatter,
	Heart,
	Leaf,
	ShoppingCart,
	Star,
	Timer,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Food } from "@/types/food";

export function FoodCard({
	id,
	name,
	image,
	category,
	restaurant,
	price,
	rating,
	reviews,
	prepTime,
	taste,
	isVeg,
}: Food) {
	return (
		<Card
			key={id}
			className="group overflow-hidden hover:shadow-lg transition-all duration-300"
		>
			<div className="relative">
				<Image
					src={image}
					alt={`${name} dish`}
					width={400}
					height={300}
					className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
				/>
				<Badge
					variant="secondary"
					className="absolute top-3 right-3 bg-black/75 text-white"
				>
					{category}
				</Badge>
			</div>
			<CardContent className="px-3 py-2">
				<div className="flex justify-between items-start mb-2">
					<div>
						<h3 className="font-semibold text-lg">{name}</h3>
						<p className="text-sm flex items-center gap-1 text-muted-foreground">
							<HandPlatter className="h-4 w-4 text-blue-500" />
							{restaurant}
						</p>
					</div>
					<div className="flex items-center justify-between">
						<span className="text-xl font-bold">Nrs. {price}</span>
					</div>
				</div>

				<div className="flex items-center gap-2 mb-3">
					<div className="flex items-center">
						<Star className="h-4 w-4 text-yellow-400 fill-current" />
						<span className="ml-1 font-medium">{rating.toFixed(1)}</span>
					</div>
					<span className="text-muted-foreground text-sm">
						({reviews} reviews)
					</span>
					<div className="flex items-center ml-auto">
						<Timer className="h-4 w-4 text-muted-foreground" />
						<span className="ml-1 text-sm text-muted-foreground">
							{prepTime} min
						</span>
					</div>
				</div>

				<div className="flex items-center gap-2 mb-2">
					<Badge
						variant="outline"
						className={`flex items-center gap-1 ${
							taste === "Spicy"
								? "bg-red-100 text-red-800 border-red-200"
								: taste === "Savory"
									? "bg-orange-100 text-orange-800 border-orange-200"
									: taste === "Sweet"
										? "bg-yellow-100 text-yellow-800 border-yellow-200"
										: taste === "Salty"
											? "bg-blue-100 text-blue-800 border-blue-200"
											: taste === "Bitter"
												? "bg-green-100 text-green-800 border-green-200"
												: "bg-gray-100 text-gray-800 border-gray-200"
						}`}
					>
						{taste}
					</Badge>
					{isVeg ? (
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
	);
}
