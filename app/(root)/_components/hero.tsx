import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<section className="py-3">
			<div className="relative bg-white rounded-md dark:bg-muted py-7">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col lg:flex-row items-center">
						<div className="lg:w-1/2 lg:pr-12">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-gray-900 mb-4">
								Delicious Food,
								<br />
								Delivered to You
							</h1>
							<p className="text-base text-[#333] dark:text-white mb-8">
								Order from your favorite local restaurants and enjoy the best
								cuisine Nepal has to offer, right at your doorstep.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button size="lg" className="w-full  sm:w-auto">
									Order Now
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="w-full sm:w-auto"
									asChild
								>
									<Link href={"/resturants"}>View Restaurants</Link>
								</Button>
							</div>
						</div>
						<div className="lg:w-1/2 mt-12 lg:mt-0">
							<Image
								src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
								alt="Food delivery illustration"
								width={600}
								height={500}
								className="w-full h-auto rounded-md"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
