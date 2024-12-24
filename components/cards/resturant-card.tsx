import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
}: RestaurantCardProps) {
	return (
		<Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
			<Link href={`/restaurants/${id}`} aria-label={`View menu for ${name}`}>
				<div className="relative h-48">
					<Image
						src={image}
						alt={`${name} restaurant`}
						layout="fill"
						objectFit="cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
					{!isOpen && (
						<div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
							<span className="text-white text-lg font-semibold">Closed</span>
						</div>
					)}
				</div>
				<CardContent className="p-4">
					<div className="flex justify-between items-start mb-2">
						<h3 className="text-lg font-semibold line-clamp-1">{name}</h3>
						<Badge variant={isOpen ? "default" : "secondary"}>
							{isOpen ? "Open" : "Closed"}
						</Badge>
					</div>
					<p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
						{cuisine}
					</p>
					<div
						className="flex items-center mb-2"
						aria-label={`Rating: ${rating.toFixed(1)} out of 5 stars`}
					>
						<Star className="w-4 h-4 text-yellow-400 mr-1" aria-hidden="true" />
						<span className="font-semibold mr-1">{rating.toFixed(1)}</span>
						<span className="text-sm text-gray-600 dark:text-gray-300">
							({reviewCount} reviews)
						</span>
					</div>
					<p className="text-sm text-gray-600 dark:text-gray-300">
						{priceRange} • {deliveryTime} min
					</p>
				</CardContent>
			</Link>
			<CardFooter className="p-4 border-t">
				<Link
					href={`/restaurants/${id}`}
					className="text-primary hover:underline w-full text-center"
					aria-label={`View menu for ${name}`}
				>
					View Menu
				</Link>
			</CardFooter>
		</Card>
	);
}
