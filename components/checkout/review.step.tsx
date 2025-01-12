import { Separator } from "@/components/ui/separator";

export default function ReviewStep() {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold mb-4">Review Your Order</h2>
			<div className="space-y-4">
				<div>
					<h3 className="font-semibold">Delivery Address</h3>
					<p>John Doe</p>
					<p>1234 Main St</p>
					<p>Kathmandu, 44600</p>
					<p>+977 9800000000</p>
				</div>

				<Separator />
				<div>
					<h3 className="font-semibold">Order Items</h3>
					<ul className="list-disc list-inside">
						<li>2x Momo - Nrs. 300</li>
						<li>1x Margherita Pizza - Nrs. 300</li>
					</ul>
				</div>
				<Separator />
				<div>
					<h3 className="font-semibold">Order Total</h3>
					<p>Subtotal: Nrs. 600</p>
					<p>Delivery Fee: Nrs. 50</p>
					<p className="font-bold">Total: Nrs. 650</p>
				</div>
			</div>
		</div>
	);
}
