"use client";

import { useEffect } from "react";

type ToastProps = {
	message: string;
	open: boolean;
	onClose: () => void;
	duration?: number;
	variant?: "normal" | "success" | "error";
};

export default function Toast({
	message,
	open,
	onClose,
	duration = 3000,
	variant = "normal",
}: ToastProps) {
	useEffect(() => {
		if (!open) return;

		const timer = setTimeout(() => {
			onClose();
		}, duration);

		return () => clearTimeout(timer);
	}, [open, duration, onClose]);

	if (!open) return null;

	const variantStyles = {
		normal: "bg-[#212121] text-white",
		success: "bg-green-600 text-white",
		error: "bg-red-600 text-white",
	};

	return (
		<div className="fixed bottom-6 right-6 z-50">
			<div
				className={`px-4 py-2 rounded-lg shadow-lg text-sm 
				${variantStyles[variant]} 
				animate-fadeIn`}
			>
				{message}
			</div>
		</div>
	);
}