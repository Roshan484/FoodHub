import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

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
				<TabsList className="mb-6 w-full justify-start overflow-auto">
					{menu.map((category) => (
						<TabsTrigger key={category.category} value={category.category}>
							{category.category}
						</TabsTrigger>
					))}
				</TabsList>
				{menu.map((category) => (
					<TabsContent key={category.category} value={category.category}>
						<div className="flex flex-col gap-4">
							{category.items.map((item, itemIndex) => (
								<Card key={itemIndex}>
									<CardContent className="p-4">
										<div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_auto] gap-4 items-center">
											<div className="flex items-center gap-4">
												<div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden">
													<Image
														src={item.image}
														alt={item.name}
														fill
														className="object-cover"
														sizes="(max-width: 768px) 80px, 80px"
													/>
												</div>
												<div className="flex-grow min-w-0">
													<h4 className="font-semibold text-lg mb-1">
														{item.name}
													</h4>
													<p className="text-sm text-muted-foreground line-clamp-2">
														{item.description}
													</p>
												</div>
											</div>

											<div className="flex flex-col items-start sm:items-center">
												<span className="font-semibold text-primary text-lg">
													Nrs. {item.discountedPrice}
												</span>
												{item.discountedPrice < item.price && (
													<div className="flex items-center gap-2">
														<span className="text-sm line-through text-gray-500">
															Nrs. {item.price}
														</span>
														<Badge variant="destructive" className="text-xs">
															{Math.round(
																(1 - item.discountedPrice / item.price) * 100
															)}
															% OFF
														</Badge>
													</div>
												)}
											</div>

											<div className="flex justify-end">
												<Button size="sm" className="whitespace-nowrap">
													<ShoppingCart className="h-4 w-4 mr-2" />
													Add to Cart
												</Button>
											</div>
										</div>
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
