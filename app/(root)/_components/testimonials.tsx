import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
	{
		id: 1,
		name: "Aarav Sharma",
		role: "Food Enthusiast",
		content:
			"FoodHub has revolutionized how I order food. The variety of restaurants and the ease of use are unmatched!",
		avatar:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
	},
	{
		id: 2,
		name: "Priya Thapa",
		role: "Busy Professional",
		content:
			"As someone with a hectic schedule, FoodHub has been a lifesaver. Quick, reliable, and always delicious!",
		avatar:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
	},
	{
		id: 3,
		name: "Rajesh Gurung",
		role: "Restaurant Owner",
		content:
			"Partnering with FoodHub has significantly increased our orders and expanded our customer base. Highly recommended!",
		avatar:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
	},
];

export default function Testimonials() {
	return (
		<section className="py-7 ">
			<div className="container mx-auto px-4 py-7 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center mb-7 dark:text-white">
					What Our Customers Say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<Card
							key={testimonial.id}
							className="hover:shadow-lg transition-shadow duration-300 dark:bg-[#333]"
						>
							<CardContent className="p-6">
								<div className="flex items-center gap-4 w-full h-full mb-4">
									<div className="relative rounded-full w-14 h-14">
										<Image
											src={testimonial.avatar}
											alt={testimonial.name}
											fill
											className="rounded-full object-cover"
										/>
									</div>
									<div>
										<h3 className="font-semibold dark:text-white">
											{testimonial.name}
										</h3>
										<p className="text-gray-600 text-sm dark:text-gray-300">
											{testimonial.role}
										</p>
									</div>
								</div>
								<p className="text-[#333] dark:text-gray-300">
									{testimonial.content}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
