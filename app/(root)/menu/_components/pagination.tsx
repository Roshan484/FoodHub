import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
	currentPage: number;
	totalItems: number;
	itemsPerPage: number;
	onPageChange: (page: number) => void;
}

export default function Pagination({
	currentPage,
	totalItems,
	itemsPerPage,
	onPageChange,
}: PaginationProps) {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	return (
		<div className="flex justify-center items-center gap-2">
			<Button
				variant="outline"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<ChevronLeft className="h-4 w-4" />
				Previous
			</Button>
			<span className="text-sm">
				Page {currentPage} of {totalPages}
			</span>
			<Button
				variant="outline"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Next
				<ChevronRight className="h-4 w-4" />
			</Button>
		</div>
	);
}
