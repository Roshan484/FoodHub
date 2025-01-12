import Image from "next/image";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

export default function PaymentStep() {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold mb-4">Payment Method</h2>

			<div className="space-y-4 mt-4">
				<p>Choose your digital wallet:</p>
				<div className="grid  gap-4">
					<div className="p-4 flex items-center w-full border rounded-lg hover:bg-gray-100 dark:hover:bg-muted transition-colors">
						<Checkbox
							id="esewa"
							className="mr-4 rounded-full data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
						/>
						<div>
							<Image src={"/esewa.png"} width={30} height={30} alt="esewa" />
						</div>
						<Label htmlFor="esewa" className="ml-4 w-full ">
							{" "}
							eSewa
						</Label>
					</div>
					<div className="p-4 flex items-center w-full border rounded-lg hover:bg-gray-100 dark:hover:bg-muted transition-colors">
						<Checkbox
							id="khalti"
							className="mr-4 rounded-full data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
						/>
						<div>
							<Image src={"/Khalti.jpg"} width={50} height={30} alt="esewa" />
						</div>
						<Label htmlFor="khalti" className="ml-4 w-full ">
							{" "}
							Khalti
						</Label>
					</div>
				</div>
			</div>
		</div>
	);
}
