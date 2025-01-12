import { CheckCircle } from "lucide-react";

export default function ConfirmationStep() {
	return (
		<div className="text-center space-y-4">
			<CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
			<h2 className="text-2xl font-semibold">Order Confirmed!</h2>
			<p>Your order has been placed successfully.</p>
			<p>Order number: #12345</p>
			<p>Estimated delivery time: 30-45 minutes</p>
		</div>
	);
}
