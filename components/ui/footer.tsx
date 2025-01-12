import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Footer() {
	return (
		<footer className=" bg-gray-50 dark:bg-muted border-t border-[#444]/20 dark:border-gray-300">
			<MaxWidthWrapper>
				<div className="grid grid-cols-1 md:grid-cols-4 p-2 gap-8 py-4">
					<div>
						<h3 className="text-lg font-semibold mb-4">About FoodHub</h3>
						<p className="mb-2 text-sm ">
							FoodHub is Nepal&apos;s premier food delivery platform, connecting
							food lovers with the best local restaurants.
						</p>
						<p className="text-sm">
							Our mission is to make great food accessible to everyone, anytime,
							anywhere.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/about"
									className="hover:text-primary transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/restaurants"
									className="hover:text-primary transition-colors"
								>
									Restaurants
								</Link>
							</li>
							<li>
								<Link
									href="/faq"
									className="hover:text-primary transition-colors"
								>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-primary transition-colors"
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Legal</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/terms"
									className="hover:text-primary transition-colors"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href="/privacy"
									className="hover:text-primary transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/cookies"
									className="hover:text-primary transition-colors"
								>
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
						<div className="flex space-x-4">
							<Link
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-primary transition-colors"
							>
								<Facebook size={24} />
								<span className="sr-only">Facebook</span>
							</Link>
							<Link
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-primary transition-colors"
							>
								<Instagram size={24} />
								<span className="sr-only">Instagram</span>
							</Link>
							<Link
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-primary transition-colors"
							>
								<Twitter size={24} />
								<span className="sr-only">Twitter</span>
							</Link>
						</div>
					</div>
				</div>
				<div className=" border-t border-[#444] dark:border-gray-300 flex items-center justify-center w-full h-full py-3 text-center">
					<p className="text-sm text-gray-600 dark:text-gray-300">
						&copy; {new Date().getFullYear()} FoodHub Nepal. All rights
						reserved.
					</p>
				</div>
			</MaxWidthWrapper>
		</footer>
	);
}
