"use client";

import { InputHTMLAttributes } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	className?: string;
};

export default function CheckBox({
	label,
	className,
	disabled,
	...props
}: CheckboxProps) {
	return (
		<label className="flex items-center gap-2 cursor-pointer">
			<input
				type="checkbox"
				disabled={disabled}
				className={`
          w-4 h-4
          rounded
          accent-gray-900 dark:accent-gray-100
          bg-white dark:bg-[#1C1C1C]
          transition-all duration-200
          ${className || ""}
        `}
				{...props}
			/>

			{label && (
				<span className="text-gray-900 dark:text-gray-100">
					{label}
				</span>
			)}
		</label>
	);
}
