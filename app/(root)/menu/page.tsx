import { Metadata } from "next";

import { Food } from "@/types/food";
import FoodListing from "./_components/food-listing";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export const metadata: Metadata = {
	title: "Menu | MultiVendor Food",
	description:
		"Explore our wide range of delicious dishes from various vendors.",
};

export default async function MenuPage() {
	const foods = await getFoods();

	return (
		<main className="min-h-screen dark:bg-black py-4 bg-gray-50">
			<MaxWidthWrapper className=" dark:bg-muted py-4 rounded-md">
				<FoodListing initialFoods={foods} />
			</MaxWidthWrapper>
		</main>
	);
}

async function getFoods(): Promise<Food[]> {
	// Simulating an API call
	return [
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
		// ... add more food items here
	];
}
