"use client";

import { ReactNode, useEffect, useState } from "react";
import Button from "./Button";

type DialogProps = {
	open?: boolean;
	onClose?: () => void;
	title?: string;
	children: ReactNode;
	actions?: ReactNode;
};

export default function Dialog({
	open = false,
	onClose,
	title,
	children,
	actions,
}: DialogProps) {
	const [isOpen, setIsOpen] = useState(open);

	useEffect(() => {
		setIsOpen(open);
	}, [open]);

	const handleClose = () => {
		setIsOpen(false);
		onClose?.();
	};

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
			onClick={handleClose}
		>
			<div
				className="bg-white dark:bg-[#1C1C1C] rounded-lg shadow-lg w-96 max-w-full p-4 relative"
				onClick={(e) => e.stopPropagation()}
			>
				{title && (
					<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
						{title}
					</h3>
				)}
				<div className="mt-2 text-gray-800 dark:text-gray-200">
					{children}
				</div>
				<div className="mt-4 flex justify-end gap-2">{actions}</div>
				<button
					onClick={handleClose}
					className="absolute top-4 right-4 text-[#f1f1f1] cursor-pointer bg-red-500 h-5 w-5 rounded-full flex justify-center items-center"
				>
					✕
				</button>
			</div>
		</div>
	);
}
