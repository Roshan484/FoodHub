import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { BadgePlus, User } from "lucide-react";

const Auth = () => {
	return (
		<div className="flex items-center">
			<Button asChild variant={"outline"} className="rounded-r-none">
				<Link href="/login" className="flex items-center">
					<User className="" />
					Login
				</Link>
			</Button>
			<Button asChild variant={"default"} className="rounded-l-none">
				<Link href="/signup" className="flex items-center">
					<BadgePlus />
					Sign up
				</Link>
			</Button>
		</div>
	);
};

export default Auth;
