"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";

export default function UserSignUpForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		password: "",
	});
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);

		try {
			// Here you would typically make an API call to register the user
			// For now, we'll just simulate a delay
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// If registration is successful, redirect to the dashboard
			router.push("/dashboard");
		} catch (error) {
			setError(
				`Failed to create account: ${error instanceof Error ? error.message : "Unknown error"}`
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<motion.form
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			onSubmit={handleSubmit}
			className="space-y-3 mt-4"
		>
			{error && (
				<Alert variant="destructive">
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}
			<div>
				<Label htmlFor="name">Full Name</Label>
				<Input
					id="name"
					name="name"
					type="text"
					autoComplete="name"
					required
					value={formData.name}
					onChange={(e) => setFormData({ ...formData, name: e.target.value })}
					className="mt-1"
				/>
			</div>
			<div>
				<Label htmlFor="email">Email address</Label>
				<Input
					id="email"
					name="email"
					type="email"
					autoComplete="email"
					required
					value={formData.email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
					className="mt-1"
				/>
			</div>
			<div>
				<Label htmlFor="phone">Phone Number</Label>
				<Input
					id="phone"
					name="phone"
					type="number"
					required
					value={formData.phoneNumber}
					onChange={(e) =>
						setFormData({ ...formData, phoneNumber: e.target.value })
					}
					className="mt-1"
				/>
			</div>
			<div>
				<Label htmlFor="password">Password</Label>
				<Input
					id="password"
					name="password"
					type="password"
					autoComplete="new-password"
					required
					value={formData.password}
					onChange={(e) =>
						setFormData({ ...formData, password: e.target.value })
					}
					className="mt-1"
				/>
			</div>
			<div>
				<Label htmlFor="confirmPassword">Confirm Password</Label>
				<Input
					id="confirmPassword"
					name="confirmPassword"
					type="password"
					autoComplete="new-password"
					required
					value={formData.password}
					onChange={(e) =>
						setFormData({ ...formData, password: e.target.value })
					}
					className="mt-1"
				/>
			</div>
			<div>
				<Button type="submit" className="w-full" disabled={isLoading}>
					{isLoading ? "Creating account..." : "Sign up"}
				</Button>
			</div>
			<div className="text-sm text-center">
				Already have an account?{" "}
				<Link
					href="/login"
					className="font-medium text-blue-500 hover:underline"
				>
					Log in
				</Link>
			</div>
		</motion.form>
	);
}
