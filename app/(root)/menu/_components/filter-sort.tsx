import { useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FilterOptions, SortOption } from "@/types/food";

interface FilterSortProps {
	onFilter: (filters: FilterOptions) => void;
	onSort: (sortOption: SortOption) => void;
}

export default function FilterSort({ onFilter, onSort }: FilterSortProps) {
	const [filters, setFilters] = useState<FilterOptions>({
		veg: false,
		nonVeg: false,
		categories: [],
		priceRange: [0, 100],
	});

	const handleFilterChange = (key: keyof FilterOptions) => {
		const newFilters = { ...filters, [key]: !filters[key] };
		setFilters(newFilters);
		onFilter(newFilters);
	};

	const handleSortChange = (value: SortOption) => {
		onSort(value);
	};

	return (
		<div className="flex flex-wrap justify-between gap-4 items-center">
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2">
					<Checkbox
						id="veg"
						checked={filters.veg}
						onCheckedChange={() => handleFilterChange("veg")}
					/>
					<Label htmlFor="veg" className="text-sm hover:cursor-pointer">
						Vegetarian
					</Label>
				</div>
				<div className="flex items-center gap-2">
					<Checkbox
						id="nonVeg"
						checked={filters.nonVeg}
						onCheckedChange={() => handleFilterChange("nonVeg")}
					/>
					<Label htmlFor="nonVeg" className="text-sm hover:cursor-pointer">
						Non-Vegetarian
					</Label>
				</div>
			</div>
			<div className="flex items-center gap-2">
				<Select onValueChange={handleSortChange}>
					<SelectTrigger className="w-[140px] outline-none border border-neutral-400">
						<SelectValue placeholder="Sort by" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="price-asc">Price: Low to High</SelectItem>
						<SelectItem value="price-desc">Price: High to Low</SelectItem>
						<SelectItem value="rating-desc">Highest Rated</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}
