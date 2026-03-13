"use client";

import { ReactNode } from "react";

type TabsListProps = {
	children: ReactNode;
	activeTab?: string;
	setActiveTab?: (value: string) => void;
};

export default function TabsList({
	children,
	activeTab,
	setActiveTab,
}: TabsListProps) {
	return (
		<div className="flex gap-1 border-b border-gray-300 dark:border-gray-700">
			{Array.isArray(children)
				? children.map((child: any) => ({
						...child,
						props: {
							...child.props,
							activeTab,
							setActiveTab,
						},
				  }))
				: children}
		</div>
	);
}

TabsList.displayName = "TabsList";