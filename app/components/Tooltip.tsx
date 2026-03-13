"use client";

import { ReactNode, useState } from "react";

type TooltipProps = {
	content: ReactNode;
	children: ReactNode;
	placement?: "top" | "bottom" | "left" | "right";
};

export default function Tooltip({
	content,
	children,
	placement = "top",
}: TooltipProps) {
	const [visible, setVisible] = useState(false);

	const placementClasses: Record<string, string> = {
		top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
		bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
		left: "right-full top-1/2 -translate-y-1/2 mr-3",
		right: "left-full top-1/2 -translate-y-1/2 ml-3",
	};

	const arrowClasses: Record<string, string> = {
		top: "absolute top-full left-1/2 -translate-x-1/2 border-x-6 border-x-transparent border-t-6 border-t-[#212121] dark:border-t-gray-300",
		bottom:
			"absolute bottom-full left-1/2 -translate-x-1/2 border-x-6 border-x-transparent border-b-6 border-b-[#212121] dark:border-b-gray-300",
		left: "absolute left-full top-1/2 -translate-y-1/2 border-y-6 border-y-transparent border-l-6 border-l-[#212121] dark:border-l-gray-300",
		right:
			"absolute right-full top-1/2 -translate-y-1/2 border-y-6 border-y-transparent border-r-6 border-r-[#212121] dark:border-r-gray-300",
	};

	return (
		<div
			className="relative inline-block"
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
		>
			{children}

			{visible && (
				<div
					className={`absolute z-50 px-3 py-1 rounded-md text-sm 
					bg-[#212121] text-white dark:bg-gray-300 dark:text-gray-900
					whitespace-nowrap ${placementClasses[placement]}`}
				>
					{content}

					<div className={arrowClasses[placement]} />
				</div>
			)}
		</div>
	);
}