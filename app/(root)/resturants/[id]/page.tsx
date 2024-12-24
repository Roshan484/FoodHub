import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, Clock, DollarSign, MapPin, Phone, Utensils } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ReviewSection } from "./_components/review-section";
import { MenuSection } from "./_components/menu-section";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// This would typically come from an API or database
const restaurant = {
	id: "1",
	name: "Nepali Flavors",
	image:
		"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
	cuisine: "Nepali",
	rating: 4.8,
	reviewCount: 320,
	priceRange: "$$",
	deliveryTime: "30-45",
	isOpen: true,
	address: "123 Durbar Marg, Kathmandu",
	phone: "+977 1-4XXXXXX",
	description:
		"Experience the authentic flavors of Nepal in the heart of Kathmandu. Our chefs prepare traditional dishes with a modern twist, using locally sourced ingredients.",
	features: [
		"Outdoor seating",
		"Vegetarian options",
		"Gluten-free options",
		"Family-friendly",
		"Live music on weekends",
	],
	awards: [
		"Best Nepali Restaurant 2022",
		"TripAdvisor Certificate of Excellence",
	],
	menu: [
		{
			category: "Appetizers",
			items: [
				{
					name: "Vegetable Momo",
					price: 150,
					discountedPrice: 120,
					description: "Steamed dumplings filled with mixed vegetables",
					image:
						"https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
				},
				{
					name: "Chicken Choila",
					price: 200,
					discountedPrice: 180,
					description: "Spicy grilled chicken with Newari spices",
					image:
						"https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
				},
			],
		},
		{
			category: "Main Courses",
			items: [
				{
					name: "Dal Bhat Tarkari",
					price: 300,
					discountedPrice: 270,
					description:
						"Traditional Nepali meal with lentils, rice, and vegetables",
					image:
						"https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
				},
				{
					name: "Thakali Set",
					price: 350,
					discountedPrice: 315,
					description: "Assortment of dishes from the Thakali cuisine",
					image:
						"https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
				},
			],
		},
		{
			category: "Desserts",
			items: [
				{
					name: "Kheer",
					price: 100,
					discountedPrice: 90,
					description: "Traditional rice pudding with nuts and spices",
					image:
						"https://images.unsplash.com/photo-1633383718081-22ac93e3db65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
				},
				{
					name: "Sel Roti",
					price: 80,
					discountedPrice: 70,
					description: "Sweet rice bread, perfect for dessert or snack",
					image:
						"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
				},
			],
		},
	],
	reviews: [
		{
			id: 1,
			author: "Aarav Sharma",
			rating: 5,
			comment:
				"Absolutely loved the authentic Nepali flavors! The momos were out of this world.",
		},
		{
			id: 2,
			author: "Priya Thapa",
			rating: 4,
			comment:
				"Great food and ambiance. The service was a bit slow, but the taste made up for it.",
		},
		{
			id: 3,
			author: "Rajesh Gurung",
			rating: 5,
			comment:
				"Best Dal Bhat in Kathmandu! The Thakali Set was also exceptional.",
		},
		{
			id: 4,
			author: "Sarah Johnson",
			rating: 4,
			comment:
				"As a tourist, I found this place to be a perfect introduction to Nepali cuisine. Friendly staff and great explanations of the dishes.",
		},
		{
			id: 5,
			author: "Anita Maharjan",
			rating: 5,
			comment:
				"The vegetarian options are plentiful and delicious. Loved the ambiance too!",
		},
	],
};

export default function RestaurantPage({ params }: { params: { id: string } }) {
	if (params.id !== restaurant.id) {
		notFound();
	}

	return (
		<MaxWidthWrapper>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
				<div className="md:col-span-2">
					<div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-6">
						<Image
							src={restaurant.image}
							alt={restaurant.name}
							layout="fill"
							objectFit="cover"
							priority
						/>
					</div>
					<h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
					<div className="flex flex-wrap items-center gap-4 mb-6">
						<Badge variant={restaurant.isOpen ? "default" : "secondary"}>
							{restaurant.isOpen ? "Open" : "Closed"}
						</Badge>
						<div
							className="flex items-center"
							aria-label={`Rating: ${restaurant.rating} out of 5 stars`}
						>
							<Star
								className="w-5 h-5 text-yellow-400 mr-1"
								aria-hidden="true"
							/>
							<span className="font-semibold mr-1">{restaurant.rating}</span>
							<span className="text-gray-600 dark:text-gray-300">
								({restaurant.reviewCount} reviews)
							</span>
						</div>
						<div className="flex items-center">
							<Clock className="w-5 h-5 mr-1" aria-hidden="true" />
							<span>{restaurant.deliveryTime} min</span>
						</div>
						<div className="flex items-center">
							<DollarSign className="w-5 h-5 mr-1" aria-hidden="true" />
							<span>{restaurant.priceRange}</span>
						</div>
					</div>
				</div>
				<div>
					<h2 className="text-2xl font-semibold mb-4">About Us</h2>
					<p className="text-gray-600 dark:text-gray-300 mb-6">
						{restaurant.description}
					</p>
					<h3 className="text-xl font-semibold mb-3">Features</h3>
					<ul className="list-disc list-inside mb-6">
						{restaurant.features.map((feature, index) => (
							<li key={index} className="mb-2 flex items-start">
								<Utensils className="w-5 h-5 mr-2 mt-1" aria-hidden="true" />
								<span>{feature}</span>
							</li>
						))}
					</ul>
					<h3 className="text-xl font-semibold mb-3">Awards</h3>
					<div className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Location & Contact</h2>
						<div className="flex items-start mb-2">
							<MapPin className="w-5 h-5 mr-2 mt-1" aria-hidden="true" />
							<span>{restaurant.address}</span>
						</div>
						<div className="flex items-center">
							<Phone className="w-5 h-5 mr-2" aria-hidden="true" />
							<span>{restaurant.phone}</span>
						</div>
					</div>
				</div>
			</div>
			<MenuSection menu={restaurant.menu} />
			<ReviewSection reviews={restaurant.reviews} />
		</MaxWidthWrapper>
	);
}
