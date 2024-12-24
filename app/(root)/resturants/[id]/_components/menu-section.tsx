import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
	name: string;
	price: number;
	discountedPrice: number;
	description: string;
	image: string;
}

interface MenuCategory {
	category: string;
	items: MenuItem[];
}

interface MenuSectionProps {
	menu: MenuCategory[];
}

export function MenuSection({ menu }: MenuSectionProps) {
	return (
		<section className="mb-12">
			<h2 className="text-3xl font-semibold mb-6">Menu</h2>
			<Tabs defaultValue={menu[0].category}>
				<TabsList className="mb-6">
					{menu.map((category) => (
						<TabsTrigger key={category.category} value={category.category}>
							{category.category}
						</TabsTrigger>
					))}
				</TabsList>
				{menu.map((category) => (
					<TabsContent key={category.category} value={category.category}>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{category.items.map((item, itemIndex) => (
								<Card key={itemIndex}>
									<CardContent className="p-4">
										<div className="relative h-48 mb-4 rounded-md overflow-hidden">
											<Image
												src={item.image}
												alt={item.name}
												layout="fill"
												objectFit="cover"
											/>
										</div>
										<div className="flex justify-between items-start mb-2">
											<h4 className="font-semibold">{item.name}</h4>
											<div className="text-right">
												<span className="font-semibold text-primary">
													Nrs. {item.discountedPrice}
												</span>
												{item.discountedPrice < item.price && (
													<div className="flex items-center">
														<span className="text-sm line-through text-gray-500 mr-2">
															Nrs. {item.price}
														</span>
														<Badge variant="destructive">
															{Math.round(
																(1 - item.discountedPrice / item.price) * 100
															)}
															% OFF
														</Badge>
													</div>
												)}
											</div>
										</div>
										<p className="text-sm text-gray-600 dark:text-gray-300">
											{item.description}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</TabsContent>
				))}
			</Tabs>
		</section>
	);
}
