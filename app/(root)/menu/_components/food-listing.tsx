/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Food, FilterOptions, SortOption } from "@/types/food";
import SearchBar from "./search-bar";
import FilterSort from "./filter-sort";
import { FoodCard } from "@/components/cards/food-card";
import Pagination from "./pagination";

interface FoodListingProps {
	initialFoods: Food[];
}

export default function FoodListing({ initialFoods }: FoodListingProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [foods, setFoods] = useState<Food[]>(initialFoods);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 12;

	const handleSearch = (query: string) => {
		// Implement search logic here
		// Update URL with search query
		router.push(`/menu?search=${query}`);
	};

	const handleFilter = (filters: FilterOptions) => {
		// Implement filter logic here
		// Update URL with filter parameters
	};

	const handleSort = (sortOption: SortOption) => {
		// Implement sort logic here
		// Update URL with sort parameter
	};

	const paginatedFoods = foods.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	return (
		<div className="">
			<h1 className="text-3xl font-bold mb-4 text-center">Our Menu</h1>
			<div className="mb-4">
				<SearchBar onSearch={handleSearch} />
			</div>
			<div className="mb-8 border border-neutral-400 rounded-sm px-1 py-1">
				<FilterSort onFilter={handleFilter} onSort={handleSort} />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{paginatedFoods.map((food) => (
					<FoodCard key={food.id} {...food} />
				))}
			</div>
			<div className="mt-8">
				<Pagination
					currentPage={currentPage}
					totalItems={foods.length}
					itemsPerPage={itemsPerPage}
					onPageChange={setCurrentPage}
				/>
			</div>
		</div>
	);
}
