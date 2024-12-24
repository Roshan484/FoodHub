import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
	id: number;
	author: string;
	rating: number;
	comment: string;
}

interface ReviewSectionProps {
	reviews: Review[];
}

export function ReviewSection({ reviews }: ReviewSectionProps) {
	const averageRating =
		reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

	return (
		<section className="mb-12">
			<h2 className="text-3xl font-semibold mb-6">Customer Reviews</h2>
			<div className="flex items-center mb-6">
				<div
					className="flex items-center mr-4"
					aria-label={`Average rating: ${averageRating.toFixed(1)} out of 5 stars`}
				>
					<Star className="w-6 h-6 text-yellow-400 mr-1" aria-hidden="true" />
					<span className="text-2xl font-bold mr-2">
						{averageRating.toFixed(1)}
					</span>
				</div>
				<span className="text-gray-600 dark:text-gray-300">
					Based on {reviews.length} reviews
				</span>
			</div>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{reviews.map((review) => (
					<Card key={review.id}>
						<CardContent className="p-4">
							<div className="flex items-center mb-2">
								<span className="font-semibold mr-2">{review.author}</span>
								<div
									className="flex"
									aria-label={`Rating: ${review.rating} out of 5 stars`}
								>
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`w-4 h-4 ${
												i < review.rating ? "text-yellow-400" : "text-gray-300"
											}`}
											aria-hidden="true"
										/>
									))}
								</div>
							</div>
							<p className="text-gray-600 dark:text-gray-300">
								{review.comment}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
