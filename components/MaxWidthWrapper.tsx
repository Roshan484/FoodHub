import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("mx-auto max-w-7xl w-full ", className)}>{children}</div>
	);
};

export default MaxWidthWrapper;
