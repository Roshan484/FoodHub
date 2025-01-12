import RestaurantSignUpForm from "@/components/auth/resturant-signup";

export const metadata = {
	title: "Sign Up as Restaurant | MultiVendor Food",
	description: "Create a new restaurant account with MultiVendor Food",
};

export default function RestaurantSignUpPage() {
	return (
		<div className="h-screen">
			<div className="px-4 sm:mx-auto sm:w-full sm:max-w-md shadow-lg rounded-md my-2 py-4">
				<h2 className="text-center text-3xl font-extrabold text-gray-900">
					Sign up as a Restaurant
				</h2>
				<RestaurantSignUpForm />
			</div>
		</div>
	);
}
