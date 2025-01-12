import { BadgePlus, GalleryVerticalEnd, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function SignupPage() {
	return (
		<MaxWidthWrapper className="  min-h-[80vh] flex  items-center justify-center">
			<div className="grid  md:grid-cols-2 gap-5 min-h-96  border p-4 rounded-md shadow-sm">
				<div className={"flex flex-col gap-6 "}>
					<div>
						<div className="flex flex-col gap-6">
							<div className="flex flex-col items-center gap-2">
								<Link
									href="/"
									className="flex flex-col items-center gap-2 font-medium"
								>
									<div className="flex h-8 w-8 items-center justify-center rounded-md">
										<GalleryVerticalEnd className="size-6" />
									</div>
									<span className="sr-only">FoodHub</span>
								</Link>
								<h1 className="text-xl font-bold">Welcome to FoodHub.</h1>
								<div className="text-center text-sm">
									Already have an account?{" "}
									<Link
										href="/login"
										className="hover:underline text-blue-500 underline-offset-4"
									>
										Login
									</Link>
								</div>
							</div>
							<div className="flex flex-col gap-6">
								<div className="mt-8 space-y-6">
									<div>
										<Link href="/signup/user" passHref>
											<Button className="w-full">
												<User /> Sign up as a User
											</Button>
										</Link>
									</div>
									<div>
										<Link href="/signup/restaurant" passHref>
											<Button className="w-full" variant="outline">
												<BadgePlus /> Sign up as a Restaurant
											</Button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="text-balance text-center text-sm text-muted-foreground hover:[&_a]:underline [&_a]:underline-offset-4  ">
						By clicking, you agree to our{" "}
						<Link href="/terms-of-service" className="text-blue-500">
							Terms of Service
						</Link>{" "}
						and{" "}
						<Link href="/privacy-policy" className="text-blue-500">
							Privacy Policy
						</Link>
						.
					</div>
				</div>
				<div className="relative hidden bg-muted md:block">
					<Image
						src="https://images.unsplash.com/photo-1556745750-68295fefafc5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Image"
						fill
						className="absolute rounded inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
					/>
				</div>
			</div>
		</MaxWidthWrapper>
	);
}
