import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function AddressStep() {
	const [addressType, setAddressType] = useState("home");

	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
			<RadioGroup
				value={addressType}
				onValueChange={setAddressType}
				className="flex space-x-4 mb-4"
			>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="home" id="home" />
					<Label htmlFor="home">Home</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="office" id="office" />
					<Label htmlFor="office">Office</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="other" id="other" />
					<Label htmlFor="other">Other</Label>
				</div>
			</RadioGroup>
			<div className="grid grid-cols-2 gap-4">
				<div className="space-y-2">
					<Label htmlFor="firstName">First Name</Label>
					<Input id="firstName" placeholder="John" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="lastName">Last Name</Label>
					<Input id="lastName" placeholder="Doe" />
				</div>
			</div>
			<div className="space-y-2">
				<Label htmlFor="streetAddress">Street Address</Label>
				<Input id="streetAddress" placeholder="1234 Main St" />
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div className="space-y-2">
					<Label htmlFor="city">City</Label>
					<Input id="city" placeholder="Kathmandu" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="postalCode">Postal Code</Label>
					<Input id="postalCode" placeholder="44600" />
				</div>
			</div>
			<div className="space-y-2">
				<Label htmlFor="phone">Phone Number</Label>
				<Input id="phone" placeholder="+977 98XXXXXXXX" />
			</div>
		</div>
	);
}
