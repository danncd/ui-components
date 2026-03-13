"use client";

import { InputHTMLAttributes, useState } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	className?: string;
};

export default function Input({
	className,
	disabled,
	type,
	...props
}: InputProps) {
	const [showPassword, setShowPassword] = useState(false);
	const isPassword = type === "password";

	return (
		<div className="relative w-full">
			<input
				disabled={disabled}
				type={isPassword ? (showPassword ? "text" : "password") : type}
				className={`px-3 py-2 pr-14 outline-1 outline-gray-400 rounded-md w-full 
          placeholder-gray-500 dark:placeholder-gray-400
          text-gray-900 dark:text-gray-100
          bg-white dark:bg-[#1C1C1C]
          ${className || ""} transition-all duration-200`}
				{...props}
			/>
			{isPassword && (
				<button
					type="button"
					onClick={() => setShowPassword(!showPassword)}
					className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer"
				>
					{showPassword ? "Hide" : "Show"}
				</button>
			)}
		</div>
	);
}
