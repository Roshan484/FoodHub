"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

import {
	ArrowLeft,
	ArrowRight,
	Utensils,
	Clock,
	DollarSign,
	MapPin,
} from "lucide-react";

const steps = [
	{ title: "Basic Info", icon: Utensils },
	{ title: "Details", icon: Clock },
	{ title: "Financials", icon: DollarSign },
	{ title: "Confirmation", icon: MapPin },
];

export default function RestaurantSignUpForm() {
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState({
		restaurantName: "",
		ownerName: "",
		email: "",
		password: "",
		address: "",
		description: "",
		cuisineType: "",
		openingHours: "",
		closingHours: "",
		deliveryRadius: "",
		averagePreparationTime: "",
		minimumOrderAmount: "",
		commissionRate: "",
		bankAccountNumber: "",
		taxIdentificationNumber: "",
		acceptedTerms: false,
	});
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSelectChange = (name: string, value: string) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleCheckboxChange = (checked: boolean) => {
		setFormData((prev) => ({ ...prev, acceptedTerms: checked }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);

		try {
			// Here you would typically make an API call to register the restaurant
			await new Promise((resolve) => setTimeout(resolve, 1000));
			router.push("/restaurant/dashboard");
		} catch (error) {
			setError(
				`Failed to create account: ${error instanceof Error ? error.message : "Unknown error"}`
			);
		} finally {
			setIsLoading(false);
		}
	};

	const nextStep = () =>
		setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
	const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

	const renderStep = () => {
		switch (currentStep) {
			case 0:
				return (
					<>
						<div className="space-y-3">
							<div>
								<Label htmlFor="restaurantName">Restaurant Name</Label>
								<Input
									id="restaurantName"
									name="restaurantName"
									value={formData.restaurantName}
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<Label htmlFor="ownerName">Owner Name</Label>
								<Input
									id="ownerName"
									name="ownerName"
									value={formData.ownerName}
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<Label htmlFor="email">Email address</Label>
								<Input
									id="email"
									name="email"
									type="email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									name="password"
									type="password"
									value={formData.password}
									onChange={handleChange}
									required
								/>
							</div>
						</div>
					</>
				);
			case 1:
				return (
					<>
						<div className="space-y-3">
							<div>
								<Label htmlFor="address">Restaurant Address</Label>
								<Input
									id="address"
									name="address"
									value={formData.address}
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<Label htmlFor="description">Restaurant Description</Label>
								<Textarea
									id="description"
									name="description"
									value={formData.description}
									onChange={handleChange}
									rows={3}
								/>
							</div>
							<div>
								<Label htmlFor="cuisineType">Cuisine Type</Label>
								<Select
									onValueChange={(value) =>
										handleSelectChange("cuisineType", value)
									}
								>
									<SelectTrigger>
										<SelectValue placeholder="Select cuisine type" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="italian">Italian</SelectItem>
										<SelectItem value="chinese">Chinese</SelectItem>
										<SelectItem value="indian">Indian</SelectItem>
										<SelectItem value="japanese">Japanese</SelectItem>
										<SelectItem value="mexican">Mexican</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="flex space-x-3">
								<div className="flex-1">
									<Label htmlFor="openingHours">Opening Hours</Label>
									<Input
										id="openingHours"
										name="openingHours"
										type="time"
										value={formData.openingHours}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="flex-1">
									<Label htmlFor="closingHours">Closing Hours</Label>
									<Input
										id="closingHours"
										name="closingHours"
										type="time"
										value={formData.closingHours}
										onChange={handleChange}
										required
									/>
								</div>
							</div>
						</div>
					</>
				);
			case 2:
				return (
					<>
						<div className="space-y-3">
							<div>
								<Label htmlFor="deliveryRadius">Delivery Radius (km)</Label>
								<Input
									id="deliveryRadius"
									name="deliveryRadius"
									type="number"
									value={formData.deliveryRadius}
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<Label htmlFor="averagePreparationTime">
									Average Preparation Time (minutes)
								</Label>
								<Input
									id="averagePreparationTime"
									name="averagePreparationTime"
									type="number"
									value={formData.averagePreparationTime}
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<Label htmlFor="minimumOrderAmount">Minimum Order Amount</Label>
								<Input
									id="minimumOrderAmount"
									name="minimumOrderAmount"
									type="number"
									value={formData.minimumOrderAmount}
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<Label htmlFor="commissionRate">Commission Rate (%)</Label>
								<Input
									id="commissionRate"
									name="commissionRate"
									type="number"
									value={formData.commissionRate}
									onChange={handleChange}
									required
								/>
							</div>
						</div>
					</>
				);
			case 3:
				return (
					<>
						<div className="space-y-3">
							<div>
								<Label htmlFor="bankAccountNumber">Bank Account Number</Label>
								<Input
									id="bankAccountNumber"
									name="bankAccountNumber"
									value={formData.bankAccountNumber}
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<Label htmlFor="taxIdentificationNumber">
									Tax Identification Number
								</Label>
								<Input
									id="taxIdentificationNumber"
									name="taxIdentificationNumber"
									value={formData.taxIdentificationNumber}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox
									id="acceptedTerms"
									checked={formData.acceptedTerms}
									onCheckedChange={handleCheckboxChange}
								/>
								<label
									htmlFor="acceptedTerms"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									I accept the terms and conditions
								</label>
							</div>
						</div>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<div className="flex flex-col">
			<div className=" py-3 overflow-y-auto ">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className="max-w-md mx-auto space-y-6"
				>
					<div className="text-center">
						<p className="text-muted-foreground mt-2">
							Join our platform and start selling your delicious food!
						</p>
					</div>

					{error && (
						<Alert variant="destructive">
							<AlertDescription>{error}</AlertDescription>
						</Alert>
					)}

					<div className="flex justify-between mb-8">
						{steps.map((step, index) => (
							<div key={step.title} className="flex flex-col items-center">
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center ${
										index <= currentStep
											? "bg-primary text-primary-foreground"
											: "bg-muted text-muted-foreground"
									}`}
								>
									<step.icon className="w-5 h-5" />
								</div>
								<span className="text-xs mt-2">{step.title}</span>
							</div>
						))}
					</div>

					<form onSubmit={handleSubmit}>
						<AnimatePresence mode="wait">
							<motion.div
								key={currentStep}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.2 }}
							>
								{renderStep()}
							</motion.div>
						</AnimatePresence>
					</form>
				</motion.div>
			</div>

			<div className="">
				<div className="flex justify-between max-w-md mx-auto">
					<Button
						type="button"
						variant="outline"
						onClick={prevStep}
						disabled={currentStep === 0}
					>
						<ArrowLeft className="w-4 h-4 mr-2" /> Previous
					</Button>
					{currentStep < steps.length - 1 ? (
						<Button type="button" onClick={nextStep}>
							Next <ArrowRight className="w-4 h-4 ml-2" />
						</Button>
					) : (
						<Button
							type="submit"
							disabled={isLoading || !formData.acceptedTerms}
						>
							{isLoading ? "Creating account..." : "Sign up"}
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
