"use client";

import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	className?: string;
	resize?: "none" | "vertical" | "horizontal" | "both";
};

export default function Textarea({
	className,
	disabled,
	resize = "vertical",
	...props
}: TextareaProps) {
	const resizeClasses = {
		none: "resize-none",
		vertical: "resize-y",
		horizontal: "resize-x",
		both: "resize",
	};

	return (
		<div className="relative w-full">
			<textarea
				disabled={disabled}
				className={`
          px-3 py-2 outline-1 outline-gray-400 rounded-md w-full
          placeholder-gray-500 dark:placeholder-gray-400
          text-gray-900 dark:text-gray-100
          bg-white dark:bg-[#1C1C1C]
          ${resizeClasses[resize]}
          ${className || ""}
          transition-all duration-200
        `}
				{...props}
			/>
		</div>
	);
}
