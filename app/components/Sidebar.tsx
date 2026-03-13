"use client";

import { ReactNode, useState } from "react";
import { IconMenu } from "@tabler/icons-react";

type SidebarProps = {
	children: ReactNode;
	className?: string;
};

export default function Sidebar({ children, className = "" }: SidebarProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
			>
				<IconMenu size={20} />
			</button>

			{isOpen && (
				<div
					className="fixed inset-0 bg-black/40 z-40"
					onClick={() => setIsOpen(false)}
				/>
			)}

			<div
				className={`p-2 fixed top-0 left-0 h-full w-64 bg-white dark:bg-[#1C1C1C] shadow-lg z-50 transform transition-transform duration-300
				${isOpen ? "translate-x-0" : "-translate-x-full"} ${className}`}
			>
				<div className="p-4 flex justify-end">
					<button
						onClick={() => setIsOpen(false)}
						className="text-gray-500 cursor-pointer hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
					>
						Close
					</button>
				</div>
				<nav className="flex flex-col gap-1 px-2">{children}</nav>
			</div>
		</>
	);
}