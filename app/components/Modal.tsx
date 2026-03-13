"use client";

import { ReactNode, useEffect, useState } from "react";

type ModalProps = {
	open?: boolean;
	onClose?: () => void;
	title?: string;
	children: ReactNode;
	className?: string;
};

export default function Modal({
	open = false,
	onClose,
	title,
	children,
	className,
}: ModalProps) {
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
				className={`rounded-xl shadow-xl 
				w-150 max-w-[90vw] max-h-[80vh] 
				p-4 relative overflow-y-auto
				bg-white dark:bg-[#1C1C1C]
				${className || ""}`}
				onClick={(e) => e.stopPropagation()}
			>
				{title && (
					<h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
						{title}
					</h2>
				)}

				<div className="text-gray-800 dark:text-gray-200">
					{children}
				</div>

				<button
					onClick={handleClose}
					className="absolute top-4 right-4 text-sm 
					bg-red-500 text-white rounded-full 
					w-5 h-5 flex items-center justify-center 
					cursor-pointer"
				>
					✕
				</button>
			</div>
		</div>
	);
}