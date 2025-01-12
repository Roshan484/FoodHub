import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function NotFound() {
	return (
		<MaxWidthWrapper className="h-screen flex items-center justify-center px-4 py-16 text-center">
			<div>
				<h2 className="text-3xl font-bold mb-4">Cuisine Not Found</h2>
				<p className="text-xl mb-8">
					We couldn&apos;t find the cuisine you&apos;re looking for. It might
					have been removed or doesn&apos;t exist.
				</p>
				<Link href="/cuisines" className="text-blue-600 hover:underline">
					← Back to All Cuisines
				</Link>
			</div>
		</MaxWidthWrapper>
	);
}
