"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, MapPin, CreditCard, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AddressStep from "@/components/checkout/address-step";
import PaymentStep from "@/components/checkout/payment-step";
import ConfirmationStep from "@/components/checkout/confirmation-step";
import ReviewStep from "./review.step";
import MaxWidthWrapper from "../MaxWidthWrapper";

const steps = [
	{ id: "address", title: "Address", icon: MapPin },
	{ id: "review", title: "Review", icon: ShoppingBag },
	{ id: "payment", title: "Payment", icon: CreditCard },
	{ id: "confirmation", title: "Confirmation", icon: Check },
];

export default function CheckoutContent() {
	const [currentStep, setCurrentStep] = useState(0);

	const handleNext = () => {
		setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
	};

	const handleBack = () => {
		setCurrentStep((prev) => Math.max(prev - 1, 0));
	};

	return (
		<MaxWidthWrapper className="">
			<h1 className="text-3xl font-bold mb-4 text-[#333] text-center">
				Checkout
			</h1>
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="w-full lg:w-2/3">
					<Card>
						<CardHeader>
							<div className="flex justify-between items-center mb-4">
								{steps.map((step, index) => (
									<div key={step.id} className="flex flex-col items-center">
										<div
											className={`w-10 h-10 rounded-full flex items-center justify-center ${
												index <= currentStep
													? "bg-primary text-primary-foreground"
													: "bg-gray-200 text-gray-500"
											}`}
										>
											<step.icon className="w-5 h-5" />
										</div>
										<span className="text-sm mt-2">{step.title}</span>
									</div>
								))}
							</div>
						</CardHeader>
						<CardContent>
							<AnimatePresence mode="wait">
								<motion.div
									key={currentStep}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ duration: 0.3 }}
								>
									{currentStep === 0 && <AddressStep />}
									{currentStep === 1 && <ReviewStep />}
									{currentStep === 2 && <PaymentStep />}
									{currentStep === 3 && <ConfirmationStep />}
								</motion.div>
							</AnimatePresence>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button onClick={handleBack} disabled={currentStep === 0}>
								Back
							</Button>
							<Button
								onClick={handleNext}
								disabled={currentStep === steps.length - 1}
							>
								{currentStep === steps.length - 2 ? "Place Order" : "Next"}
							</Button>
						</CardFooter>
					</Card>
				</div>
				<div className="w-full lg:w-1/3">
					<Card className="sticky top-4">
						<CardHeader>
							<CardTitle>Order Summary</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-2">
								<div className="flex justify-between">
									<span>Subtotal</span>
									<span>Nrs. 600</span>
								</div>
								<div className="flex justify-between">
									<span>Delivery Fee</span>
									<span>Nrs. 50</span>
								</div>
								<Separator className="my-2" />
								<div className="flex justify-between font-bold">
									<span>Total</span>
									<span>Nrs. 650</span>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</MaxWidthWrapper>
	);
}
