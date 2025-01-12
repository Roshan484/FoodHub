import { Metadata } from "next";
import CartContent from "./_components/cart-content";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export const metadata: Metadata = {
	title: "Your Cart | MultiVendor Food",
	description:
		"Review and manage your food selections from various restaurants.",
};

export default function CartPage() {
	return (
		<main className="min-h-screen dark:bg-black bg-gray-50 py-4">
			<MaxWidthWrapper>
				<CartContent />
			</MaxWidthWrapper>
		</main>
	);
}
