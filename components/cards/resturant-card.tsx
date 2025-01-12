import Image from "next/image";
import Link from "next/link";
import { Star, Clock, DollarSign, Utensils } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RestaurantCardProps {
	id: string;
	name: string;
	image: string;
	cuisine: string;
	rating: number;
	reviewCount: number;
	priceRange: string;
	deliveryTime: string;
	isOpen: boolean;
	popularDishes: string[];
}

export function RestaurantCard({
	id,
	name,
	image,
	cuisine,
	rating,
	reviewCount,
	priceRange,
	deliveryTime,
	isOpen,
	popularDishes,
}: RestaurantCardProps) {
	return (
		<Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
			<Link href={`/restaurants/${id}`} aria-label={`View menu for ${name}`}>
				<div className="relative h-48">
					<Image
						src={image}
						alt={`${name} restaurant`}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
					<Badge
						variant={isOpen ? "default" : "secondary"}
						className="absolute top-2 right-2"
					>
						{isOpen ? "Open" : "Closed"}
					</Badge>
				</div>
				<CardContent className="p-4">
					<div className="flex justify-between items-start mb-2">
						<h3 className="text-lg font-semibold line-clamp-1">{name}</h3>
						<div
							className="flex items-center"
							aria-label={`Rating: ${rating.toFixed(1)} out of 5 stars`}
						>
							<Star
								className="w-4 h-4 text-yellow-400 mr-1"
								aria-hidden="true"
							/>
							<span className="font-semibold">{rating.toFixed(1)}</span>
						</div>
					</div>
					<p className="text-sm text-muted-foreground mb-2">{cuisine}</p>
					<div className="flex items-center justify-between mb-2 text-sm text-muted-foreground">
						<div className="flex items-center">
							<Clock className="w-4 h-4 mr-1" aria-hidden="true" />
							<span>{deliveryTime} min</span>
						</div>
						<div className="flex items-center">
							<DollarSign className="w-4 h-4 mr-1" aria-hidden="true" />
							<span>{priceRange}</span>
						</div>
						<div className="flex items-center">
							<Utensils className="w-4 h-4 mr-1" aria-hidden="true" />
							<span>{reviewCount} reviews</span>
						</div>
					</div>
					<div className="mt-2">
						<p className="text-sm font-medium mb-1">Popular Dishes:</p>
						<div className="flex flex-wrap gap-1">
							{popularDishes.map((dish, index) => (
								<Badge key={index} variant="outline" className="text-xs">
									{dish}
								</Badge>
							))}
						</div>
					</div>
				</CardContent>
			</Link>
			<CardFooter className="p-4 border-t">
				<Button asChild className="w-full">
					<Link href={`/restaurants/${id}`}>View Menu</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
