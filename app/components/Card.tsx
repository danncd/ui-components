"use client";

import { ReactNode } from "react";

type CardProps = {
	children: ReactNode;
	className?: string;
	header?: ReactNode;
	footer?: ReactNode;
};

export default function Card({
	children,
	className,
	header,
	footer,
}: CardProps) {
	return (
		<div
			className={`
        bg-white dark:bg-[#1C1C1C] 
        text-gray-900 dark:text-gray-100
        rounded-lg border border-gray-400 hover:shadow-lg
        px-3 py-2
        transition-all duration-200
        ${className || ""}
      `}
		>
			{header && <div className="mb-2 font-semibold">{header}</div>}
			<div>{children}</div>
			{footer && (
				<div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
					{footer}
				</div>
			)}
		</div>
	);
}
