import { Button } from "@/components/ui/button";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { Input } from "../ui/input";
import { ThemeToggle } from "../ui/theme-toggle";
import Link from "next/link";

export function MobileNav() {
	const navigationLinks = [
		{
			name: "Restaurants",
			href: "/restaurants",
		},
		{
			name: "Cuisines",
			href: "/cuisines",
		},
		{
			name: "Menu",
			href: "/menu",
		},
	];
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">
					<span className="sr-only">Toggle Menu</span>
					<Menu className="h-6 w-6" />
				</Button>
			</SheetTrigger>
			<SheetContent className="w-[300px]">
				<SheetHeader>
					<SheetTitle className="sr-only">Navlinks</SheetTitle>
					<SheetDescription className="sr-only">
						Make changes to your profile here. Click save when youre done.
					</SheetDescription>
				</SheetHeader>
				<div className="w-full h-full mt-10 space-y-4">
					<ul className="space-y-4">
						{navigationLinks.map((link) => (
							<li
								className="border border-neutral-400 px-2 py-2 rounded-md hover:bg-neutral-100 text-sm font-medium"
								key={link.name}
							>
								<Link href={link.href}>{link.name}</Link>
							</li>
						))}
					</ul>

					<div className="flex items-center justify-between space-x-2 w-full ">
						Theme:
						<ThemeToggle />
					</div>
					<Sheet>
						<SheetTrigger asChild>
							<Button className=" rounded-md w-full lg:hidden">
								<Search className="h-4 w-4" />
								<span className="">Search</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="top">
							<div className="flex my-4 items-center space-x-2">
								<Input
									type="search"
									placeholder="Search for restaurants or cuisines"
									className="flex-1"
								/>
								<Button type="submit" size="icon">
									<Search className="h-4 w-4" />
									<span className="sr-only">Search</span>
								</Button>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</SheetContent>
		</Sheet>
	);
}
