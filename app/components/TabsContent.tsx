"use client";

import { ReactNode } from "react";

type TabsContentProps = {
	value: string;
	children: ReactNode;
	activeTab?: string;
};

export default function TabsContent({
	value,
	children,
	activeTab,
}: TabsContentProps) {
	if (activeTab !== value) return null;

	return <div className="mt-4">{children}</div>;
}