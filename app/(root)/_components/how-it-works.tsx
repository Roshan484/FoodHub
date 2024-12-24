import { ChefHat, MonitorSmartphone, Pizza, Salad } from "lucide-react";

const steps = [
	{
		id: 1,
		title: "Choose Restaurant",
		description: "Browse our wide selection of local restaurants",
		icon: <ChefHat size={70} />,
	},
	{
		id: 2,
		title: "Select Your Meal",
		description: "Pick your favorite dishes from the menu",
		icon: <Salad size={70} />,
	},
	{
		id: 3,
		title: "Place Your Order",
		description: "Confirm your order and make a secure payment",
		icon: <MonitorSmartphone size={70} />,
	},
	{
		id: 4,
		title: "Enjoy Your Food",
		description: "Receive your delicious meal at your doorstep",
		icon: <Pizza size={70} />,
	},
];

export default function HowItWorks() {
	return (
		<section className="py-7 ">
			<div className="container dark:bg-muted py-7 rounded-md  mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
					How It Works
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{steps.map((step) => (
						<div
							key={step.id}
							className="flex flex-col items-center text-center"
						>
							<div className="">
								<div className="relative ">{step.icon}</div>
							</div>
							<h3 className="text-xl font-semibold mb-2 dark:text-white">
								{step.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
