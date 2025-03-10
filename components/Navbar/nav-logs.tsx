import React from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserProfile } from "./user-profile";
import { ThemeToggle } from "../ui/theme-toggle";
import Link from "next/link";
import Auth from "../auth/auth";

const Navlogs = () => {
	const userLoggedIn = false;
	return (
		<>
			<div className="hidden lg:flex">
				<Input
					type="search"
					placeholder="Search for restaurants or cuisines"
					className="w-[200px] md:w-[300px] rounded-l-md rounded-r-none"
				/>
				<Button
					type="submit"
					size="icon"
					className=" rounded-r-md rounded-l-none"
				>
					<Search className="h-4 w-4" />
					<span className="sr-only">Search</span>
				</Button>
			</div>

			<div className="hidden md:flex">
				<ThemeToggle />
			</div>

			<Sheet>
				<SheetTrigger asChild>
					<Button
						type="submit"
						className=" rounded-md hidden md:flex lg:hidden"
					>
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
			{userLoggedIn ? (
				<>
					<Button asChild variant="ghost" size="icon" className="relative">
						<Link href={"/cart"}>
							<ShoppingCart className="h-5 w-5" />
							<span className="sr-only">Shopping cart</span>
							<div className="absolute -top-1 -right-1 inline-flex text-sm rounded-full w-5 h-5 justify-center items-center bg-red-600">
								<span className="text-xs text-white">0</span>
							</div>
						</Link>
					</Button>
					<UserProfile />
				</>
			) : (
				<Auth />
			)}
		</>
	);
};

export default Navlogs;
