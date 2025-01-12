import UserSignUpForm from "@/components/auth/user-signup";

export const metadata = {
	title: "Sign Up as User | MultiVendor Food",
	description: "Create a new user account with MultiVendor Food",
};

export default function UserSignUpPage() {
	return (
		<div className=" sm:mx-auto sm:w-full sm:max-w-md">
			<div className="bg-white py-4 px-4 my-5 shadow sm:rounded-lg sm:px-10">
				<h2 className="text-center text-2xl font-extrabold text-gray-900">
					Sign up as a User
				</h2>
				<UserSignUpForm />
			</div>
		</div>
	);
}
