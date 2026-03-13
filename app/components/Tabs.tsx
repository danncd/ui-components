"use client";

import { ReactNode, useState } from "react";

type TabsProps = {
	defaultValue: string;
	children: ReactNode;
};

export default function Tabs({ defaultValue, children }: TabsProps) {
	const [activeTab, setActiveTab] = useState(defaultValue);

	return (
		<div>
			{Array.isArray(children)
				? children.map((child: any) =>
						child.type.displayName === "TabsList"
							? { ...child, props: { ...child.props, activeTab, setActiveTab } }
							: { ...child, props: { ...child.props, activeTab } }
				  )
				: children}
		</div>
	);
}